"use client";

import { useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------ *
 *  Sample data. This dashboard is a self-contained DEMO — no backend. *
 *  Numbers are illustrative of an outbound AI lead-calling campaign.  *
 * ------------------------------------------------------------------ */

const SERIES = {
  green: "#1d7a43", // Dialed  (brand green, CVD-validated)
  blue: "#2563eb", // Connected (CVD-validated against the green)
};

function day(d) {
  return new Date(2026, 10, d).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

const RANGES = {
  "7d": {
    label: "7 days",
    points: [8, 9, 10, 11, 12, 13, 14].map((d, i) => ({
      x: day(d),
      dialed: [96, 132, 118, 150, 141, 88, 124][i],
      connected: [41, 58, 52, 69, 63, 37, 55][i],
    })),
    kpis: {
      dialed: "849",
      connected: "375",
      connectRate: "44.2%",
      qualified: "162",
      booked: "71",
      avg: "3m 48s",
    },
    deltas: { dialed: "+12%", connected: "+9%", connectRate: "+2.1pt", booked: "+14%" },
    outcomes: [
      ["Appointment booked", 71],
      ["Qualified lead", 91],
      ["Call back later", 64],
      ["Not interested", 83],
      ["No answer", 312],
      ["Voicemail", 162],
    ],
  },
  "14d": {
    label: "14 days",
    points: Array.from({ length: 14 }, (_, i) => {
      const dialed = [88, 96, 132, 118, 150, 141, 92, 124, 108, 139, 126, 155, 147, 101][i];
      const connected = [36, 41, 58, 52, 69, 63, 39, 55, 47, 62, 56, 71, 66, 44][i];
      return { x: day(i + 1), dialed, connected };
    }),
    kpis: {
      dialed: "1,717",
      connected: "759",
      connectRate: "44.2%",
      qualified: "328",
      booked: "143",
      avg: "3m 52s",
    },
    deltas: { dialed: "+18%", connected: "+15%", connectRate: "+1.4pt", booked: "+21%" },
    outcomes: [
      ["Appointment booked", 143],
      ["Qualified lead", 185],
      ["Call back later", 131],
      ["Not interested", 168],
      ["No answer", 629],
      ["Voicemail", 461],
    ],
  },
  "30d": {
    label: "30 days",
    points: Array.from({ length: 30 }, (_, i) => {
      const base = 120 + Math.round(34 * Math.sin(i / 2.1)) + (i % 7 === 5 ? -40 : 0);
      const dialed = Math.max(70, base + (i % 3) * 6);
      const connected = Math.round(dialed * (0.42 + 0.03 * Math.sin(i / 3)));
      return { x: `D${i + 1}`, dialed, connected };
    }),
    kpis: {
      dialed: "3,642",
      connected: "1,598",
      connectRate: "43.9%",
      qualified: "694",
      booked: "298",
      avg: "3m 46s",
    },
    deltas: { dialed: "+24%", connected: "+19%", connectRate: "+0.8pt", booked: "+27%" },
    outcomes: [
      ["Appointment booked", 298],
      ["Qualified lead", 396],
      ["Call back later", 272],
      ["Not interested", 341],
      ["No answer", 1334],
      ["Voicemail", 1001],
    ],
  },
};

const RECENT = [
  ["Priya Menon", "+91 98••• ••412", "2m ago", "4m 12s", "Booked", "good", 92],
  ["James Carter", "+44 77•• ••• 318", "9m ago", "3m 05s", "Qualified", "good", 81],
  ["Rahul Verma", "+91 90••• ••007", "14m ago", "1m 44s", "Call back", "warn", 63],
  ["Sophie Allen", "+44 78•• ••• 902", "22m ago", "0m 38s", "Not interested", "neutral", 28],
  ["Aarav Shah", "+91 99••• ••550", "31m ago", "5m 27s", "Booked", "good", 95],
  ["Megan Price", "+44 74•• ••• 164", "38m ago", "—", "No answer", "neutral", 0],
];

/* ------------------------------ Line chart ------------------------------ */

function LineChart({ points }) {
  const [hover, setHover] = useState(null);
  const wrapRef = useRef(null);

  const W = 760;
  const H = 280;
  const padL = 10;
  const padR = 10;
  const padT = 18;
  const padB = 30;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const max = Math.max(...points.map((p) => p.dialed)) * 1.12;
  const n = points.length;
  const xAt = (i) => padL + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
  const yAt = (v) => padT + innerH - (v / max) * innerH;

  const line = (key) => points.map((p, i) => `${xAt(i)},${yAt(p[key])}`).join(" ");
  const area = () =>
    `${points.map((p, i) => `${xAt(i)},${yAt(p.dialed)}`).join(" ")} ${xAt(
      n - 1
    )},${padT + innerH} ${xAt(0)},${padT + innerH}`;

  const grid = [0, 0.25, 0.5, 0.75, 1].map((f) => ({
    y: padT + innerH - f * innerH,
    v: Math.round((max * f) / 10) * 10,
  }));

  // Show at most ~8 x labels
  const step = Math.ceil(n / 8);

  const onMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const rel = (e.clientX - rect.left) / rect.width; // 0..1
    const i = Math.round(rel * (n - 1));
    setHover(Math.max(0, Math.min(n - 1, i)));
  };

  return (
    <div className="aic-chart" ref={wrapRef} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} className="aic-svg" role="img" aria-label="Calls dialed and connected over time">
        <defs>
          <linearGradient id="aicArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={SERIES.green} stopOpacity="0.20" />
            <stop offset="1" stopColor={SERIES.green} stopOpacity="0" />
          </linearGradient>
        </defs>

        {grid.map((g, i) => (
          <g key={i}>
            <line x1={padL} x2={W - padR} y1={g.y} y2={g.y} stroke="#e4efe8" strokeWidth="1" />
            <text x={padL} y={g.y - 5} className="aic-axis">{g.v}</text>
          </g>
        ))}

        <polygon points={area()} fill="url(#aicArea)" />
        <polyline points={line("dialed")} fill="none" stroke={SERIES.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={line("connected")} fill="none" stroke={SERIES.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {points.map((p, i) =>
          i % step === 0 || i === n - 1 ? (
            <text key={i} x={xAt(i)} y={H - 10} className="aic-axis" textAnchor="middle">
              {p.x}
            </text>
          ) : null
        )}

        {hover != null && (
          <g>
            <line x1={xAt(hover)} x2={xAt(hover)} y1={padT} y2={padT + innerH} stroke="#9fb8a8" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={xAt(hover)} cy={yAt(points[hover].dialed)} r="4.5" fill="#fff" stroke={SERIES.green} strokeWidth="2.5" />
            <circle cx={xAt(hover)} cy={yAt(points[hover].connected)} r="4.5" fill="#fff" stroke={SERIES.blue} strokeWidth="2.5" />
          </g>
        )}
      </svg>

      {hover != null && (
        <div
          className="aic-tip"
          style={{ left: `${(xAt(hover) / W) * 100}%` }}
        >
          <strong>{points[hover].x}</strong>
          <span><i style={{ background: SERIES.green }} />Dialed <b>{points[hover].dialed}</b></span>
          <span><i style={{ background: SERIES.blue }} />Connected <b>{points[hover].connected}</b></span>
        </div>
      )}
    </div>
  );
}

/* --------------------------- Outcomes bars --------------------------- */

function Outcomes({ rows }) {
  const max = Math.max(...rows.map((r) => r[1]));
  return (
    <ul className="aic-bars">
      {rows.map(([name, val]) => (
        <li key={name}>
          <div className="aic-bar-top">
            <span>{name}</span>
            <b>{val.toLocaleString()}</b>
          </div>
          <div className="aic-bar-track">
            <span className="aic-bar-fill" style={{ width: `${(val / max) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ Dashboard ------------------------------ */

export default function CallingDashboard() {
  const [range, setRange] = useState("14d");
  const data = RANGES[range];

  const kpis = useMemo(
    () => [
      { k: "Calls dialed", v: data.kpis.dialed, d: data.deltas.dialed, up: true },
      { k: "Connected", v: data.kpis.connected, d: data.deltas.connected, up: true },
      { k: "Connect rate", v: data.kpis.connectRate, d: data.deltas.connectRate, up: true },
      { k: "Qualified leads", v: data.kpis.qualified, d: null },
      { k: "Appointments booked", v: data.kpis.booked, d: data.deltas.booked, up: true, hot: true },
      { k: "Avg call time", v: data.kpis.avg, d: null },
    ],
    [data]
  );

  return (
    <div className="aic-dash">
      {/* Toolbar */}
      <div className="aic-toolbar">
        <div className="aic-campaign">
          <span className="aic-live"><i />Live</span>
          <div>
            <strong>Q4 Outbound — Warm Leads</strong>
            <span>AI voice agent · 2 lines active</span>
          </div>
        </div>
        <div className="aic-range" role="tablist" aria-label="Time range">
          {Object.entries(RANGES).map(([key, r]) => (
            <button
              key={key}
              role="tab"
              aria-selected={range === key}
              className={range === key ? "on" : ""}
              onClick={() => setRange(key)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI tiles */}
      <div className="aic-kpis">
        {kpis.map((t) => (
          <div className={`aic-kpi${t.hot ? " hot" : ""}`} key={t.k}>
            <span className="aic-kpi-k">{t.k}</span>
            <b className="aic-kpi-v">{t.v}</b>
            {t.d && (
              <span className={`aic-kpi-d${t.up ? " up" : ""}`}>
                ▲ {t.d} <em>vs prev.</em>
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="aic-grid">
        <div className="aic-panel">
          <div className="aic-panel-head">
            <h3>Calls over time</h3>
            <div className="aic-legend">
              <span><i style={{ background: SERIES.green }} />Dialed</span>
              <span><i style={{ background: SERIES.blue }} />Connected</span>
            </div>
          </div>
          <LineChart points={data.points} />
        </div>

        <div className="aic-panel">
          <div className="aic-panel-head">
            <h3>Call outcomes</h3>
            <span className="aic-sub">{data.label}</span>
          </div>
          <Outcomes rows={data.outcomes} />
        </div>
      </div>

      {/* Recent calls */}
      <div className="aic-panel">
        <div className="aic-panel-head">
          <h3>Recent calls</h3>
          <span className="aic-sub">Auto-logged by the agent</span>
        </div>
        <div className="aic-table-wrap">
          <table className="aic-table">
            <thead>
              <tr>
                <th>Lead</th>
                <th>Phone</th>
                <th>When</th>
                <th>Duration</th>
                <th>Outcome</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {RECENT.map((r, i) => (
                <tr key={i}>
                  <td data-label="Lead"><strong>{r[0]}</strong></td>
                  <td data-label="Phone" className="aic-mono">{r[1]}</td>
                  <td data-label="When">{r[2]}</td>
                  <td data-label="Duration" className="aic-mono">{r[3]}</td>
                  <td data-label="Outcome">
                    <span className={`aic-badge ${r[4] === "Booked" || r[4] === "Qualified" ? "good" : r[4] === "Call back" ? "warn" : "neutral"}`}>
                      {r[4]}
                    </span>
                  </td>
                  <td data-label="Score">
                    <span className="aic-score">
                      <span className="aic-score-bar"><i style={{ width: `${r[6]}%` }} /></span>
                      {r[6]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="aic-note">
        Demo dashboard with sample data — shown to illustrate how the automation
        reports on a live outbound campaign.
      </p>
    </div>
  );
}

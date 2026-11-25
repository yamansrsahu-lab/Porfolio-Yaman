"use client";

import { useEffect } from "react";

/* Loads the official ElevenLabs Conversational AI widget and mounts the
   agent. The agent is public (no auth, empty allowlist), so visitors can
   talk to it straight away — voice or text, no login. The widget renders
   its own floating "Start call" button (bottom-right). */

const AGENT_ID = "agent_3201m86gy5j6e6jbkxqtdkavppf7";
const SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";

export default function TalkWidget() {
  useEffect(() => {
    if (document.getElementById("elevenlabs-convai-script")) return;
    const s = document.createElement("script");
    s.id = "elevenlabs-convai-script";
    s.src = SCRIPT_SRC;
    s.async = true;
    s.type = "text/javascript";
    document.body.appendChild(s);
  }, []);

  // Custom element upgraded by the script once it loads.
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="${AGENT_ID}"></elevenlabs-convai>`,
      }}
    />
  );
}

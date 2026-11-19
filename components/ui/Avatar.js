"use client";

import { useState } from "react";

// Profile visual. Tries a real photo at /assets/img/yaman-sahu.jpg and
// falls back to a premium gradient monogram if the file is not there yet.
export default function Avatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="avatar-card rv">
      <div className="avatar-media">
        {!failed ? (
          <img
            src="/assets/img/yaman-sahu.jpg"
            alt="Yaman Sahu, full-stack developer and UI/UX designer"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="avatar-mono" aria-hidden="true">
            YS
          </span>
        )}
      </div>
      <div className="avatar-foot">
        <span className="avatar-dot" aria-hidden="true"></span>
        Available for new projects
      </div>
    </div>
  );
}

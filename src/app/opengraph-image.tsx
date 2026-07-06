import { ImageResponse } from "next/og";

export const alt = "Suraj Prakash — Senior Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafbfc",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#1D65AF",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            SP
          </div>
          <div style={{ fontSize: 28, color: "#5b6b7f" }}>
            Suraj Prakash · Senior Product Manager
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#0f1c2e",
              lineHeight: 1.1,
            }}
          >
            I don&apos;t just write PRDs.
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#1D65AF",
              lineHeight: 1.1,
            }}
          >
            I ship them.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 26, color: "#5b6b7f" }}>
            Senior PM · DOOH &amp; Programmatic Ad Tech · AI-Assisted 0→1 Builder
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              border: "2px solid #1D65AF",
              color: "#1D65AF",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Kuala Lumpur, Malaysia
          </div>
        </div>
      </div>
    ),
    size
  );
}

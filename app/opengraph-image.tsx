import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ForScribe — Turn voice memos into your next book";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(139,92,246,0.35), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              color: "#000",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            FS
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#f5f5f7" }}>
            ForScribe
          </span>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "#f5f5f7",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
            padding: "0 40px",
          }}
        >
          Turn voice memos into your next book.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#9a9aa5",
          }}
        >
          Transcribe · Group · Rate — entirely offline
        </div>
      </div>
    ),
    { ...size },
  );
}

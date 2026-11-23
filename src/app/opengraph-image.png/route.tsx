import { ImageResponse } from "next/og";
import { profile, shareImage } from "@/data/portfolio";

export const dynamic = "force-static";

const size = { width: shareImage.width, height: shareImage.height };

export function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start", padding: 96,
        background: "#0b1119", color: "#f4bd5e",
      }}>
        <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1.1 }}>{profile.name}</div>
        <div style={{ fontSize: 34, marginTop: 24 }}>{profile.title}</div>
        <div style={{ fontSize: 27, marginTop: 10, color: "#d9aa62" }}>.NET APIs · Enterprise modernization · Search</div>
      </div>
    ), size,
  );
}

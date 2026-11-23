import { ImageResponse } from "next/og";
import { profile, shareImage } from "@/data/portfolio";

export const alt = shareImage.alt;
export const size = { width: shareImage.width, height: shareImage.height };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", padding: 40,
        background: "#9d8060", color: "#f4bd5e",
      }}>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",
          flex: 1, padding: 72, border: "14px solid #281e16", borderRadius: 64, background: "#0b1119",
        }}>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1.1 }}>{profile.name}</div>
          <div style={{ fontSize: 34, marginTop: 24 }}>{profile.title}</div>
          <div style={{ fontSize: 27, marginTop: 10, color: "#d9aa62" }}>.NET APIs · Enterprise modernization · Search</div>
        </div>
      </div>
    ), size,
  );
}

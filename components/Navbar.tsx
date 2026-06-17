import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          JONEXO7OFFICIAL
        </Link>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            🏠 Inicio
          </Link>

          <a
            href="https://www.twitch.tv/jonexo7official"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            🔴 Directo
          </a>

          <Link href="/fc" style={{ color: "white", textDecoration: "none" }}>
            ⚽ FC
          </Link>

          <Link href="/cod" style={{ color: "white", textDecoration: "none" }}>
            🧟 COD
          </Link>

          <Link href="/gta" style={{ color: "white", textDecoration: "none" }}>
            🚗 GTA
          </Link>

          <Link
            href="/music-room"
            style={{ color: "white", textDecoration: "none" }}
          >
            🎵 Music
          </Link>

          <Link
            href="/hall-of-fame"
            style={{ color: "white", textDecoration: "none" }}
          >
            🏆 Hall Of Fame
          </Link>
        </div>
      </div>
    </nav>
  );
}
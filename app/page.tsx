import GameCard from "../components/GameCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url('/jonexo-overlay.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h1
              style={{
                fontSize: "4rem",
                marginBottom: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              JONEXO7OFFICIAL
            </h1>

            <h2
              style={{
                opacity: 0.9,
                marginBottom: "15px",
              }}
            >
              Gaming Community
            </h2>

            <p
              style={{
                opacity: 0.8,
                marginBottom: "30px",
              }}
            >
              FC • COD Zombies • GTA • Comunidad
            </p>

            <a
              href="https://www.twitch.tv/jonexo7official"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#9146FF",
                color: "white",
                padding: "14px 30px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0 0 20px rgba(145,70,255,0.5)",
              }}
            >
              🔴 VER DIRECTO
            </a>
          </div>

          {/* EVENTO DESTACADO */}

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            <h2>🔥 EVENTO DESTACADO</h2>

            <h3>FC Tournament #1</h3>

            <p
              style={{
                marginBottom: "20px",
                opacity: 0.9,
              }}
            >
              Las inscripciones se abrirán durante los directos.
            </p>

            <a
              href="/inscripciones"
              style={{
                display: "inline-block",
                background: "#9146FF",
                color: "white",
                padding: "14px 30px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              🚀 INSCRIBIRSE
            </a>

            <div
              style={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              🔴 INSCRIPCIONES CERRADAS
            </div>
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            🎮 Juegos Principales
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            <GameCard
              title="FC"
              description="Torneos, Clubes Pro y VS Seguidores"
              href="/fc"
              icon="⚽"
            />

            <GameCard
              title="COD Zombies"
              description="Easter Eggs, mapas e intentos"
              href="/cod"
              icon="🧟"
            />

            <GameCard
              title="GTA"
              description="Carreras y eventos de comunidad"
              href="/gta"
              icon="🚗"
            />
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            🌍 Comunidad
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            <GameCard
              title="Inscripciones"
              description="Torneos, eventos y Clubes Pro"
              href="/inscripciones"
              icon="📝"
            />

            <GameCard
              title="Music Room"
              description="Cola musical de la comunidad"
              href="/music-room"
              icon="🎵"
            />

            <GameCard
              title="Clips"
              description="Mejores momentos del canal"
              href="/clips"
              icon="🎬"
            />

            <GameCard
              title="Hall Of Fame"
              description="Campeones y leyendas"
              href="/hall-of-fame"
              icon="🏆"
            />
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            🚀 Juegos Secundarios
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <GameCard
              title="Fortnite"
              description="Eventos y torneos"
              href="/fortnite"
              icon="🏝️"
            />

            <GameCard
              title="Rocket League"
              description="Competiciones y rankings"
              href="/rocketleague"
              icon="🚀"
            />
          </div>
        </div>
      </main>
    </>
  );
}
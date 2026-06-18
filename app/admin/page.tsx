import Navbar from "../../components/Navbar";
import GameCard from "../../components/GameCard";

export default function AdminPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#0f172a",
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
              }}
            >
              👑 PANEL ADMIN
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Centro de control de JONEXO7OFFICIAL
            </p>
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            🎮 Gestión Juegos
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
              title="FC Admin"
              description="Torneos, ligas y clubes"
              href="/admin/fc"
              icon="⚽"
            />

            <GameCard
              title="COD Admin"
              description="Easter Eggs y récords"
              href="/admin/cod"
              icon="🧟"
            />

            <GameCard
              title="GTA Admin"
              description="Carreras y eventos"
              href="/admin/gta"
              icon="🚗"
            />

            <GameCard
              title="Fortnite Admin"
              description="Torneos y desafíos"
              href="/admin/fortnite"
              icon="🏝️"
            />

            <GameCard
              title="Rocket League Admin"
              description="Club y rankings"
              href="/admin/rocketleague"
              icon="🚀"
            />
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            🌍 Gestión Comunidad
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
              title="Inscripciones"
              description="Abrir y cerrar registros"
              href="/admin/inscripciones"
              icon="📝"
            />

            <GameCard
              title="Music Room"
              description="Gestionar canciones"
              href="/admin/musicroom"
              icon="🎵"
            />

            <GameCard
              title="Clips"
              description="Gestionar clips"
              href="/admin/clips"
              icon="🎬"
            />

            <GameCard
              title="Hall Of Fame"
              description="Añadir campeones"
              href="/admin/hall-of-fame"
              icon="🏆"
            />

            <GameCard
              title="Settings"
              description="Configuración global"
              href="/admin/settings"
              icon="👑"
            />
          </div>
        </div>
      </main>
    </>
  );
}
import Navbar from "../../components/Navbar";
import GameCard from "../../components/GameCard";

export default function RocketLeaguePage() {
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
              🚀 ROCKET LEAGUE HUB
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Torneos · Comunidad · Rankings
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <GameCard
              title="Torneos"
              description="Competiciones y campeonatos"
              href="/rocketleague/torneos"
              icon="🏆"
            />

            <GameCard
              title="Enfrentamientos"
              description="Retos de la comunidad"
              href="/rocketleague/enfrentamientos"
              icon="⚔️"
            />

            <GameCard
              title="Club Comunidad"
              description="Equipo oficial Rocket League"
              href="/rocketleague/club"
              icon="👥"
            />

            <GameCard
              title="Rankings"
              description="Clasificaciones oficiales"
              href="/rocketleague/rankings"
              icon="📊"
            />

            <GameCard
              title="Historial"
              description="Campeones y eventos históricos"
              href="/rocketleague/historial"
              icon="📜"
            />

            <GameCard
              title="Normas"
              description="Normas oficiales Rocket League"
              href="/rocketleague/normas"
              icon="📜"
            />
          </div>
        </div>
      </main>
    </>
  );
}
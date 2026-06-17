import Navbar from "../../components/Navbar";
import GameCard from "../../components/GameCard";

export default function FortnitePage() {
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
              🏝 FORTNITE HUB
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Torneos · Desafíos · Comunidad
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
              href="/fortnite/torneos"
              icon="🏆"
            />

            <GameCard
              title="Enfrentamientos"
              description="Retos de la comunidad"
              href="/fortnite/enfrentamientos"
              icon="⚔️"
            />

            <GameCard
              title="Desafíos"
              description="Misiones y retos especiales"
              href="/fortnite/desafios"
              icon="🎯"
            />

            <GameCard
              title="Rankings"
              description="Clasificaciones oficiales"
              href="/fortnite/rankings"
              icon="📊"
            />

            <GameCard
              title="Historial"
              description="Campeones y eventos históricos"
              href="/fortnite/historial"
              icon="📜"
            />

            <GameCard
              title="Normas"
              description="Normas oficiales Fortnite"
              href="/fortnite/normas"
              icon="📜"
            />
          </div>
        </div>
      </main>
    </>
  );
}
import Navbar from "../../components/Navbar";
import GameCard from "../../components/GameCard";

export default function GTAPage() {
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
              🚗 GTA HUB
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Carreras · Eventos · Comunidad
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
              title="Carreras"
              description="Competiciones y campeonatos"
              href="/gta/carreras"
              icon="🏁"
            />

            <GameCard
              title="Eventos"
              description="Eventos especiales de comunidad"
              href="/gta/eventos"
              icon="🎪"
            />

            <GameCard
              title="Rankings"
              description="Clasificaciones y estadísticas"
              href="/gta/rankings"
              icon="📊"
            />

            <GameCard
              title="Historial"
              description="Eventos y campeones históricos"
              href="/gta/historial"
              icon="📜"
            />

            <GameCard
              title="Galería"
              description="Capturas y momentos épicos"
              href="/gta/galeria"
              icon="📸"
            />

            <GameCard
              title="Normas"
              description="Normas oficiales GTA"
              href="/gta/normas"
              icon="📜"
            />
          </div>
        </div>
      </main>
    </>
  );
}
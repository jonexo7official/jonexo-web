import Navbar from "../../components/Navbar";
import GameCard from "../../components/GameCard";

export default function FCPage() {
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
              ⚽ FC HUB
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Torneos · Ligas · Clasificaciones · Comunidad
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
              description="Brackets, participantes y ganadores"
              href="/fc/torneos"
              icon="🏆"
            />

            <GameCard
              title="Ligas"
              description="Temporadas, jornadas y campeones"
              href="/fc/ligas"
              icon="🏅"
            />

            <GameCard
              title="Enfrentamientos"
              description="Partidos, resultados y gestión"
              href="/fc/enfrentamientos"
              icon="⚔️"
            />

            <GameCard
              title="Clasificaciones"
              description="Rankings y tablas"
              href="/fc/clasificaciones"
              icon="📊"
            />

            <GameCard
              title="Historial"
              description="Torneos y ligas finalizadas"
              href="/fc/historial"
              icon="📜"
            />

            <GameCard
              title="VS Seguidores"
              description="Cola y desafíos de comunidad"
              href="/fc/vsseguidores"
              icon="🎮"
            />

            <GameCard
              title="Clubes Pro"
              description="Gestión del equipo y jugadores"
              href="/fc/clubes"
              icon="👥"
            />

            <GameCard
              title="Revisión Plantillas"
              description="Plantillas enviadas por la comunidad"
              href="/fc/revisionplantillas"
              icon="🖼️"
            />

            <GameCard
              title="Normas"
              description="Reglas y funcionamiento"
              href="/fc/normas"
              icon="📜"
            />
          </div>
        </div>
      </main>
    </>
  );
}
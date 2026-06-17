import Navbar from "../../components/Navbar";
import GameCard from "../../components/GameCard";

export default function CODPage() {
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
              🧟 COD ZOMBIES HUB
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Easter Eggs · Récords · Comunidad
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
              title="Easter Eggs"
              description="Estado de los Easter Eggs y progresos"
              href="/cod/eastereggs"
              icon="🥚"
            />

            <GameCard
              title="Récords"
              description="Récords históricos de la comunidad"
              href="/cod/records"
              icon="🏅"
            />

            <GameCard
              title="Enfrentamientos"
              description="Retos y desafíos Zombies"
              href="/cod/enfrentamientos"
              icon="⚔️"
            />

            <GameCard
              title="Torneos"
              description="Eventos competitivos Zombies"
              href="/cod/torneos"
              icon="🏆"
            />

            <GameCard
              title="Clasificaciones"
              description="Rankings y estadísticas"
              href="/cod/clasificaciones"
              icon="📊"
            />

            <GameCard
              title="Historial"
              description="Logros y eventos históricos"
              href="/cod/historial"
              icon="📜"
            />

            <GameCard
              title="Normas"
              description="Normas oficiales Zombies"
              href="/cod/normas"
              icon="📜"
            />
          </div>
        </div>
      </main>
    </>
  );
}
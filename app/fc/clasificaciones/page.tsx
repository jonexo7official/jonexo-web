import Navbar from "../../../components/Navbar";

export default function ClasificacionesFCPage() {
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
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "10px",
              }}
            >
              📊 CLASIFICACIONES FC
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Ranking oficial de la comunidad.
            </p>
          </div>

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "40px",
            }}
          >
            <h2>🏆 TOP JUGADORES</h2>

            <div style={{ marginTop: "20px" }}>
              🥇 Pendiente
            </div>

            <div style={{ marginTop: "10px" }}>
              🥈 Pendiente
            </div>

            <div style={{ marginTop: "10px" }}>
              🥉 Pendiente
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🚀 PRÓXIMAMENTE</h2>

            <ul
              style={{
                lineHeight: "2",
              }}
            >
              <li>Puntos automáticos</li>
              <li>Victorias y derrotas</li>
              <li>Ranking global</li>
              <li>Estadísticas avanzadas</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
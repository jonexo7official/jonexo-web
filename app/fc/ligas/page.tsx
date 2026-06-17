import Navbar from "../../../components/Navbar";

export default function LigasFCPage() {
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
              🏅 LIGAS FC
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Competiciones de larga duración de la comunidad.
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
            <h2>🔥 TEMPORADA ACTUAL</h2>

            <h3>Liga FC Temporada 1</h3>

            <p>
              Formato liga completa con hasta 20 participantes.
            </p>

            <div style={{ marginTop: "20px" }}>
              👥 Participantes: 0 / 20
            </div>

            <div style={{ marginTop: "10px" }}>
              ⚽ Jornada actual: Pendiente
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "40px",
            }}
          >
            <h2>🏆 PALMARÉS</h2>

            <div style={{ marginTop: "20px" }}>
              🥇 Temporada 1 - Pendiente
            </div>

            <div style={{ marginTop: "10px" }}>
              🥈 Temporada 2 - Pendiente
            </div>

            <div style={{ marginTop: "10px" }}>
              🥉 Temporada 3 - Pendiente
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
              <li>Clasificación automática</li>
              <li>Calendario de jornadas</li>
              <li>Resultados en directo</li>
              <li>Historial completo de temporadas</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
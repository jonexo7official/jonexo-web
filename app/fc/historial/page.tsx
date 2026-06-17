import Navbar from "../../../components/Navbar";

export default function HistorialFCPage() {
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
              📜 HISTORIAL FC
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Campeones, torneos y temporadas históricas.
            </p>
          </div>

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🏆 TORNEOS FINALIZADOS</h2>

            <div style={{ marginTop: "20px" }}>
              FC Tournament #1
            </div>

            <div style={{ marginTop: "10px" }}>
              Campeón: Pendiente
            </div>

            <hr style={{ margin: "20px 0" }} />

            <div>
              FC Tournament #2
            </div>

            <div style={{ marginTop: "10px" }}>
              Campeón: Pendiente
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🏅 LIGAS FINALIZADAS</h2>

            <div style={{ marginTop: "20px" }}>
              Temporada 1
            </div>

            <div style={{ marginTop: "10px" }}>
              Campeón: Pendiente
            </div>

            <hr style={{ margin: "20px 0" }} />

            <div>
              Temporada 2
            </div>

            <div style={{ marginTop: "10px" }}>
              Campeón: Pendiente
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>👑 HALL OF CHAMPIONS</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Próximamente aparecerán aquí todos los campeones históricos de la comunidad.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
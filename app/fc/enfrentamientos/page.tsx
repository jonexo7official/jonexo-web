import Navbar from "../../../components/Navbar";

export default function EnfrentamientosFCPage() {
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
              ⚔️ ENFRENTAMIENTOS FC
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Centro de resultados y partidos de la comunidad.
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
            <h2>🏆 FC Tournament #1</h2>

            <div style={{ marginTop: "20px" }}>
              Jonexo7 vs Jugador1
            </div>

            <div style={{ marginTop: "10px" }}>
              Estado: Pendiente
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
            <h2>🏅 Liga FC Temporada 1</h2>

            <div style={{ marginTop: "20px" }}>
              Jonexo7 vs Jugador2
            </div>

            <div style={{ marginTop: "10px" }}>
              Jornada 1
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🎮 VS Seguidores</h2>

            <div style={{ marginTop: "20px" }}>
              Jonexo7 vs Viewer123
            </div>

            <div style={{ marginTop: "10px" }}>
              Estado: Pendiente
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
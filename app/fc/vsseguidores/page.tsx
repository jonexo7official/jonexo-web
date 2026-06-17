import Navbar from "../../../components/Navbar";

export default function VsSeguidoresPage() {
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
              🎮 VS SEGUIDORES
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Desafía a Jonexo7Official en directo.
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
            <h2>⚔️ JUGANDO AHORA</h2>

            <p style={{ marginTop: "20px" }}>
              Jonexo7Official vs Pendiente
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📋 COLA DE ESPERA</h2>

            <p style={{ marginTop: "20px" }}>
              No hay jugadores en cola.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🏆 HISTORIAL VS SEGUIDORES</h2>

            <p style={{ marginTop: "20px" }}>
              Próximamente aparecerán los últimos resultados.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
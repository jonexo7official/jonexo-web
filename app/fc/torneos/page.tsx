import Navbar from "../../../components/Navbar";

export default function TorneosFCPage() {
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
              🏆 TORNEOS FC
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Torneos oficiales de la comunidad JONEXO7OFFICIAL
            </p>
          </div>

          {/* TORNEO DESTACADO */}

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "40px",
            }}
          >
            <h2>🔥 TORNEO DESTACADO</h2>

            <h3>FC Tournament #1</h3>

            <p>
              El primer gran torneo oficial de la comunidad.
            </p>

            <div
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              🔴 INSCRIPCIONES CERRADAS
            </div>

            <div
              style={{
                marginTop: "15px",
              }}
            >
              👥 Participantes: 0 / 16
            </div>
          </div>

          {/* HISTORIAL */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "40px",
            }}
          >
            <h2>🏆 HISTORIAL DE CAMPEONES</h2>

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

          {/* PROXIMAMENTE */}

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
              <li>Brackets automáticos</li>
              <li>Participantes en tiempo real</li>
              <li>Resultados automáticos</li>
              <li>Integración con panel Admin</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
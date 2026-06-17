import Navbar from "../../../components/Navbar";

export default function VsSeguidoresPage() {
  const inscripcionesAbiertas = false;

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

          {/* ESTADO */}

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <h2>📢 ESTADO DE INSCRIPCIONES</h2>

            <h3
              style={{
                marginTop: "20px",
              }}
            >
              {inscripcionesAbiertas
                ? "🟢 INSCRIPCIONES ABIERTAS"
                : "🔴 INSCRIPCIONES CERRADAS"}
            </h3>

            <p
              style={{
                marginTop: "15px",
                opacity: 0.8,
              }}
            >
              Máximo 8 participantes por directo.
            </p>

            {inscripcionesAbiertas && (
              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#9146FF",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                🚀 APUNTARME
              </button>
            )}
          </div>

          {/* JUGANDO AHORA */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>⚔️ JUGANDO AHORA</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Jonexo7Official vs Pendiente
            </p>
          </div>

          {/* PROXIMO RIVAL */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🎯 PRÓXIMO RIVAL</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Pendiente
            </p>
          </div>

          {/* COLA */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📋 COLA DE ESPERA</h2>

            <p
              style={{
                marginTop: "15px",
                fontWeight: "bold",
              }}
            >
              0 / 8 plazas ocupadas
            </p>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              No hay jugadores en cola.
            </p>
          </div>

          {/* HISTORIAL */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🏆 HISTORIAL VS SEGUIDORES</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Próximamente aparecerán los últimos resultados y rivales enfrentados.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
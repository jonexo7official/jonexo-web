import Navbar from "../../../components/Navbar";

export default function RevisionPlantillasPage() {
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
              🖼️ REVISIÓN DE PLANTILLAS
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Envía tu plantilla para ser revisada en directo.
            </p>
          </div>

          {/* ESTADO */}

          <div
            style={{
              background: "rgba(34,197,94,0.15)",
              border: "1px solid rgba(34,197,94,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <h2>🟢 SERVICIO ACTIVO 24/7</h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Puedes enviar tu plantilla cualquier día y a cualquier hora.
            </p>
          </div>

          {/* ENVÍO */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📤 ENVIAR PLANTILLA</h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Próximamente podrás subir capturas directamente desde la web.
            </p>

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
              📷 SUBIR PLANTILLA
            </button>
          </div>

          {/* REQUISITOS */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📋 REQUISITOS</h2>

            <ul
              style={{
                marginTop: "20px",
                lineHeight: "2",
              }}
            >
              <li>Captura completa de la plantilla.</li>
              <li>Jugadores claramente visibles.</li>
              <li>Sin recortes ni filtros excesivos.</li>
              <li>Indica si buscas mejora competitiva o divertida.</li>
            </ul>
          </div>

          {/* HISTORIAL */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🖼️ ÚLTIMAS PLANTILLAS REVISADAS</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Próximamente aparecerán aquí las últimas plantillas enviadas por la comunidad.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
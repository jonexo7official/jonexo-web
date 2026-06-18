import Navbar from "../../../components/Navbar";

export default function AdminCODPage() {
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
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            🧟 COD ADMIN
          </h1>

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🥚 EASTER EGGS</h2>

            <button>➕ Añadir Easter Egg</button>
            <button style={{ marginLeft: "10px" }}>
              👀 Ver Easter Eggs
            </button>
            <button style={{ marginLeft: "10px" }}>
              ✏ Editar Easter Egg
            </button>
            <button style={{ marginLeft: "10px" }}>
              ❌ Eliminar Easter Egg
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🏆 TORNEOS</h2>

            <button>➕ Crear Torneo</button>
            <button style={{ marginLeft: "10px" }}>
              👀 Ver Torneos
            </button>
            <button style={{ marginLeft: "10px" }}>
              ✏ Editar Torneo
            </button>
            <button style={{ marginLeft: "10px" }}>
              🗑 Eliminar Torneo
            </button>
            <button style={{ marginLeft: "10px" }}>
              🔓 Abrir Inscripciones
            </button>
            <button style={{ marginLeft: "10px" }}>
              🔒 Cerrar Inscripciones
            </button>
            <button style={{ marginLeft: "10px" }}>
              🏆 Declarar Ganador
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>⚔️ ENFRENTAMIENTOS</h2>

            <button>➕ Crear Enfrentamiento</button>
            <button style={{ marginLeft: "10px" }}>
              👀 Ver Enfrentamientos
            </button>
            <button style={{ marginLeft: "10px" }}>
              ✏ Editar Enfrentamiento
            </button>
            <button style={{ marginLeft: "10px" }}>
              🗑 Eliminar Enfrentamiento
            </button>
            <button style={{ marginLeft: "10px" }}>
              📊 Registrar Resultado
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🏅 RECORDS</h2>

            <button>➕ Añadir Récord</button>
            <button style={{ marginLeft: "10px" }}>
              👀 Ver Récords
            </button>
            <button style={{ marginLeft: "10px" }}>
              ✏ Editar Récord
            </button>
            <button style={{ marginLeft: "10px" }}>
              🗑 Eliminar Récord
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
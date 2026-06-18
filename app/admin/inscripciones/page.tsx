import Navbar from "../../../components/Navbar";

export default function AdminInscripcionesPage() {
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
            📝 ADMIN INSCRIPCIONES
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
            <h2>🚀 CONTROL GENERAL</h2>

            <button>🔓 Abrir Inscripciones</button>

            <button style={{ marginLeft: "10px" }}>
              🔒 Cerrar Inscripciones
            </button>

            <button style={{ marginLeft: "10px" }}>
              📢 Mensaje Inscripciones
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
            <h2>👥 INSCRITOS</h2>

            <button>📋 Ver Inscritos</button>

            <button style={{ marginLeft: "10px" }}>
              🔍 Buscar Inscrito
            </button>

            <button style={{ marginLeft: "10px" }}>
              ❌ Eliminar Inscrito
            </button>

            <button style={{ marginLeft: "10px" }}>
              🗑 Limpiar Lista
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📊 ESTADÍSTICAS</h2>

            <button>📈 Ver Estadísticas</button>

            <button style={{ marginLeft: "10px" }}>
              📥 Exportar Lista
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
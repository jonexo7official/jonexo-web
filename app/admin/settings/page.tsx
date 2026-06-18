import Navbar from "../../../components/Navbar";
import AdminGuard from "../../../components/AdminGuard";

export default function AdminSettingsPage() {
  return (
    <AdminGuard>
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
            👑 CONFIGURACIÓN GLOBAL
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
            <h2>🌍 WEB</h2>

            <button>🔓 Abrir Web</button>

            <button style={{ marginLeft: "10px" }}>
              🔒 Modo Mantenimiento
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
            <h2>📝 INSCRIPCIONES</h2>

            <button>🔓 Abrir Inscripciones</button>

            <button style={{ marginLeft: "10px" }}>
              🔒 Cerrar Inscripciones
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
            <h2>🎵 MUSIC ROOM</h2>

            <button>🟢 Activar Music Room</button>

            <button style={{ marginLeft: "10px" }}>
              🔴 Desactivar Music Room
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
            <h2>🎬 CLIPS</h2>

            <button>🟢 Activar Clips</button>

            <button style={{ marginLeft: "10px" }}>
              🔴 Desactivar Clips
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
            <h2>🏆 HALL OF FAME</h2>

            <button>🟢 Activar Hall Of Fame</button>

            <button style={{ marginLeft: "10px" }}>
              🔴 Desactivar Hall Of Fame
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
            <h2>🔴 DIRECTO</h2>

            <button>🟢 Directo Activo</button>

            <button style={{ marginLeft: "10px" }}>
              ⚫ Directo Finalizado
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📢 MENSAJE GLOBAL</h2>

            <button>✏ Editar Mensaje</button>
          </div>
        </div>
      </main>
    </AdminGuard>
  );
}
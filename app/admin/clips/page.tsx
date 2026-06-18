import Navbar from "../../../components/Navbar";
import AdminGuard from "../../../components/AdminGuard";

export default function AdminClipsPage() {
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
            🎬 CLIPS ADMIN
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
            <h2>🔥 CLIP DESTACADO</h2>

            <button>⭐ Seleccionar Clip Destacado</button>
            <button style={{ marginLeft: "10px" }}>
              ❌ Quitar Destacado
            </button>
            <button style={{ marginLeft: "10px" }}>
              🏆 Clip del Mes
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
            <h2>📥 CLIPS RECIBIDOS</h2>

            <button>👀 Ver Clips</button>
            <button style={{ marginLeft: "10px" }}>
              ➕ Añadir Clip
            </button>
            <button style={{ marginLeft: "10px" }}>
              ✏ Editar Clip
            </button>
            <button style={{ marginLeft: "10px" }}>
              🗑 Eliminar Clip
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
            <h2>✅ MODERACIÓN</h2>

            <button>👍 Aprobar Clip</button>
            <button style={{ marginLeft: "10px" }}>
              👎 Rechazar Clip
            </button>
            <button style={{ marginLeft: "10px" }}>
              🚫 Ocultar Clip
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🏆 TOP CLIPS</h2>

            <button>👀 Ver Ranking</button>
            <button style={{ marginLeft: "10px" }}>
              ⬆ Subir Ranking
            </button>
            <button style={{ marginLeft: "10px" }}>
              ⬇ Bajar Ranking
            </button>
          </div>
        </div>
      </main>
    </AdminGuard>
  );
}
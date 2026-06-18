import Navbar from "../../../components/Navbar";
import AdminGuard from "../../../components/AdminGuard";

export default function AdminRocketLeaguePage() {
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
            🚀 ROCKET LEAGUE ADMIN
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
            <h2>🏆 TORNEOS</h2>

            <button>➕ Crear Torneo</button>
            <button style={{ marginLeft: "10px" }}>👀 Ver Torneos</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Torneo</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Torneo</button>
            <button style={{ marginLeft: "10px" }}>🔓 Abrir Inscripciones</button>
            <button style={{ marginLeft: "10px" }}>🔒 Cerrar Inscripciones</button>
            <button style={{ marginLeft: "10px" }}>🏆 Declarar Campeón</button>
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
            <button style={{ marginLeft: "10px" }}>👀 Ver Enfrentamientos</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Enfrentamiento</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Enfrentamiento</button>
            <button style={{ marginLeft: "10px" }}>📊 Registrar Resultado</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>👥 CLUB COMUNIDAD</h2>

            <button>👀 Ver Miembros</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Miembro</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Miembro</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Miembro</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📊 RANKINGS</h2>

            <button>👀 Ver Ranking</button>
            <button style={{ marginLeft: "10px" }}>📈 Actualizar Ranking</button>
            <button style={{ marginLeft: "10px" }}>🔄 Reiniciar Ranking</button>
          </div>
        </div>
      </main>
    </AdminGuard>
  );
}
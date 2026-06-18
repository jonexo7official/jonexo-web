import Navbar from "../../../components/Navbar";
import AdminGuard from "../../../components/AdminGuard";

export default function FCAdminPage() {
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
        <div
          style={{
            maxWidth: "1400px",
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
                fontSize: "3.5rem",
                marginBottom: "10px",
              }}
            >
              ⚽ FC ADMIN
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Centro de control de FC.
            </p>
          </div>

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🏆 GESTIÓN DE TORNEOS</h2>

            <button>➕ Crear Torneo</button>
            <button style={{ marginLeft: "10px" }}>👀 Ver Torneos</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Torneo</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Torneo</button>
            <button style={{ marginLeft: "10px" }}>🔓 Abrir Inscripciones</button>
            <button style={{ marginLeft: "10px" }}>🔒 Cerrar Inscripciones</button>
            <button style={{ marginLeft: "10px" }}>👥 Ver Inscritos</button>
            <button style={{ marginLeft: "10px" }}>⚽ Generar Jornadas</button>
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
            <h2>⚽ RESULTADOS</h2>

            <button>➕ Añadir Resultado</button>
            <button style={{ marginLeft: "10px" }}>👀 Ver Resultados</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Resultado</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Resultado</button>
            <button style={{ marginLeft: "10px" }}>📊 Actualizar Clasificación</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🎮 VS SEGUIDORES</h2>

            <button>🔓 Abrir Cola</button>
            <button style={{ marginLeft: "10px" }}>🔒 Cerrar Cola</button>
            <button style={{ marginLeft: "10px" }}>➡ Siguiente Jugador</button>
            <button style={{ marginLeft: "10px" }}>👀 Ver Cola</button>
            <button style={{ marginLeft: "10px" }}>🗑 Vaciar Cola</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>👥 CLUBES PRO</h2>

            <button>👀 Ver Titulares</button>
            <button style={{ marginLeft: "10px" }}>📋 Ver Cola</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Jugador</button>
            <button style={{ marginLeft: "10px" }}>❌ Expulsar Jugador</button>
            <button style={{ marginLeft: "10px" }}>⬆ Ascender desde Cola</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🖼 REVISIÓN DE PLANTILLAS</h2>

            <button>📸 Ver Imágenes</button>
            <button style={{ marginLeft: "10px" }}>✅ Aprobar</button>
            <button style={{ marginLeft: "10px" }}>❌ Rechazar</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Imagen</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📜 NORMAS</h2>

            <button>✏ Editar Normas</button>
          </div>
        </div>
      </main>
    </AdminGuard>
  );
}
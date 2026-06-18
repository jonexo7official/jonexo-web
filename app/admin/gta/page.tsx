import Navbar from "../../../components/Navbar";

export default function AdminGTAPage() {
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
            🚗 GTA ADMIN
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
            <h2>🏁 CARRERAS</h2>

            <button>➕ Crear Carrera</button>
            <button style={{ marginLeft: "10px" }}>👀 Ver Carreras</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Carrera</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Carrera</button>
            <button style={{ marginLeft: "10px" }}>🏆 Declarar Ganador</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🎪 EVENTOS</h2>

            <button>➕ Crear Evento</button>
            <button style={{ marginLeft: "10px" }}>👀 Ver Eventos</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Evento</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Evento</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>📊 RANKINGS</h2>

            <button>👀 Ver Ranking</button>
            <button style={{ marginLeft: "10px" }}>📈 Actualizar Ranking</button>
            <button style={{ marginLeft: "10px" }}>🔄 Reiniciar Ranking</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📸 GALERÍA</h2>

            <button>👀 Ver Imágenes</button>
            <button style={{ marginLeft: "10px" }}>📤 Subir Imagen</button>
            <button style={{ marginLeft: "10px" }}>⭐ Destacar Imagen</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Imagen</button>
          </div>
        </div>
      </main>
    </>
  );
}
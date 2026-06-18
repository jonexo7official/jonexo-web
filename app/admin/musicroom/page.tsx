import Navbar from "../../../components/Navbar";

export default function AdminMusicRoomPage() {
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
            🎵 MUSIC ROOM ADMIN
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
            <h2>🎧 SONANDO AHORA</h2>

            <button>▶ Reproducir</button>
            <button style={{ marginLeft: "10px" }}>⏸ Pausar</button>
            <button style={{ marginLeft: "10px" }}>⏭ Siguiente</button>
            <button style={{ marginLeft: "10px" }}>⏹ Detener</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>📋 COLA MUSICAL</h2>

            <button>👀 Ver Cola</button>
            <button style={{ marginLeft: "10px" }}>⬆ Subir Canción</button>
            <button style={{ marginLeft: "10px" }}>⬇ Bajar Canción</button>
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
            <h2>🎵 SOLICITUDES</h2>

            <button>👀 Ver Solicitudes</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Canción</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Canción</button>
            <button style={{ marginLeft: "10px" }}>🗑 Eliminar Canción</button>
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

            <button>👍 Aprobar Canción</button>
            <button style={{ marginLeft: "10px" }}>👎 Rechazar Canción</button>
            <button style={{ marginLeft: "10px" }}>🚫 Bloquear Canción</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🏆 TOP CANCIONES</h2>

            <button>📊 Ver Votos</button>
            <button style={{ marginLeft: "10px" }}>⭐ Destacar Canción</button>
            <button style={{ marginLeft: "10px" }}>🏆 Canción de la Semana</button>
          </div>
        </div>
      </main>
    </>
  );
}
import Navbar from "../../../components/Navbar";

export default function AdminHallOfFamePage() {
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
            🏆 HALL OF FAME ADMIN
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
            <h2>⚽ FC CHAMPIONS</h2>

            <button>👀 Ver Campeones</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Campeón</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Campeón</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Campeón</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🧟 COD LEGENDS</h2>

            <button>👀 Ver Leyendas</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Leyenda</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Leyenda</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Leyenda</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🚗 GTA LEGENDS</h2>

            <button>👀 Ver Leyendas</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Leyenda</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Leyenda</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Leyenda</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🏝 FORTNITE CHAMPIONS</h2>

            <button>👀 Ver Campeones</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Campeón</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Campeón</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Campeón</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "25px",
            }}
          >
            <h2>🚀 ROCKET LEAGUE LEGENDS</h2>

            <button>👀 Ver Leyendas</button>
            <button style={{ marginLeft: "10px" }}>➕ Añadir Leyenda</button>
            <button style={{ marginLeft: "10px" }}>✏ Editar Leyenda</button>
            <button style={{ marginLeft: "10px" }}>❌ Eliminar Leyenda</button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🎵 CANCIÓN DE LA COMUNIDAD</h2>

            <button>👀 Ver Canción Actual</button>
            <button style={{ marginLeft: "10px" }}>
              ⭐ Establecer Canción Oficial
            </button>
            <button style={{ marginLeft: "10px" }}>
              🔄 Cambiar Canción
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
import Navbar from "../../components/Navbar";

export default function MusicRoomPage() {
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
                fontSize: "3.5rem",
                marginBottom: "10px",
              }}
            >
              🎵 MUSIC ROOM
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              La banda sonora oficial de la comunidad.
            </p>
          </div>

          {/* SONANDO AHORA */}

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🎧 SONANDO AHORA</h2>

            <p style={{ marginTop: "20px" }}>
              Ninguna canción reproduciéndose actualmente.
            </p>
          </div>

          {/* COLA MUSICAL */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📋 COLA MUSICAL</h2>

            <p style={{ marginTop: "20px" }}>
              No hay canciones en cola.
            </p>
          </div>

          {/* SOLICITAR */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🚀 SOLICITAR CANCIÓN</h2>

            <p style={{ marginTop: "20px" }}>
              Próximamente podrás enviar canciones directamente desde la web.
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
              🎵 SOLICITAR CANCIÓN
            </button>
          </div>

          {/* VOTACIONES */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>👍 VOTACIONES</h2>

            <p style={{ marginTop: "20px" }}>
              Las canciones más votadas aparecerán aquí.
            </p>
          </div>

          {/* TOP CANCIONES */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🏆 TOP CANCIONES</h2>

            <p style={{ marginTop: "20px" }}>
              Ranking musical de la comunidad.
            </p>
          </div>

          {/* HISTORIAL */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📜 HISTORIAL MUSICAL</h2>

            <p style={{ marginTop: "20px" }}>
              Aquí aparecerán las canciones reproducidas anteriormente.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
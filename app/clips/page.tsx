import Navbar from "../../components/Navbar";

export default function ClipsPage() {
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
              🎬 CLIPS
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Los mejores momentos de la comunidad.
            </p>
          </div>

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🔥 CLIP DESTACADO</h2>

            <p style={{ marginTop: "20px" }}>
              Próximamente aparecerá el clip más épico del canal.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🏆 TOP CLIPS</h2>

            <p style={{ marginTop: "20px" }}>
              Ranking de clips favoritos de la comunidad.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🎥 ENVIAR CLIP</h2>

            <p style={{ marginTop: "20px" }}>
              Próximamente podrás enviar clips directamente desde la web.
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
              🎬 ENVIAR CLIP
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>📜 HISTORIAL DE CLIPS</h2>

            <p style={{ marginTop: "20px" }}>
              Aquí aparecerán los mejores clips históricos del canal.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
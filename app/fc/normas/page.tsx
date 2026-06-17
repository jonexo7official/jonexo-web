import Navbar from "../../../components/Navbar";

export default function NormasFCPage() {
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
                fontSize: "3rem",
                marginBottom: "10px",
              }}
            >
              📜 NORMAS FC
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Normas oficiales de la comunidad JONEXO7OFFICIAL.
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
            <h2>🤝 RESPETO</h2>

            <p style={{ marginTop: "15px" }}>
              Respeta siempre a jugadores, espectadores y moderadores.
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
            <h2>🏆 TORNEOS Y LIGAS</h2>

            <ul
              style={{
                marginTop: "20px",
                lineHeight: "2",
              }}
            >
              <li>Los resultados deben ser reales.</li>
              <li>No se permite abandonar partidos sin motivo.</li>
              <li>Las decisiones de organización son definitivas.</li>
              <li>La conducta antideportiva puede suponer expulsión.</li>
            </ul>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🎮 VS SEGUIDORES</h2>

            <ul
              style={{
                marginTop: "20px",
                lineHeight: "2",
              }}
            >
              <li>Máximo 8 participantes por directo.</li>
              <li>Respeta el orden de la cola.</li>
              <li>Si no respondes cuando te toque, podrás perder tu turno.</li>
            </ul>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>👑 COMUNIDAD</h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              El objetivo principal es disfrutar, competir y crear una comunidad sana para todos.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
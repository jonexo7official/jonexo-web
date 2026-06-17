import Navbar from "../../../components/Navbar";

export default function NormasCODPage() {
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
            <h1 style={{ fontSize: "3rem" }}>
              📜 NORMAS ZOMBIES
            </h1>

            <p style={{ opacity: 0.8 }}>
              Normas oficiales de la comunidad.
            </p>
          </div>

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🤝 RESPETO</h2>

            <p style={{ marginTop: "20px" }}>
              Respeta siempre a compañeros, espectadores y moderadores.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
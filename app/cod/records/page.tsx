import Navbar from "../../../components/Navbar";

export default function RecordsCODPage() {
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
              🏅 RÉCORDS ZOMBIES
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Los mejores logros de la comunidad.
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
            <h2>🧟 RONDA MÁS ALTA</h2>

            <p style={{ marginTop: "20px" }}>
              Pendiente de registrar.
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
            <h2>🥚 EASTER EGG MÁS RÁPIDO</h2>

            <p style={{ marginTop: "20px" }}>
              Pendiente de registrar.
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
            <h2>🏆 MÁS EASTER EGGS COMPLETADOS</h2>

            <p style={{ marginTop: "20px" }}>
              Pendiente de registrar.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>👑 HALL OF RECORDS</h2>

            <p style={{ marginTop: "20px" }}>
              Aquí aparecerán las leyendas de COD Zombies.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
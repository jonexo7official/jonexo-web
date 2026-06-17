import Navbar from "../../components/Navbar";

export default function HallOfFamePage() {
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
              🏆 HALL OF FAME
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Las leyendas de la comunidad JONEXO7OFFICIAL.
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
            <h2>⚽ CAMPEONES FC</h2>

            <p style={{ marginTop: "20px" }}>
              Próximamente aparecerán los campeones oficiales.
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
            <h2>🧟 LEYENDAS ZOMBIES</h2>

            <p style={{ marginTop: "20px" }}>
              Récords y Easter Eggs históricos.
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
            <h2>🚗 GTA LEGENDS</h2>

            <p style={{ marginTop: "20px" }}>
              Ganadores de eventos y carreras.
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
            <h2>🏝 FORTNITE CHAMPIONS</h2>

            <p style={{ marginTop: "20px" }}>
              Campeones y jugadores destacados.
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
            <h2>🚀 ROCKET LEAGUE LEGENDS</h2>

            <p style={{ marginTop: "20px" }}>
              Los mejores jugadores de la comunidad.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🎵 CANCIÓN DE LA COMUNIDAD</h2>

            <p style={{ marginTop: "20px" }}>
              La canción más votada aparecerá aquí.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
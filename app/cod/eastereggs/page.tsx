import Navbar from "../../../components/Navbar";

export default function EasterEggsPage() {
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
              🥚 EASTER EGGS
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Seguimiento de Easter Eggs completados por la comunidad.
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
            <h2>🏆 COMPLETADOS</h2>

            <p style={{ marginTop: "20px" }}>
              Próximamente aparecerán aquí los Easter Eggs completados.
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
            <h2>🎯 EN PROGRESO</h2>

            <p style={{ marginTop: "20px" }}>
              Ningún Easter Egg en progreso actualmente.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🧟 MAPAS DISPONIBLES</h2>

            <ul
              style={{
                marginTop: "20px",
                lineHeight: "2",
              }}
            >
              <li>Gorod Krovi</li>
              <li>Der Eisendrache</li>
              <li>Origins</li>
              <li>Shadows of Evil</li>
              <li>Mob of the Dead</li>
              <li>Moon</li>
              <li>Revelations</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
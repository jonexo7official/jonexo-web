import Navbar from "../../../components/Navbar";

export default function ClubesProPage() {
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
              👥 CLUBES PRO
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Equipo oficial de la comunidad JONEXO7OFFICIAL.
            </p>
          </div>

          {/* INFORMACIÓN */}

          <div
            style={{
              background: "rgba(145,70,255,0.15)",
              border: "1px solid rgba(145,70,255,0.4)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📝 INCORPORACIONES</h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Las solicitudes para entrar al equipo se realizan desde la sección de Inscripciones.
            </p>
          </div>

          {/* ESTADO */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🟢 ESTADO DEL EQUIPO</h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Abierto a nuevas incorporaciones.
            </p>
          </div>

          {/* TITULARES */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>👥 TITULARES</h2>

            <p
              style={{
                marginTop: "15px",
                fontWeight: "bold",
              }}
            >
              0 / 11 plazas ocupadas
            </p>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              No hay jugadores registrados todavía.
            </p>
          </div>

          {/* SUPLENTES */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>🔄 LISTA DE ESPERA</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              No hay jugadores en espera.
            </p>
          </div>

          {/* ENTRENAMIENTO */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <h2>📅 PRÓXIMO ENTRENAMIENTO</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Pendiente de anunciar.
            </p>
          </div>

          {/* PARTIDO */}

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2>🏆 PRÓXIMO PARTIDO</h2>

            <p
              style={{
                marginTop: "20px",
              }}
            >
              Pendiente de anunciar.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
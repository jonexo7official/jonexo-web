import Navbar from "../../../components/Navbar";

export default function CarrerasGTAPage() {
  return (
    <>
      <Navbar />

      <main style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            🏁 CARRERAS
          </h1>

          <p>Competiciones y campeonatos de la comunidad.</p>

          <div style={{
            marginTop: "30px",
            padding: "30px",
            borderRadius: "20px",
            background: "rgba(145,70,255,0.15)"
          }}>
            <h2>🏆 CAMPEONATO ACTUAL</h2>
            <p>Pendiente de anunciar.</p>
          </div>
        </div>
      </main>
    </>
  );
}
import Navbar from "../../../components/Navbar";

export default function EnfrentamientosFortnitePage() {
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
          <h1 style={{ fontSize: "3rem" }}>⚔️ ENFRENTAMIENTOS</h1>
          <p>Retos y desafíos de la comunidad.</p>
        </div>
      </main>
    </>
  );
}
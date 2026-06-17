import Navbar from "../../../components/Navbar";

export default function HistorialFortnitePage() {
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
          <h1 style={{ fontSize: "3rem" }}>📜 HISTORIAL</h1>
          <p>Campeones y eventos históricos.</p>
        </div>
      </main>
    </>
  );
}
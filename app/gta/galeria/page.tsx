import Navbar from "../../../components/Navbar";

export default function GaleriaGTAPage() {
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
            📸 GALERÍA
          </h1>

          <p>Momentos épicos y capturas de la comunidad.</p>
        </div>
      </main>
    </>
  );
}
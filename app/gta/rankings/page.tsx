import Navbar from "../../../components/Navbar";

export default function RankingsGTAPage() {
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
            📊 RANKINGS
          </h1>

          <p>Clasificaciones oficiales GTA.</p>
        </div>
      </main>
    </>
  );
}
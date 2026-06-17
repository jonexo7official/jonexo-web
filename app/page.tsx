import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/jonexo-overlay.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          JONEXO7 OFFICIAL
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.8,
            marginBottom: "50px",
          }}
        >
          Torneos • Zombies • GTA • Comunidad
        </p>

        <h2>🎮 Juegos Principales</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <GameCard
            title="FC"
            description="Torneos, Clubes Pro y VS Seguidores"
            href="/fc"
            icon="⚽"
          />

          <GameCard
            title="COD Zombies"
            description="Easter Eggs, mapas e intentos"
            href="/cod"
            icon="🧟"
          />

          <GameCard
            title="GTA"
            description="Carreras y eventos de comunidad"
            href="/gta"
            icon="🚗"
          />
        </div>

        <h2>🌍 Comunidad</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <GameCard
            title="Music Room"
            description="Cola musical de la comunidad"
            href="/music-room"
            icon="🎵"
          />

          <GameCard
            title="Clips"
            description="Mejores momentos del canal"
            href="/clips"
            icon="🎬"
          />

          <GameCard
            title="Hall Of Fame"
            description="Campeones y leyendas"
            href="/hall-of-fame"
            icon="🏆"
          />
        </div>

        <h2>🚀 Juegos Secundarios</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <GameCard
            title="Fortnite"
            description="Eventos y torneos"
            href="/fortnite"
            icon="🏝️"
          />

          <GameCard
            title="Rocket League"
            description="Competiciones y rankings"
            href="/rocketleague"
            icon="🚀"
          />
        </div>
      </div>
    </main>
  );
}
"use client";

import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function InscripcionesPage() {
  const [idPlataforma, setIdPlataforma] = useState("");
  const [twitch, setTwitch] = useState("");
  const [juego, setJuego] = useState("FC");
  const [plataforma, setPlataforma] = useState("PlayStation");

  function inscribirse() {
    if (!idPlataforma || !twitch) {
      alert("Completa todos los campos");
      return;
    }

    alert("Inscripción enviada correctamente");
  }

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
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "10px",
              }}
            >
              📝 INSCRIPCIONES
            </h1>

            <p
              style={{
                opacity: 0.8,
              }}
            >
              Apúntate a los eventos de la comunidad JONEXO7OFFICIAL.
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "30px",
            }}
          >
            <h2>👤 Datos del Participante</h2>

            <input
              placeholder="ID Plataforma (PSN, Xbox o PC)"
              value={idPlataforma}
              onChange={(e) => setIdPlataforma(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "15px",
                marginBottom: "15px",
                borderRadius: "12px",
                border: "none",
              }}
            />

            <input
              placeholder="ID Twitch"
              value={twitch}
              onChange={(e) => setTwitch(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "25px",
                borderRadius: "12px",
                border: "none",
              }}
            />

            <h2>🎮 Evento</h2>

            <select
              value={juego}
              onChange={(e) => setJuego(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "15px",
                marginBottom: "25px",
                borderRadius: "12px",
                border: "none",
              }}
            >
              <option>FC</option>
              <option>COD</option>
              <option>Fortnite</option>
              <option>Rocket League</option>
              <option>Clubes Pro</option>
            </select>

            <h2>🖥 Plataforma</h2>

            <select
              value={plataforma}
              onChange={(e) => setPlataforma(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "15px",
                marginBottom: "30px",
                borderRadius: "12px",
                border: "none",
              }}
            >
              <option>PlayStation</option>
              <option>Xbox</option>
              <option>PC</option>
            </select>

            <button
              onClick={inscribirse}
              style={{
                width: "100%",
                padding: "16px",
                background: "#9146FF",
                border: "none",
                borderRadius: "12px",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              🚀 INSCRIBIRME
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
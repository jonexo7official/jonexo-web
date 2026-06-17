"use client";

import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function FCPage() {
  const [open, setOpen] = useState<string | null>("torneos");

  const [form, setForm] = useState({
    nombre: "",
    twitch: "",
    plataforma: "",
    eaId: "",
  });

  const [jugadores, setJugadores] = useState<any[]>([]);
  const [clasificacion, setClasificacion] = useState<any[]>([]);

  const [colaSeguidores, setColaSeguidores] = useState<any[]>([]);
  const [titularesClubes, setTitularesClubes] = useState<any[]>([]);
  const [colaClubes, setColaClubes] = useState<any[]>([]);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  // 🏆 INSCRIPCIONES
  async function inscribir() {
    if (!form.nombre || !form.twitch || !form.plataforma || !form.eaId)
      return alert("Rellena todos los campos");

    await addDoc(collection(db, "inscripciones_fc"), {
      nombre: form.nombre,
      twitch: form.twitch,
      plataforma: form.plataforma,
      eaId: form.eaId,
      creado: new Date(),
    });

    alert("Inscripción correcta");

    setForm({ nombre: "", twitch: "", plataforma: "", eaId: "" });
  }

  async function cargarJugadores() {
    const data = await getDocs(collection(db, "inscripciones_fc"));
    setJugadores(data.docs.map((doc) => doc.data()));
  }

  // 🎮 VS SEGUIDORES
  function apuntarseSeguidores() {
    if (colaSeguidores.length >= 8) return alert("Cola llena");

    const nombre = prompt("Nombre:");
    if (!nombre) return;

    setColaSeguidores([...colaSeguidores, nombre]);
  }

  function siguienteSeguidores() {
    setColaSeguidores(colaSeguidores.slice(1));
  }

  // 🧑‍🤝‍🧑 CLUBES PRO
  function apuntarseClubes() {
    const nombre = prompt("Nombre:");
    if (!nombre) return;

    if (titularesClubes.length < 11) {
      setTitularesClubes([...titularesClubes, nombre]);
    } else {
      setColaClubes([...colaClubes, nombre]);
    }
  }

  function meterDesdeCola() {
    if (colaClubes.length === 0) return alert("Cola vacía");
    if (titularesClubes.length >= 11) return alert("Titulares completos");

    setTitularesClubes([...titularesClubes, colaClubes[0]]);
    setColaClubes(colaClubes.slice(1));
  }

  function eliminarTitular(i: number) {
    setTitularesClubes(
      titularesClubes.filter((_, index) => index !== i)
    );
  }

  // ⚽ PARTIDOS + CLASIFICACIÓN
  async function crearPartido() {
    const jugadorA = prompt("Jugador A");
    const jugadorB = prompt("Jugador B");
    const golesA = Number(prompt("Goles A"));
    const golesB = Number(prompt("Goles B"));

    if (!jugadorA || !jugadorB) return;

    await addDoc(collection(db, "matches_fc"), {
      jugadorA,
      jugadorB,
      golesA,
      golesB,
      creado: new Date(),
    });

    alert("Partido guardado");
  }

  async function calcularClasificacion() {
    const data = await getDocs(collection(db, "matches_fc"));
    const matches = data.docs.map((d) => d.data());

    const table: any = {};

    function init(name: string) {
      return {
        name,
        pj: 0,
        g: 0,
        e: 0,
        p: 0,
        gf: 0,
        gc: 0,
        pts: 0,
      };
    }

    matches.forEach((m) => {
      if (!table[m.jugadorA]) table[m.jugadorA] = init(m.jugadorA);
      if (!table[m.jugadorB]) table[m.jugadorB] = init(m.jugadorB);

      table[m.jugadorA].pj++;
      table[m.jugadorB].pj++;

      table[m.jugadorA].gf += m.golesA;
      table[m.jugadorA].gc += m.golesB;

      table[m.jugadorB].gf += m.golesB;
      table[m.jugadorB].gc += m.golesA;

      if (m.golesA > m.golesB) {
        table[m.jugadorA].g++;
        table[m.jugadorB].p++;
      } else if (m.golesB > m.golesA) {
        table[m.jugadorB].g++;
        table[m.jugadorA].p++;
      } else {
        table[m.jugadorA].e++;
        table[m.jugadorB].e++;
      }
    });

    Object.values(table).forEach((t: any) => {
      t.pts = t.g * 3 + t.e;
    });

    const sorted = Object.values(table).sort(
      (a: any, b: any) => b.pts - a.pts
    );

    setClasificacion(sorted);
  }

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* 🧭 SIDEBAR */}
      <div
        style={{
          width: "220px",
          padding: "20px",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2>⚽ FC</h2>

        <button onClick={() => toggle("torneos")}>🏆 Torneos</button>
        <button onClick={() => toggle("seguidores")}>🎮 Seguidores</button>
        <button onClick={() => toggle("clubes")}>🧑‍🤝‍🧑 Clubes</button>
        <button onClick={() => toggle("plantillas")}>🖼 Plantillas</button>
        <button onClick={() => toggle("normas")}>📜 Normas</button>
      </div>

      {/* 📊 CONTENIDO */}
      <div style={{ flex: 1, padding: "30px" }}>
        <h1 style={{ textAlign: "center" }}>⚽ FC PLATFORM</h1>

        {/* 🏆 TORNEOS */}
        {open === "torneos" && (
          <div>
            <h2>🏆 Torneos</h2>

            <h3>🧾 Inscripción</h3>

            <input
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) =>
                setForm({ ...form, nombre: e.target.value })
              }
            />

            <input
              placeholder="Twitch"
              value={form.twitch}
              onChange={(e) =>
                setForm({ ...form, twitch: e.target.value })
              }
            />

            <input
              placeholder="Plataforma"
              value={form.plataforma}
              onChange={(e) =>
                setForm({ ...form, plataforma: e.target.value })
              }
            />

            <input
              placeholder="EA ID"
              value={form.eaId}
              onChange={(e) =>
                setForm({ ...form, eaId: e.target.value })
              }
            />

            <button onClick={inscribir}>Inscribirse</button>

            <hr />

            <button onClick={cargarJugadores}>Ver inscritos</button>

            {jugadores.map((j, i) => (
              <div key={i}>
                {i + 1}. {j.nombre} | {j.twitch}
              </div>
            ))}

            <hr />

            <h3>⚽ Partidos</h3>

            <button onClick={crearPartido}>➕ Crear resultado</button>
            <button onClick={calcularClasificacion}>
              📊 Actualizar clasificación
            </button>

            <hr />

            <h3>🏆 Clasificación</h3>

            <table style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>Jugador</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>PTS</th>
                </tr>
              </thead>

              <tbody>
                {clasificacion.map((c: any, i: number) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.pj}</td>
                    <td>{c.g}</td>
                    <td>{c.e}</td>
                    <td>{c.p}</td>
                    <td>{c.gf}</td>
                    <td>{c.gc}</td>
                    <td>{c.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 🎮 SEGUIDORES */}
        {open === "seguidores" && (
          <div>
            <h2>🎮 Jugando vs Seguidores</h2>

            <button onClick={apuntarseSeguidores}>➕ Cola</button>
            <button onClick={siguienteSeguidores}>➡ Siguiente</button>

            {colaSeguidores.map((c, i) => (
              <div key={i}>
                {i + 1}. {c}
              </div>
            ))}
          </div>
        )}

        {/* 🧑‍🤝‍🧑 CLUBES */}
        {open === "clubes" && (
          <div>
            <h2>🧑‍🤝‍🧑 Clubes Pro</h2>

            <button onClick={apuntarseClubes}>➕ Unirse</button>
            <button onClick={meterDesdeCola}>⬆ Meter desde cola</button>

            {titularesClubes.map((t, i) => (
              <div key={i}>
                {t}
                <button onClick={() => eliminarTitular(i)}>❌</button>
              </div>
            ))}
          </div>
        )}

        {/* 🖼 PLANTILLAS */}
        {open === "plantillas" && (
          <div>
            <h2>🖼 Plantillas</h2>
            <p>📸 Próximo paso Firebase Storage</p>
          </div>
        )}

        {/* 📜 NORMAS */}
        {open === "normas" && (
          <div>
            <h2>📜 Normas</h2>
            <p>⚠️ Respeto y horarios obligatorios</p>
          </div>
        )}
      </div>
    </main>
  );
}
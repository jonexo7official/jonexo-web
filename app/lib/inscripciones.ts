import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function inscribirJugador(
  nombre: string,
  twitch: string,
  plataforma: string,
  eaId: string
) {
  await addDoc(collection(db, "inscripciones_fc"), {
    nombre,
    twitch,
    plataforma,
    eaId,
    creado: new Date()
  });
}
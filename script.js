// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBLQ_rJ0o4i2Z1O9q0azS8vb4POwthiaMs",
  authDomain: "minh-agente-viagens.firebaseapp.com",
  projectId:  "minh-agente-viagens,"
  appId: "1:519160141722:web:9cde946a199287e6fc4c23"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

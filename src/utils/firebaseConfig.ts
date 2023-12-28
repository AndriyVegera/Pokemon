import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZQc4tVDwrO6mI4wQl96xQX0TcOgn0Tpo",
  authDomain: "pokemon-3337a.firebaseapp.com",
  projectId: "pokemon-3337a",
  storageBucket: "pokemon-3337a.appspot.com",
  messagingSenderId: "266832938811",
  appId: "1:266832938811:web:5d48f09cb49b4bda16191e",
  measurementId: "G-VEW4ZC21Y4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

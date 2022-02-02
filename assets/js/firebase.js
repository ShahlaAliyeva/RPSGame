import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  push
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCEFQRSOpBL6e6oQ2ICFOLYq5qxTLE5XYo",
    authDomain: "hw-game.firebaseapp.com",
    databaseURL: "https://hw-game-default-rtdb.firebaseio.com",
    projectId: "hw-game",
    storageBucket: "hw-game.appspot.com",
    messagingSenderId: "904299314860",
    appId: "1:904299314860:web:0acb26f4d48d40c7f2e909"
  };

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, set, ref, onValue, push };
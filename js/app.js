// นำเข้า Firebase App และ Firestore Database ผ่าน CDN (เหมาะสำหรับ GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Configuration ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyDfPxGX_F8BCLekDIX4YJx1ZxF3Pjsickg",
  authDomain: "purpl-cc8a4.firebaseapp.com",
  projectId: "purpl-cc8a4",
  storageBucket: "purpl-cc8a4.firebasestorage.app",
  messagingSenderId: "469590398637",
  appId: "1:469590398637:web:a4507deffc44bb1e1cd824",
  measurementId: "G-DLP2Q7XKR3"
};

// เริ่มต้นใช้งาน Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ส่งออก db เพื่อให้ไฟล์อื่นหรือฟังก์ชันอื่นๆ เรียกใช้ได้
export { db, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, onSnapshot };

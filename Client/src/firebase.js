
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBe5ygj4aC-8tIKQiAYyJtIlepRuw05G0g",
	authDomain: "camellia-b5728.firebaseapp.com",
	projectId: "camellia-b5728",
	storageBucket: "camellia-b5728.appspot.com",
	messagingSenderId: "591444422100",
	appId: "1:591444422100:web:afa9d0c013a5b2e041fa41",
	measurementId: "G-PFZYMD97YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCGsU27_Tprk9wzmdueQ6F_cS3EO_Q7ssI",
	authDomain: "programmer-companion-e9aec.firebaseapp.com",
	projectId: "programmer-companion-e9aec",
	storageBucket: "programmer-companion-e9aec.appspot.com",
	messagingSenderId: "400543896874",
	appId: "1:400543896874:web:edefa58980ec279a423a53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;

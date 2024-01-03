import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

let firebaseConfig;
const DEV_ENV = "dev";

const devFirebaseConfig = {
	apiKey: "AIzaSyCuYmBwNzogsKRKr8b7MAyf1bJMNXQxHT8",
	authDomain: "crossfit-tracker-v2.firebaseapp.com",
	projectId: "crossfit-tracker-v2",
	storageBucket: "crossfit-tracker-v2.appspot.com",
	messagingSenderId: "516225753933",
	appId: "1:516225753933:web:af4d354f84f08312cf8d04",
	measurementId: "G-6MS8WZ1DLF",
};

switch (DEV_ENV) {
	default:
		firebaseConfig = devFirebaseConfig;
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const workoutsCollectionRef = collection(db, "workouts");

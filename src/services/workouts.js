import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
} from "firebase/firestore";
import { db, workoutsCollectionRef } from "../utils/firebase";

export const getWorkouts = async () => {
	let workouts;
	try {
		const querySnapshot = await getDocs(collection(db, "workouts"));
		const workouts = querySnapshot.docs.map((workout) => ({
			...workout.data(),
			id: workout.id,
		}));
		console.log(workouts);
	} catch (err) {
		console.error(err);
	}
	return workouts;
};

export const addWorkout = async (workoutData) => {
	try {
		const newWorkoutRef = await addDoc(workoutsCollectionRef, {
			...workoutData,
		});
		const newWorkoutData = (await getDoc(newWorkoutRef)).data();
		return newWorkoutData;
	} catch (err) {
		return err;
	}
};

export const deleteWorkout = async (workoutId) => {
	const workoutTitle = (
		await getDoc(doc(workoutsCollectionRef, workoutId))
	).data().title;
	const docRef = await deleteDoc(doc(workoutsCollectionRef, workoutId));
	if (docRef === undefined) {
		console.log(`'${workoutTitle}' has deleted!`);
	}
};

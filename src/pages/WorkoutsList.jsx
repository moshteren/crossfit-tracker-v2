import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { workoutsCollectionRef } from "../utils/firebase";
import { deleteWorkout } from "../services/workouts";

const WorkoutsListPage = () => {
	const [workouts, setWorkouts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getWorkoutsList = async () => {
		setIsLoading(true);
		try {
			const querySnapshot = await getDocs(workoutsCollectionRef);
			const fetchedWorkouts = querySnapshot.docs.map((workout) => ({
				...workout.data(),
				id: workout.id,
			}));
			setWorkouts(fetchedWorkouts);
		} catch (err) {
			console.error(err);
		}
		setIsLoading(false);
	};

	const handleDeleteButtonClick = async (workoutId) => {
		try {
			await deleteWorkout(workoutId);
			getWorkoutsList();
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getWorkoutsList();
	}, []);

	return (
		<main>
			<h1>רשימת האימונים:</h1>
			<ul>
				{isLoading ? (
					<p>loading...</p>
				) : (
					workouts.map((workout) => {
						return (
							<li key={workout.id}>
								<Link to={`${workout.id}`}>{workout.title}</Link> -{" "}
								<button
									onClick={() => {
										handleDeleteButtonClick(workout.id);
									}}>
									מחק
								</button>
							</li>
						);
					})
				)}
			</ul>
			<Link to="new">הוסף אימון חדש</Link>
		</main>
	);
};

export default WorkoutsListPage;

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { workoutsCollectionRef } from "../utils/firebase";
import { deleteWorkout } from "../services/workouts";
import { ShowWorkout } from "../components/ShowWorkout";
import EditWorkoutForm from "../components/EditWorkoutForm";
import dayjs from "dayjs";

const WorkoutPage = () => {
	const { workoutId } = useParams();
	const [workout, setWorkout] = useState({});
	const [isLoading, setIsLoading] = useState(null);
	const [isInEditing, setIsInEditing] = useState(false);
	const navigate = useNavigate();
	const editingForm = useRef();

	const handleDeleteButtonClick = async () => {
		try {
			await deleteWorkout(workoutId);
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

	const handleEditingFormSubmit = async (event) => {
		event.preventDefault();
		const formValues = new FormData(event.target);
		const newWorkoutData = Object.fromEntries(formValues.entries());
		newWorkoutData.date = dayjs(newWorkoutData.date).toDate();
		await updateDoc(doc(workoutsCollectionRef, workoutId), {
			...newWorkoutData,
		});
		const updatedWorkout = await getDoc(doc(workoutsCollectionRef, workoutId));
		if (updatedWorkout.exists()) {
			setWorkout({ ...updatedWorkout.data() });
			console.log(`'${workoutId}' has updated!`);
			setIsInEditing(false);
		}
	};

	useEffect(() => {
		const getWorkout = async () => {
			setIsLoading(true);
			try {
				const fetchedWorkout = (
					await getDoc(doc(workoutsCollectionRef, workoutId))
				).data();
				setWorkout(fetchedWorkout);
			} catch (err) {
				console.error(err);
			}

			setIsLoading(false);
		};

		getWorkout();
	}, [workoutId]);

	return (
		<main>
			{isLoading ? (
				<h1>loading...</h1>
			) : (
				<div>
					<h1>{workout.title}</h1>
					{isInEditing ? (
						<EditWorkoutForm
							workout={workout}
							formRef={editingForm}
							submitFunc={handleEditingFormSubmit}
						/>
					) : (
						<ShowWorkout workout={workout} />
					)}
					<div>
						{isInEditing ? (
							<button
								onClick={() => {
									editingForm.current.requestSubmit();
								}}>
								שמור
							</button>
						) : (
							<button
								onClick={() => {
									setIsInEditing(true);
								}}>
								ערוך
							</button>
						)}
						<button onClick={handleDeleteButtonClick}>מחק</button>
					</div>
				</div>
			)}
		</main>
	);
};

export default WorkoutPage;

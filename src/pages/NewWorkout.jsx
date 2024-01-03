import dayjs from "dayjs";
import { addWorkout } from "../services/workouts";
import { useNavigate } from "react-router-dom";

const NewWorkoutPage = () => {
	const navigate = useNavigate();

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const formValues = new FormData(event.target);
		const newWorkoutData = Object.fromEntries(formValues.entries());
		newWorkoutData.date = dayjs(newWorkoutData.date).toDate();
		const newWorkout = await addWorkout(newWorkoutData);
		if (newWorkout) {
			navigate("/");
		}
		console.log(`'${newWorkout.title}' has created!`);
	};

	return (
		<main>
			<h1>הוסף אימון חדש</h1>
			<form onSubmit={handleFormSubmit}>
				<div>
					<label htmlFor="date">תאריך: </label>
					<input
						id="date"
						type="date"
						name="date"
						defaultValue={dayjs().format("YYYY-MM-DD")}
					/>
				</div>
				<div>
					<label htmlFor="title">כותרת: </label>
					<input id="title" type="text" name="title"></input>
				</div>
				<div>
					<label htmlFor="work">תוכן: </label>
					<textarea id="work" name="work"></textarea>
				</div>
				<button>שמור</button>
			</form>
		</main>
	);
};

export default NewWorkoutPage;

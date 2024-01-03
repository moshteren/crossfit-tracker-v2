import { timestampToString } from "../utils/dates";

const EditWorkoutForm = ({ workout, formRef, submitFunc }) => {
	return (
		<div>
			<form onSubmit={submitFunc} ref={formRef}>
				<div>
					<label htmlFor="date">תאריך: </label>
					<input
						id="date"
						type="date"
						name="date"
						defaultValue={timestampToString(workout.date, "YYYY-MM-DD")}
					/>
				</div>
				<div>
					<label htmlFor="title">כותרת: </label>
					<input
						id="title"
						type="text"
						name="title"
						defaultValue={workout.title}></input>
				</div>
				<div>
					<label htmlFor="work">תוכן: </label>
					<textarea
						id="work"
						name="work"
						defaultValue={workout.work}></textarea>
				</div>
			</form>
		</div>
	);
};

export default EditWorkoutForm;

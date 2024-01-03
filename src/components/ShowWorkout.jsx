import { timestampToString } from "../utils/dates";

export const ShowWorkout = ({ workout }) => {
	return (
		<div>
			<p>תאריך: {timestampToString(workout.date, "DD/MM/YYYY")}</p>
			<p>תוכן: {workout.work}</p>
		</div>
	);
};

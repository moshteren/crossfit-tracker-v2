import { useParams } from "react-router-dom";

const WorkoutPage = () => {
	const { workoutId } = useParams();

	return (
		<div>
			<h1>{workoutId}</h1>
			<p>{workoutId}</p>
		</div>
	);
};

export default WorkoutPage;

import { Link } from "react-router-dom";

const WorkoutsListPage = () => {
	const workouts = [
		{ title: "WOD-231220", work: "Something 1" },
		{ title: "WOD-231221", work: "Something 2" },
		{ title: "WOD-231222", work: "Something 3" },
	];

	return (
		<>
			<h1>רשימת האימונים:</h1>
			<ul>
				{workouts.map((workout) => {
					return (
						<li>
							<Link to={`${workout.title}`}>{workout.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default WorkoutsListPage;

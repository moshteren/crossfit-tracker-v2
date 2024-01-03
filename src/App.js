import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import WorkoutsListPage from "./pages/WorkoutsList";
import WorkoutPage from "./pages/Workout";
import NewWorkoutPage from "./pages/NewWorkout";
import EditWorkout from "./components/EditWorkoutForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <WorkoutsListPage /> },
			{
				path: ":workoutId",
				element: <WorkoutPage />,
			},
			{ path: ":workoutId/edit", element: <EditWorkout /> },
			{
				path: "new",
				element: <NewWorkoutPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;

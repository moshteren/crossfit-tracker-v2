import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import WorkoutsListPage from "./pages/WorkoutsList";
import WorkoutPage from "./pages/Workout";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "", element: <WorkoutsListPage /> },
			{
				path: ":workoutId",
				element: <WorkoutPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;

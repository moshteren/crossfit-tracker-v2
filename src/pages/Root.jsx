import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavber";

const RootLayout = () => {
	return (
		<>
			<MainNavbar />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;

import { NavLink } from "react-router-dom";

const MainNavbar = () => {
	return (
		<>
			<header>
				<nav>
					<NavLink to={"/"}>רשימת האימונים</NavLink>
				</nav>
			</header>
		</>
	);
};

export default MainNavbar;

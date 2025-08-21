import { Link } from "react-router";
import UtilityButtons from "../components/UtilityButtons";

const Menu: React.FC = (): React.JSX.Element => {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-full w-full">
				<div className="h-72 w-[600px] flex flex-col justify-center rounded-lg shadow-lg bg-gray-950 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg p-10 border border-gray-400">
					<h1 className="text-3xl font-bold text-white text-center">
						Labyrinthine Cosmetics Utility
					</h1>

					<div className="border my-6"></div>

					<div className="h-full flex flex-col justify-center items-center space-y-6">
						<MenuButton to="/manage-cosmetics">
							Manage Cosmetics
						</MenuButton>
						<MenuButton to="/missing-cosmetics">
							View Missing Cosmetics
						</MenuButton>
					</div>
				</div>
			</div>

			<UtilityButtons />
		</>
	);
};

type MenuButtonProps = {
	to: string;
	children: React.ReactNode;
};

const MenuButton: React.FC<MenuButtonProps> = ({
	to,
	children,
}): React.JSX.Element => {
	return (
		<Link
			to={to}
			className="text-center rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 w-full mx-8"
		>
			{children}
		</Link>
	);
};

export default Menu;

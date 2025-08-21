import { Link } from "react-router";
import UtilityButtons from "../components/UtilityButtons";

const Menu: React.FC = (): React.JSX.Element => {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div className="h-72 w-[600px] flex flex-col justify-center rounded-lg shadow-lg bg-gray-950 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg p-10 border border-gray-400">
					<h1 className="text-3xl font-bold text-center text-white">
						Labyrinthine Cosmetics Utility
					</h1>

					<div className="my-6 border"></div>

					<div className="flex flex-col items-center justify-center h-full space-y-6">
						<MenuButton to="/manage-cosmetics">Manage Cosmetics</MenuButton>
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
			className="w-full px-4 py-2 mx-8 font-bold text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700"
		>
			{children}
		</Link>
	);
};

export default Menu;

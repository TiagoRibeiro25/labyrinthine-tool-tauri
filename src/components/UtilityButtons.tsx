import { MdOutlineDelete } from "react-icons/md";
import { deleteLocalCosmetics } from "../utils/storage";

const UtilityButtons: React.FC = (): React.JSX.Element => {
	const handleDeleteClick = (): void => {
		const message =
			"Are you sure you want to delete all cosmetic data? This action cannot be undone.";

		if (window.confirm(message)) {
			deleteLocalCosmetics();
			window.alert("All cosmetic data has been deleted.");
		}
	};

	// const handleGitHubClick = (): void => {
	// 	const url =
	// 		"https://github.com/TiagoRibeiro25/electron-labyrinthine-cosmetics-utility";
	// 	window.open(url, "_blank", "noopener,noreferrer");
	// };

	return (
		<>
			{/* GitHub button */}
			{/* <button
				className="fixed z-50 flex items-center justify-center p-3 text-white bg-gray-800 rounded-full shadow-lg bottom-6 right-20 hover:bg-gray-700"
				onClick={handleGitHubClick}
				aria-label="GitHub Repository"
				type="button"
			>
				<FaGithub className="w-5 h-5" />
			</button> */}

			{/* Delete button */}
			<button
				className="fixed z-50 p-3 text-white bg-gray-800 rounded-full shadow-lg bottom-6 right-6 hover:bg-gray-700"
				onClick={handleDeleteClick}
				aria-label="Delete All Cosmetic Data"
				type="button"
			>
				<MdOutlineDelete className="w-5 h-5" />
			</button>
		</>
	);
};

export default UtilityButtons;

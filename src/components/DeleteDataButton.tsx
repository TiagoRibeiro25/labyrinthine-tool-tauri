import { MdOutlineDelete } from "react-icons/md";
import { deleteLocalCosmetics } from "../utils/storage";

const DeleteDataButton: React.FC = (): React.JSX.Element => {
	const handleDeleteClick = (): void => {
		const message =
			"Are you sure you want to delete all cosmetic data? This action cannot be undone.";

		if (window.confirm(message)) {
			deleteLocalCosmetics();
			window.alert("All cosmetic data has been deleted.");
		}
	};

	return (
		<button
			className="fixed z-50 p-3 text-white bg-gray-800 rounded-full shadow-lg bottom-6 right-6 hover:bg-gray-700"
			onClick={handleDeleteClick}
			aria-label="Delete All Cosmetic Data"
			type="button"
		>
			<MdOutlineDelete className="w-5 h-5" />
		</button>
	);
};

export default DeleteDataButton;

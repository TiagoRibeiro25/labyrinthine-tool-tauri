import { FaArrowLeft } from "react-icons/fa";

const GoBackButton: React.FC = (): React.JSX.Element => {
	return (
		<button
			onClick={() => window.history.back()}
			className="fixed z-50 p-3 text-white bg-gray-800 rounded-full shadow-lg top-6 left-6 hover:bg-gray-700"
			aria-label="Go Back"
		>
			<FaArrowLeft className="w-5 h-5" />
		</button>
	);
};

export default GoBackButton;

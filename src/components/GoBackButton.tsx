import { FaArrowLeft } from "react-icons/fa";

const GoBackButton: React.FC = (): React.JSX.Element => {
	return (
		<button
			onClick={() => window.history.back()}
			className="fixed top-6 left-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg z-50"
			aria-label="Go Back"
		>
			<FaArrowLeft className="w-5 h-5" />
		</button>
	);
};

export default GoBackButton;

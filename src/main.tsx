import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/tailwind.css";
import Navigation from "./navigation/index.tsx";
import Background from "./components/Background.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Background>
			<Navigation />
		</Background>
	</StrictMode>,
);

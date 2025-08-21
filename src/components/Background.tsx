import type { PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({
	children,
}): React.JSX.Element => {
	return (
		<div
			className="w-screen h-screen"
			style={{
				backgroundImage: "url('images/background.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="w-full h-full bg-black bg-opacity-50">{children}</div>
		</div>
	);
};

export default Background;

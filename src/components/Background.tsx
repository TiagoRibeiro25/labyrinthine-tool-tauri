import type { PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({
	children,
}): React.JSX.Element => {
	return (
		<div
			className="h-screen w-screen"
			style={{
				backgroundImage: "url('images/background.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="bg-black bg-opacity-50 h-full w-full">{children}</div>
		</div>
	);
};

export default Background;

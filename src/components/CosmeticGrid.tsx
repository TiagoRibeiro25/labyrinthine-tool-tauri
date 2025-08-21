import React from "react";
import type { Cosmetic } from "../global";

interface CosmeticGridProps {
	cosmetics: Cosmetic[];
	userCosmetics: number[];
	onToggle?: (id: number) => void; // Optional for read-only use
}

const CosmeticGrid: React.FC<CosmeticGridProps> = ({
	cosmetics,
	userCosmetics,
	onToggle,
}) => {
	return (
		<div className="flex flex-wrap gap-2 mt-2">
			{cosmetics.map((cosmetic) => {
				const isOwned = userCosmetics.includes(cosmetic.id);
				return (
					<img
						key={cosmetic.id}
						src={`images/cosmetics/${cosmetic.id}.png`}
						alt={cosmetic.name}
						title={`${cosmetic.name} (${isOwned ? "Owned" : "Locked"})`}
						className={`w-20 h-20 transition-opacity duration-200 rounded cursor-pointer ${
							isOwned ? "opacity-100" : "opacity-30"
						}`}
						onClick={onToggle ? () => onToggle(cosmetic.id) : undefined}
						loading="lazy"
					/>
				);
			})}
		</div>
	);
};

export default CosmeticGrid;

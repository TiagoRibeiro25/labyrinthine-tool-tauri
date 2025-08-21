import React, { useState } from "react";
import CosmeticGrid from "../components/CosmeticGrid";
import GoBackButton from "../components/GoBackButton";
import cosmetics from "../data/cosmetics.json";
import type { Cosmetic } from "../global";
import { getLocalCosmetics, setLocalCosmetics } from "../utils/storage";

const MissingCosmetics: React.FC = (): React.JSX.Element => {
	const [userCosmetics, setUserCosmetics] = useState<number[]>(
		getLocalCosmetics()
	);

	const toggleUnlock = (id: number) => {
		if (!userCosmetics.includes(id)) {
			const updated = [...userCosmetics, id];
			setUserCosmetics(updated);
			setLocalCosmetics(updated);
		}
	};

	// Gather all missing cosmetics grouped by type
	const missingByType = Object.keys(cosmetics)
		.map((type) => {
			// @ts-expect-error cosmetics[type] is valid
			const missing = cosmetics[type].filter(
				(cosmetic: Cosmetic) => !userCosmetics.includes(cosmetic.id)
			);
			return { type, missing };
		})
		.filter(({ missing }) => missing.length > 0);

	const hasAllCosmetics = missingByType.length === 0;

	return (
		<>
			<div className="flex flex-col items-center justify-center w-full h-full p-20">
				<div className="w-full h-full p-10 overflow-y-auto bg-opacity-50 border border-gray-400 rounded-lg shadow-lg bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-lg">
					<h1 className="mb-6 text-3xl font-bold text-center text-white">
						Missing Cosmetics
					</h1>

					<div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 w-full min-h-[200px] flex items-center justify-center">
						{hasAllCosmetics ? (
							<p className="text-xl font-semibold text-green-400">
								Congratulations! You have collected all cosmetics.
							</p>
						) : (
							<ul className="w-full space-y-6 list-none">
								{missingByType.map(({ type, missing }) => (
									<li key={type}>
										<span className="font-medium text-white">{type}</span>
										<CosmeticGrid
											cosmetics={missing}
											userCosmetics={userCosmetics}
											onToggle={toggleUnlock}
										/>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>

			<GoBackButton />
		</>
	);
};

export default MissingCosmetics;

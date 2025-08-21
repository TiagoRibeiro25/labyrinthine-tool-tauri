import React, { useState } from "react";
import GoBackButton from "../components/GoBackButton";
import CosmeticGrid from "../components/CosmeticGrid";
import cosmetics from "../data/cosmetics.json";
import { getLocalCosmetics, setLocalCosmetics } from "../utils/storage";
import type { Cosmetic } from "../global";

const MissingCosmetics: React.FC = (): React.JSX.Element => {
	const [userCosmetics, setUserCosmetics] =
		useState<number[]>(getLocalCosmetics());

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
				(cosmetic: Cosmetic) => !userCosmetics.includes(cosmetic.id),
			);
			return { type, missing };
		})
		.filter(({ missing }) => missing.length > 0);

	const hasAllCosmetics = missingByType.length === 0;

	return (
		<>
			<div className="flex flex-col items-center justify-center h-full w-full p-20">
				<div className="w-full h-full rounded-lg shadow-lg bg-gray-950 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg p-10 border border-gray-400 overflow-y-auto">
					<h1 className="text-3xl font-bold text-center text-white mb-6">
						Missing Cosmetics
					</h1>

					<div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 w-full min-h-[200px] flex items-center justify-center">
						{hasAllCosmetics ? (
							<p className="text-green-400 text-xl font-semibold">
								Congratulations! You have collected all cosmetics.
							</p>
						) : (
							<ul className="list-none space-y-6 w-full">
								{missingByType.map(({ type, missing }) => (
									<li key={type}>
										<span className="text-white font-medium">
											{type}
										</span>
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

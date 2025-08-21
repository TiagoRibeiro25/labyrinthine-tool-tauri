import React, { useState } from "react";
import GoBackButton from "../components/GoBackButton";
import CosmeticGrid from "../components/CosmeticGrid";
import cosmetics from "../data/cosmetics.json";
import { getLocalCosmetics, setLocalCosmetics } from "../utils/storage";

const ManageCosmetics: React.FC = (): React.JSX.Element => {
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [userCosmetics, setUserCosmetics] =
		useState<number[]>(getLocalCosmetics());

	const handleTypeClick = (type: string) => {
		setSelectedType(type === selectedType ? null : type);
	};

	const toggleCosmetic = (id: number) => {
		const updated = userCosmetics.includes(id)
			? userCosmetics.filter((cosmeticId) => cosmeticId !== id)
			: [...userCosmetics, id];

		setUserCosmetics(updated);
		setLocalCosmetics(updated);
	};

	const filteredTypes = selectedType ? [selectedType] : Object.keys(cosmetics);

	return (
		<>
			<div className="flex flex-col items-center justify-center h-full w-full p-20">
				<div className="w-full h-full rounded-lg shadow-lg bg-gray-950 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg p-10 border border-gray-400 overflow-y-auto">
					<h1 className="text-3xl font-bold text-center text-white mb-6">
						Manage Cosmetics
					</h1>

					<div className="flex flex-row">
						{/* Sidebar */}
						<div className="w-72 h-full bg-gray-800 rounded-lg shadow-lg mr-6 bg-opacity-50">
							<ul className="list-none p-4">
								{Object.keys(cosmetics).map((type) => (
									<li
										key={type}
										className={`text-white hover:bg-gray-700 p-2 rounded cursor-pointer ${
											selectedType === type ? "bg-gray-700" : ""
										}`}
										onClick={() => handleTypeClick(type)}
									>
										{type}
									</li>
								))}
							</ul>
						</div>

						{/* Cosmetic Lists */}
						<div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-6 bg-opacity-50">
							<h2 className="text-xl font-semibold text-white mb-4">
								Cosmetics List
							</h2>
							<ul className="list-none space-y-6">
								{filteredTypes.map((type) => (
									<li key={type}>
										<span className="text-white font-medium">
											{type}
										</span>
										<CosmeticGrid
											// @ts-expect-error cosmetics[type] is valid
											cosmetics={cosmetics[type]}
											userCosmetics={userCosmetics}
											onToggle={toggleCosmetic}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<GoBackButton />
		</>
	);
};

export default ManageCosmetics;

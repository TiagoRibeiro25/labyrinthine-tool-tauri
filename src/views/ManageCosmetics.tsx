import React, { useState } from "react";
import CosmeticGrid from "../components/CosmeticGrid";
import GoBackButton from "../components/GoBackButton";
import cosmetics from "../data/cosmetics.json";
import { getLocalCosmetics, setLocalCosmetics } from "../utils/storage";

const ManageCosmetics: React.FC = (): React.JSX.Element => {
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [userCosmetics, setUserCosmetics] = useState<number[]>(
		getLocalCosmetics()
	);

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
			<div className="flex flex-col items-center justify-center w-full h-full p-20">
				<div className="w-full h-full p-10 overflow-y-auto bg-opacity-50 border border-gray-400 rounded-lg shadow-lg bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-lg">
					<h1 className="mb-6 text-3xl font-bold text-center text-white">
						Manage Cosmetics
					</h1>

					<div className="flex flex-row">
						{/* Sidebar */}
						<div className="h-full mr-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg w-72">
							<ul className="p-4 list-none">
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
						<div className="flex-1 p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
							<h2 className="mb-4 text-xl font-semibold text-white">
								Cosmetics List
							</h2>
							<ul className="space-y-6 list-none">
								{filteredTypes.map((type) => (
									<li key={type}>
										<span className="font-medium text-white">{type}</span>
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

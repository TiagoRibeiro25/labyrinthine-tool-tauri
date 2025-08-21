export function getLocalCosmetics() {
	const cosmetics = localStorage.getItem("cosmetics");
	return cosmetics ? JSON.parse(cosmetics) : [];
}

export function setLocalCosmetics(cosmetics: Array<number>) {
	localStorage.setItem("cosmetics", JSON.stringify(cosmetics));
}

export function deleteLocalCosmetics() {
	localStorage.removeItem("cosmetics");
}

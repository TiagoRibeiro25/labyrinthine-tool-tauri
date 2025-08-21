export {};

declare global {
	interface Window {
		electronAPI: null;
	}
}

export type Cosmetic = {
	id: number;
	name: string;
};

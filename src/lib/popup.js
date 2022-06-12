import { writable } from 'svelte/store';

function togglePopup() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,

		toggle: () => {
			update((value) => !value);
		}
	};
}

export const popup = togglePopup();

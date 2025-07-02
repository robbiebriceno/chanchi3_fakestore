import { create } from 'zustand';

export const useProductStore = create((set) => ({
	products: [],
	loading: false,
	error: null,

	fetchProducts: async () => {
		set({ loading: true, error: null });
		try {
			const response = await fetch('https://fakestoreapi.com/products');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			set({ products: data, loading: false });
		} catch (error) {
			set({ error: error.message, loading: false });
		}
	},
}));
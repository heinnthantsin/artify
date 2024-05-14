import { create } from "zustand";

export const useCartStore = create((set) => ({

    carts: [],
    addCartItem: (item) => set((state) => ({ carts: [...state.carts, { productName: item.name, price: item.price, id: item.id }] })),
    removeCartItem: (id) => set((state) => ({ carts: state.carts.filter(item => item.id != id) }))
}))

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../components/Products/ProductCard";

const initialState:ICard[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action:PayloadAction<ICard>) {
            state.push(action.payload)
        },
        remove(state, action:PayloadAction<{id:number}>) {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const {add, remove} = cartSlice.actions

export default cartSlice.reducer
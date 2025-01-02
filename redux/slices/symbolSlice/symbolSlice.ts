import { createSlice } from "@reduxjs/toolkit";
const initialState: string = 'AMZN'
const symbolSlice = createSlice ({
    name: 'symbol',
    initialState,
    reducers: {
        changeSymbol: (state, action) => {
            return action.payload
        }
    }
})
export const {changeSymbol} = symbolSlice.actions;
export default symbolSlice.reducer
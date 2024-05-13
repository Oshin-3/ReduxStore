import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'loading'
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.SUCCESS
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = productSlice.actions

export default productSlice.reducer

// redux Thunks - in older version thunks are written like this
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            dispatch(setProducts(res.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
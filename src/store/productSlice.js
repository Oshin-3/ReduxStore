import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    // reducers: {
    //     // setProducts(state, action) {
    //     //     state.data = action.payload
    //     // },
    //     // setStatus(state, action) {
    //     //     state.status = action.payload
    //     // }
    // },
    extraReducers : (builder) => {
        builder.addCase(fetchProductsCAT.pending, (state) => {
            state.status = STATUSES.LOADING
        }).addCase(fetchProductsCAT.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUSES.LOADING
        }).addCase(fetchProductsCAT.rejected, (state) => {
            state.status = STATUSES.ERROR
        })
    }
})

//export const { setProducts, setStatus } = productSlice.actions
export const { extraReducers } = productSlice.actions
export default productSlice.reducer

// redux Thunks - in older version thunks are written like this
// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await axios.get('https://fakestoreapi.com/products')
//             dispatch(setProducts(res.data))
//             dispatch(setStatus(STATUSES.SUCCESS))
//         }
//         catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

//thunk using redux toolkit
export const fetchProductsCAT = createAsyncThunk('products', async () =>{
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data;
})
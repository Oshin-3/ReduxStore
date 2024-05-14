import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
//import { fetchProducts } from '../store/productSlice';
import { fetchProductsCAT } from '../store/productSlice';

function Products() {
    //const [products, setProducts] = useState([]);

    const {data: products, status} = useSelector((state) => state.products)

    const dispatch = useDispatch()
    const handleAdd = (product) => {
        dispatch(add(product))
    }

    useEffect(() => {
        const getProducts = async () => {
            // const res = await axios.get('https://fakestoreapi.com/products')
            // //console.log(res.data)
            // setProducts(res.data)
            dispatch(fetchProductsCAT())
        }

        getProducts()

    }, [])


    return (
        <div>
            <div className='productsWrapper'>
                {
                    products.map((product) => {
                        return <div key={product.id} className='card'>
                            <img src={product.image} />
                            <h6>{product.title}</h6>
                            <h5>{product.price}</h5>

                            <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Products
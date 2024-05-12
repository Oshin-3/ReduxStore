import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'


function Cart() {

  const items = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const handleRemove = (itemId) => {
    dispatch(remove(itemId))
  }

  return (
    <div>
        <h1></h1>
        <div className='cartWrapper'>

          {
            items.map((item)=>(
              <div className='cartCard'> 
                 <img style={{width: '7%'}} src={item.image}></img>
                 <h5 style={{width: '400px'}}>{item.title}</h5>
                 <h5 style={{width: '200px'}}>Price : ${item.price} </h5>

                 <button onClick={() => handleRemove(item.id)} className='remove-btn'>Remove Item</button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Cart
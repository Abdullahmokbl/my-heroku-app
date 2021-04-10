import React, {useState} from 'react';
import { connect } from "react-redux";
import {del_cart} from '../../actions/carts';
import { AiFillDelete } from 'react-icons/ai';
import './cart.css';
import { add } from 'winston';

const MyCart = ({user, quantity, hr, id, name, price, del_cart}) => {
  const [total, setTotal] = useState(price)
  const [number, setNumber] = useState(1)
  // useEffect(() => {
  // }, [total])
  const change = e => {
    setTotal(e.target.value*price)
  }

  const add = () => {
    setNumber(number+1)
    
  }
  const minus = () => {
    if(number !== 1){
      setNumber(number-1)
    }
  }
  
  const del = id => {
    del_cart(user._id, id)
  }

  return(
    <div className='item'>
      <div><a href={hr}>{name}</a></div>
      <div className='number'>
        <span className='span' onClick={()=>add()}>+</span>
        <span>{quantity}</span>
        <span className='span' onClick={()=>minus()}>-</span>
      </div>
      <div>${price}</div>
      <div>${total}</div>
      <div><AiFillDelete className='del' onClick={()=>del(id)} size={40} color='red' /></div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {del_cart})(MyCart);
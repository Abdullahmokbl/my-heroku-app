import React, {Fragment, useState} from 'react';
import { connect } from "react-redux";
import './cart.css'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import {del_cart} from '../../actions/types';
import { Redirect } from 'react-router';

const Cart = ({user, items, del_cart}) => {
  let emptycart = [];
  if(user)   {
    emptycart = [...user.cart]
  };
  const [total, setTotal] = useState(null)
  const change = e => {
    setTotal(e.target.value)
  }
  const del = id => {
    del_cart(user._id, id)
    return(
      <Redirect to='/cart' />
    )
  }
  const buy = () => {
    console.log('buy')
    // buy_()
  }

  if(emptycart.length === 0){
    return(
      <Fragment>
        <Navbar />
      <div className='container navpd'>
        <div className='cart'>
          <h2>Your Cart</h2>
          <div className='empty'>
            <h3>
              Your cart is empty.
            </h3>
            <a href='/' className='add'>Continue browsing here</a>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
  return (
    <div>
      <Navbar />
      <div className='container navpd'>
        <div className='cart'>
          <h2>Your Cart</h2>
          <div className='items'>
            <div className='head'>
              <div>name</div>
              <div>number</div>
              <div>price</div>
              <div>total price</div>
              <div>delete</div>
            </div>
            {emptycart.map(item=> {
              const i = items.filter(i=> i._id===item)
              const hr = '/item/'+i[0]._id
              let t = 1;
              return(
                <div className='item'>
                  <div><a href={hr}>{i[0].name}</a></div>
                  <div><input type='number' defaultValue='1' min='1' onChange={(e)=>change(e)} /></div>
                  <div>${i[0].price}</div>
                  <div><input type='text' name='total' defaultValue={'$'+t*i[0].price} disabled /></div>
                  <div className='del' onClick={()=>del(i[0]._id)}>del icon</div>
                </div>
              )
            })}
          </div>
          <div className='buy' onClick={()=>buy()}>Buy</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {del_cart})(Cart);
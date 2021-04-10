import React, {Fragment} from 'react';
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import {del_cart, del_all_cart} from '../../actions/carts';
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import MyCart from '../../components/cart/cart';
import { AiFillDelete } from 'react-icons/ai';
import './cart.css';

const Cart = ({user, items, del_all_cart, cart, totalPrice}) => {
  console.log('d',cart)
  let t_price = 0
  const buy = () => {
    console.log('buy')
    // buy_()
  }

  const del_all = () => {
    console.log('del all')
    del_all_cart(user._id)
  }
  // if(!items) return(<div>Loading</div>)
  if(cart.length === 0 || !items){
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
              <NavLink to='/' className='add'>Continue browsing here</NavLink>            </div>
          </div>
        </div>
        <Footer />
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
            {cart.map(item=> {
              const i = items.filter(i=> i._id===item.id);
              console.log(item.q)
              const hr = '/item/'+i[0]._id;
              t_price += i[0].price;
              console.log(i)
              return(
                <MyCart quantity={item.q} key={i[0]._id} hr={hr} id={i[0]._id} name={i[0].name} price={i[0].price} change={onchange}  />
              )
            })}
          </div>
          <div className='total_price'>Total Price : ${totalPrice? totalPrice:t_price}</div>
          <div className='bd'>
            <div className='buy' onClick={()=>buy()}>Buy</div>
            <div className='buy' onClick={()=>del_all()}>
              <AiFillDelete className='del' size={30} color='red' />
              Delete All
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {del_cart, del_all_cart})(Cart);
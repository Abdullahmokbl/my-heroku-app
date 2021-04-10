import React, {useEffect, useState, Fragment} from 'react';
import { connect } from "react-redux";
import { get_item } from "../../actions/items";
import { add_to_cart } from "../../actions/carts";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './item.css';

const Item = (props) => {
  const id = props.match.params.id;
  const {get_item, add_to_cart, item, user, cart} = props;
  const [cart_added, setCart_added] = useState(false)

  useEffect(()=>{
    get_item(id)
    if(user){
      const added = cart.filter(c=> c.id===id)
      if(added.length !== 0) setCart_added(true)
    }
  },[id, user])

  const add = () => {
    if(!user){
      return props.history.push('/login')
    }
    add_to_cart( user._id, item._id, 1)
    cart.push(item._id)
    setCart_added(true)
  }

  const i = () => {
    const {name, price, img, description, seller} = item;
    const imgUrl = 'http://localhost:5000/uploads/' + img;
    const sellerUrl = '/seller/' + seller.id;
    // console.log(__dirname + 'uploads')
    return(
      <Fragment>
        <div className='container navpd'>
          <div className='goback'>
            <a href='/'>Home</a>
            <span>&gt;</span>
            <a href='/category'>Category</a>
          </div>
          <div className=' product'>
            <a href={imgUrl} className='img'>
              <img src={imgUrl} alt='' />
            </a>
            <div className='des'>
              <h3>{name}</h3>
              <span>{price}</span>
              <div className='seller'>
                <a href={sellerUrl}>{seller.name}</a>
              </div>
              <p>{description}</p>
              <ul>
                <li>fod</li>
                <li>fod</li>
                <li>fod</li>
                <li>fod</li>
              </ul>
              {!cart_added?
              <div className='add' onClick={()=>add()}>Add to Cart . ${price}</div>
              :
              <div className='added'>Added to Cart . ${price}</div>
              }
            </div>
          </div>
        </div>
      </Fragment>
    )
  }


  return (
    <div>
      <Navbar />
      {item? i():<div className='loading'></div>}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {get_item, add_to_cart})(Item);
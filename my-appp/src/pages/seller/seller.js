import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { get_seller } from "../../actions/items";
import Navbar from "../../components/navbar/navbar";
import Item from "../../components/item/item";
import Footer from "../../components/footer/footer";
import './seller.css';

const Seller = (props) => {
  const id = props.location.pathname.slice(8);
  const {get_seller, seller} = props;
  useEffect(() => {
    get_seller(id)
  }, [id])
  
  return (
    <Fragment>
      <Navbar />
      <div className='container navpd'>
        <div className='seller'>
          <h3>seller</h3>
          {seller && seller.map(item=>{
            return(
              <Item key={item._id} id={item._id} name={item.name} price={item.price} img={item.img} description={item.description} />
            )
          })}
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, {get_seller})(Seller)
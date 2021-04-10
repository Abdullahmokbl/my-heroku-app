import React from 'react';
import { connect } from "react-redux";
import { get_items } from "../../actions/items";
import Item from '../../components/item/item';
import './items.css'

const Items = ({items}) => {
  const item = items? items.map(item=>{
    return(
      <Item key={item._id} id={item._id} name={item.name} price={item.price} img={item.img} description={item.description} />
    )
  }):null

  return (
    <div className='items'>
        {item}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {get_items})(Items);
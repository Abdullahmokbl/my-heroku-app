import React from 'react';
// import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { get_items } from "../../actions/types";
import Item from '../../components/item/item';
import './items.css'

const Items = ({get_items, items}) => {
  // useEffect(()=>{
  //   get_items()
  // },[])
  const item = items? items.map(item=>{
    return(
      <Item key={item._id} id={item._id} name={item.name} description={item.description} />
    )
  }):null

  return (
    <div className='container'>
      <div className='items'>
        {item}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {get_items})(Items);
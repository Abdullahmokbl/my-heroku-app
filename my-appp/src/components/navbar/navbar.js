import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { search_item } from "../../actions/items";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({user, search_item, search_items}) => {
  const search = (e) => {
    const item = e.target.value;
    if (item.length === 0) search_item('')
    if(item.length) search_item(item);
  }
  const logged = () => {
    return(
      <Fragment>
        <Link to='/profile'>{user.username}</Link>
        <Link to='/logout'>Logout</Link>
      </Fragment>
    )
  }
  const notLogged = () => {
    return(
      <Fragment>
        <Link to='/login'>Log in </Link>
        <Link to='/signup'>Sign up</Link>
      </Fragment>
    )
  }
  return (
    <div className='navbar'>
      <div className='container'>
        <ul>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/add'>Add Item</NavLink>
          <NavLink to='/categories'>Categories</NavLink>
          <NavLink to='/cart'>Cart</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </ul>
        <div>
          <form onSubmit={(e)=> e.preventDefault()}>
            <input className='search' type='search' placeholder='Search' onChange={(e)=> search(e)} />
          </form>
          <div className='search_items'>
            {search_items.map(item => {
              const hr = '/item/'+item._id
              return(
                <div key={item._id} className='search_item'><NavLink to={hr} >{item.name}</NavLink></div>
              )
            })
            }
          </div>
        </div>
        <ul>
          {user? logged():notLogged()}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {search_item})(Navbar);

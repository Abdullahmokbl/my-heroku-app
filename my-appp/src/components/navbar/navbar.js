import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({user}) => {
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
        <form>
          <input className='search' type='search' placeholder='Search' />
        </form>
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

export default connect(mapStateToProps)(Navbar);

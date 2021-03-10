import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({user}) => {
  // console.log(user, 'll')
  // const logged = return(<Link to='/profile'>name</Link>)
  const logged = () => {
    return(
      <Fragment>
        <Link to='/profile'>name</Link>
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
          <NavLink to='/it'>Categories</NavLink>
          <NavLink to='/items'>Items</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </ul>
        <form>
          <input className='search' type='search' placeholder='Search' />
        </form>
        {/* <div className='name'>name</div> */}
        <ul>
          {user? logged():notLogged()}
          {/* <Link to='/profile'>name</Link>
          <Link to='/signup'>Sign up</Link>
          <Link to='/login'>Log in </Link>
          <Link to='/logout'>Logout</Link> */}
        </ul>
      </div>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Navbar);

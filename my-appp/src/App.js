import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Home from "./pages/home/home";
import Add from "./pages/add/add";
import Categories from "./pages/categories/categories";
import Cart from "./pages/cart/cart";
import Contact from "./pages/contact/contact";
import Faqs from "./pages/faqs/faqs";
import Terms from "./pages/terms/terms";
import Policy from "./pages/policy/policy";
import Item from "./pages/item/item";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Logout from "./pages/logout/logout";
import Seller from "./pages/seller/seller";
import { load_user } from "./actions/users";
import { get_items } from "./actions/items";
import './App.css';

function App(props) {
  const { isAuthenticated, get_items, load_user, isLoading} = props
  useEffect(()=>{
    load_user()
    get_items()
  },[])
  console.log(isAuthenticated)
  if(isLoading) return (<div>Loading....</div>)
  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/signup">
          {isAuthenticated ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route path='/logout' component={Logout} />
        <Route path="/profile">
          {!isAuthenticated ? <Redirect to="/" /> : <Profile />}
        </Route>
        <Route path='/add' component={Add} />
        <Route path='/categories' component={Categories} />
        <Route path='/item/:id' component={Item} />
        <Route path='/cart' component={Cart} />
        <Route path='/contact' component={Contact} />
        <Route path='/faqs' component={Faqs} />
        <Route path='/terms' component={Terms} />
        <Route path='/policy' component={Policy} />
        <Route path='/seller' component={Seller} />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {get_items, load_user})(App);

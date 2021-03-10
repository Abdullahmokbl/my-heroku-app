import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { add } from "./actions/types";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Item from "./pages/item/item";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Logout from "./pages/logout/logout";
import { get_items, load_user } from "./actions/types";

function App({ isAuthenticated, get_items, load_user }) {
  console.log(isAuthenticated)
  useEffect(()=>{
    load_user()
    get_items()
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar />
        <Items />
        <Footer /> */}
        {/* <Route exact path="/">
          {!user ? <Redirect to="/login" /> : <Home />}
        </Route> */}
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/signup">
          {isAuthenticated ? <Redirect to="/" /> : <Signup />}
        </Route>
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route path='/signup' component={Signup} /> */}
        <Route path='/logout' component={Logout} />
        <Route path='/item/:id' component={Item} />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {get_items, load_user})(App);

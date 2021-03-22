import React,{ Fragment } from 'react';
import { connect } from "react-redux";
import Navbar from "../../components/navbar/navbar";
import Items from "../items/items";
import Footer from "../../components/footer/footer";
import './home.css';


const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='navpd'>
        <div className='hero'></div>
        <h4 className='featured_products'>Featured Products</h4>
        <div className='container'>
          <Items />
        </div>
        <div className='bg'>
          <p>shop here whatever you want</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

const mapStateToProps = state => {
  return state;
}
export default connect(mapStateToProps)(Home);
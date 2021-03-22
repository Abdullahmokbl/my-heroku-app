import React from 'react';
import { connect } from "react-redux";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './categories.css';

const Categories = (props) => {
  return (
    <div>
      <Navbar />
      <div className='navpd'>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(Categories);
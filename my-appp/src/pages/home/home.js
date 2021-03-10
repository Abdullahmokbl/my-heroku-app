import React from 'react';
import Navbar from "../../components/navbar/navbar";
// import Header from "../header/header";
import Items from "../items/items";
import Footer from "../../components/footer/footer";


export default function home() {
  return (
    <div>
      <Navbar />
      <Items />
      <Footer />
    </div>
  )
}

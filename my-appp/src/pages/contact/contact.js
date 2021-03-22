import React from 'react'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './contact.css';

export default function contactUs() {
  return (
    <div>
      <Navbar />
      <div className='container navpd'>
        <div className='contact'>
          <h2>Contact Us</h2>
          <h3>
            Shopping
          </h3>
          <h3>
            0106 061 9338
            <br />
            abdullahmokbl@yahoo.com
          </h3>
          <h3>
            Mon - Fri 10am - 4:30pm
            <br />
            Sat 10am - 3pm
            <br />
            Sun CLOSED
          </h3>
          <p>
            If you have a query regarding an element of our website whether it be about
            processing or an aspect of your order, our in-store team would love to
            assist you. Don't hesitate to contact us on the following email, or call
            the store between our working hours. We also channel feedback through
            our Facebook Page and Instagram. We will aim to reply to your query 
            within 24 working hours. For all product and order enquiries please email: 
            <span><a href='abdullahmokbl'>abdullahmokbl@yahoo.com</a></span>
          </p>
          <p>
            Our team at Shopping are always interested in your feedback to do with your 
            physical and online shopping experience and our services. You can forward 
            your comments to the supplied emails or find us on Facebook!
          </p>
          <p>
            Thank you so much for supporting your local, as well as NZ designers and brands! x
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

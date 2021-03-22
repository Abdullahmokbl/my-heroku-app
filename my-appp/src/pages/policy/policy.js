import React from 'react'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './policy.css';

export default function Policy() {
  return (
    <div>
      <Navbar />
      <div className='container navpd'>
        <div className='policy'>
          <h2>Privacy Policy</h2>
          <p>
          Shopping want to assure you that the details you 
          provide are 100% confidential and will not be passed on to any 
          dodgy spam set-up or third party. Your information will be kept 
          secure and private at all times and we do not keep records of your 
          credit card information. We respect your privacy and use your information 
          to ensure a smooth transaction from purchase through to delivery.
          </p>
          <p>
          The details you provide us are used to enhance your experience with 
          Shopping and keep you up to date with the latest up and coming events, 
          promotions and releases. You can disable this option at any time by 
          tapping the 'unsubscribe' link at the bottom of our emails, although 
          we do love having you.
          </p>
          <h3>COPYRIGHT</h3>
          <p>
          Within our Shopping store, our distinct difference lies with our self-designed 
          clothing label My Boyfriends Back, which is solely designed by Shopping's 
          owner and director Dani Burkhart. All My Boyfriends Back product is NZ 
          made and all photography and marketing content is created by Dani and 
          her team of creatives.  Shopping and My Boyfriends Back would like to state 
          that all images, text and imagery featured on our website belong to us 
          (My Boyfriends Back) as intellectual property. Unauthorised permission 
          to copy content from our site may result in legal action. If you wish to 
          copy material represented on our site, please contact Shopping or My Boyfriends 
          Back first, to obtain permission. Many thanks.
          </p>
          <h3>PAYMENT</h3>
          <p>
          Due to exchange rate fluctuations, the actual price that will be charged 
          to your credit card may slightly differ to the price listed on the website. 
          Our garment prices are shown in $NZD inclusive of GST and your purchase 
          will be charged in $NZD. According to the exchange rate on the day the 
          order was processed, the amount charged will convert accordingly.
          </p>
          <h3>TAXES</h3>
          <p>
          Shopping Designer Boutique is NOT responsible for any charges that may incur 
          during transit. Please be aware that every country has individual custom 
          laws and policies, any extra costs are out of our control and cannot be 
          foreseen. Contact the nearest customs office should you need any help.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import React from 'react'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './terms.css';

export default function Terms() {
  return (
    <div>
      <Navbar />
      <div className='container navpd'>
        <div className='terms'>
          <h2>Terms Of Use</h2>
          <h3>Pricing</h3>
          <p>
          All items displayed on the Shopping website for sale state their full 
          retail price. This price is often indicated by the supplier and 
          sometimes reflects our calculated price based on industry standard. 
          Our sale items will be displayed reflecting the discounted price in 
          the case a discount code hasn't been offered to customers. Every so 
          often human error occurs and something may not be right. In this case, 
          we endeavour to contact you straight away and adjust or correct the 
          issue. If you notice something that looks incorrect, don't hesitate to 
          contact us directly and we can rectify the problem. In the instance of 
          an under-priced item advertised on the site, we will contact you and you 
          are entitled to cancel or continue with your adjusted order.
          </p>
          <h3>CUSTOMER ACCOUNTS</h3>
          <p>
          The customer is solely responsible for the use of their account and 
          all passwords and information attached to the account. The customer 
          agrees that all information supplied on the account that represents 
          your relationship with Shopping is true and correct. If Shopping Designer 
          Boutique feels that inaccurate or false information has been supplied 
          r your account has been violated, your account may be terminated by Shopping.
          </p>
          <h3>PRODUCT DESCRIPTIONS</h3>
          <p>
          Shopping strives to maintain a clear level of communication on the site 
          and utilises imagery from brands to display our available product. 
          We at Shopping write our own descriptions on the products unless the brand 
          prefers otherwise. Occasionally there may be a discrepancy with an item 
          or the colour of the image etc. If you are having difficulty with a 
          certain product not being as described, please contact us and return it 
          in new condition so we can process a refund, credit or exchange for you.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

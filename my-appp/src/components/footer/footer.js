import React from 'react';
import './footer.css'

export default function footer() {
  return (
    <footer>
      <div className='c_care'>
        <h5>customer care</h5>
        <hr />
        <ul>
          <li>
            <a href='/contact'>Contact Us</a>
          </li>
          <li>
            <a href='/faqs'>FAQS</a>
          </li>
          <li>
            <a href='/terms'>Terms of use</a>
          </li>
          <li>
            <a href='/policy'>Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className='about'>
        <h5>About</h5>
        <hr />
        <p>Curators of ethical fashion and New Zealand designed. 

Shopping is a destination for style seekers. Located in Masterton's boutique Kuripuni Village, Shopping is lovingly and carefully curated by Owner and Buyer, Abdullah Mokbl. Dedicated to NZ designed, ethical fashion and accessories- Shopping is a beautiful style edit.

Spliced on the rack, you will discover a mix of your favourite boutique labels, lounge-wear and lifestyle products. Shopping presents small, regular collections from designers that are limited in nature with a high rotation. For all women, all sizes, Shopping is the go-to fashion boutique of the Wairarapa. Purchases made at Shopping support suppliers and makers within NZ- shop local, shop small!

Feel inspired exploring a beautifully designed space that reflects a love for styling and creating. Style tips await from a small, warm team who adore fashion- the current, the classic and the refined.

A truly authentic element of the store, Owner Abdullah Mokbl, produces in-house clothing label My Boyfriends Back from Shopping, for Shopping. Shoppers can order different colours in signature styles, and select from seasonal pieces available instore. MBB is designed using surplus fabric stocks and is made in Auckland, NZ. </p>
      </div>
      <div className='newsletter'>
        <h5>Newsletter</h5>
        <hr />
        <p>Join our mailing list</p>
        <form method='POST'>
          <input type='email' name='mail' placeholder='example@email.com' />
          <input type='submit' value='Subscribe' />
        </form>
      </div>
    </footer>
  )
}

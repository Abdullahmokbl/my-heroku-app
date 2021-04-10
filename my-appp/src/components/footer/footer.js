import React, {useState} from 'react';
import { connect } from "react-redux";
import { send_mail } from "../../actions/users";
import './footer.css'

const Footer = ({send_mail, mail_msg}) => {
  console.log(mail_msg)
  const [email, setEmail] = useState('')
  const mail = (e) => {
    setEmail(e.target.value)
  }
  const sendmail = (e) => {
    e.preventDefault()
    send_mail(email)
    setEmail('')
  }
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

Shopping is a destination for style seekers. Located in Masterton's boutique Kuripuni Village, Shopping is lovingly and carefully curated by Owner and Buyer. Dedicated to NZ designed, ethical fashion and accessories- Shopping is a beautiful style edit.

Spliced on the rack, you will discover a mix of your favourite boutique labels, lounge-wear and lifestyle products. Shopping presents small, regular collections from designers that are limited in nature with a high rotation. For all women, all sizes, Shopping is the go-to fashion boutique of the Wairarapa. Purchases made at Shopping support suppliers and makers within NZ- shop local, shop small!

Feel inspired exploring a beautifully designed space that reflects a love for styling and creating. Style tips await from a small, warm team who adore fashion- the current, the classic and the refined.

A truly authentic element of the store, Owner, produces in-house clothing label My Boyfriends Back from Shopping, for Shopping. Shoppers can order different colours in signature styles, and select from seasonal pieces available instore. MBB is designed using surplus fabric stocks and is made in Auckland, NZ. </p>
      </div>
      <div className='newsletter'>
        <h5>Newsletter</h5>
        <hr />
        <p>Join our mailing list</p>
        <form onSubmit={(e)=>sendmail(e)}>
          <input type='email' name='email' value={email} placeholder='example@email.com' required onChange={(e)=> mail(e)} />
          <input type='submit' value='Subscribe' />
        </form>
        <div className='msg'>{mail_msg}</div>
      </div>
    </footer>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps,{send_mail})(Footer)
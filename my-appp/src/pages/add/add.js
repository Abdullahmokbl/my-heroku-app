import React, {Fragment, useState, useEffect} from 'react';
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import {  add_item } from "../../actions/items";
import {  load_user } from "../../actions/users";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './add.css';

const Add = ({ history, add_item, user}) => {
  const [item, setItem] = useState({
    name: '',
    price: '',
    info: '',
    description: '',
    seller: '',
  })
  useEffect(() => {
    if(user){
      setItem({
        ...item,
        seller: {id: user._id, name: user.username}
      })
    }
  }, [user])
  const [img, setImg] = useState(null)

  if(!user){
    return(
      <Fragment>
        <Navbar />
        <div className='container navpd'>
          <NavLink to='/login' className='no_add'>Login to continue</NavLink>        </div>
        <Footer />
      </Fragment>
    )
  }

  const click = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const clickFile = (e) => {
    setImg(e.target.files[0])
  }

  const form = (e) => {
    e.preventDefault()
    if(img){
      var formData = new FormData();
      formData.append('img', img);
      formData.append('item', JSON.stringify(item));
    }
    add_item(formData)
    return history.push('/')
  }
  return (
    <div>
      <Navbar />
      <div className='container navpd'>
        <div className='add_item'>
          <h2>Add new Item</h2>
          <div className='item'>
            <form method='POST' onSubmit={(e)=> form(e)} encType='multipart/form-data'>
              <input type='text' name='name' placeholder='Name' onChange={(e)=> click(e)} required />
              <input type='number' name='price' placeholder='Price' onChange={(e)=> click(e)} required />
              <div>
              <label htmlFor="upload-photo">Add an image of your Item</label>
              <input type="file" name="img" id="upload-photo" onChange={(e)=> clickFile(e)} required />
              </div>
              <input type='text' name='info' placeholder='Info(optional)' onChange={(e)=> click(e)} />
              <input type='text' name='description' placeholder='Description' onChange={(e)=> click(e)} required />
              <input type='submit' value='Add Item' />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateTOProps = (state) => {
  return state
}

export default connect(mapStateTOProps, { add_item, load_user})(Add);
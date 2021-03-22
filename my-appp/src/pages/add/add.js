import React, {Fragment, useState} from 'react';
import './add.css';
import { connect } from "react-redux";
import {  add_item, load_user } from "../../actions/types";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Add = ({ history, add_item, err, user}) => {
  // console.log(history)
  const [item, setItem] = useState({
    name: '',
    price: '',
    info: '',
    description: ''
  })
  const [img, setImg] = useState(null)
  if(!user){
    return(
      <Fragment>
        <Navbar />
        <div className='container navpd'>
          <a  href='/login' className='no_add'>Login to continue</a>
        </div>
        <Footer />
      </Fragment>
    )
  }
  const click = (e) => {
    console.log(e.target.value)
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const clickFile = (e) => {
    console.log(e.target.files[0])
    setImg(e.target.files[0])
  }

  const form = (e) => {
    console.log(item)
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
              {/* <input type='file' name='Picture' placeholder='Picture' /> */}
              <div>
              <label for="upload-photo">Add an image of your Item</label>
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
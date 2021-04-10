import React, { Fragment, useEffect} from 'react';
import { connect } from "react-redux";
import { load_user, get_user_items } from "../../actions/users";
import Navbar from "../../components/navbar/navbar";
import Item from "../../components/item/item";
import Footer from "../../components/footer/footer";
import './profile.css';

const Profile = ({user, get_user_items, userItems}) => {
  console.log(userItems)
  useEffect(() => {
    get_user_items(user._id)
  }, [])
  if(!user) return <div />
  return (
    <Fragment>
        <Navbar username={user.username}/>
        <div className='container navpd'>
          <div className='profile'>
            <h2>Welcome {user.username}</h2>
            <h3>Items</h3>
            {userItems && userItems.map(item=>{
              return(
                <Item key={item._id} id={item._id} name={item.name} price={item.price} img={item.img} description={item.description} />
              )
            })}
            <p></p>
          </div>
        </div>
        <Footer />
    </Fragment>
  )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {load_user, get_user_items})(Profile)
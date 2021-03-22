import React, { Fragment} from 'react';
import { connect } from "react-redux";
import { load_user } from "../../actions/types";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './profile.css';

const Profile = ({user}) => {
  if(!user) return <div />
  return (
    <Fragment>
        <Navbar username={user.username}/>
        <div className='container navpd'>
          <div className='profile'>
            <h2>{user.username}</h2>
            {/* <h3></h3> */}
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

export default connect(mapStateToProps, {load_user})(Profile)
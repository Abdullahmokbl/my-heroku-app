import React, {useEffect, Fragment} from 'react';
import { connect } from "react-redux";
import { get_item } from "../../actions/types";
import './item.css'
import a from './1.jpg'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Item = (props) => {
  const id = props.match.params.id;
  const {get_item, item} = props;

  useEffect(()=>{
    get_item(id)
  },[])

  const i = () => {
    return(
      <Fragment>
        <h2 className='title'>{item.name}</h2>
        <div className='container product'>
          <img src={a} alt='' />
          <div className='des'>
            <h3>name: {item.name}</h3>
            <strong>Description:</strong>
            <p>{item.description}</p>
          </div>
        </div>
      </Fragment>
    )
  }


  return (
    <div>
      <Navbar />
      {item? i():<div className='loading'></div>}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {get_item})(Item);
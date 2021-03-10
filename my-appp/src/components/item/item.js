import React from 'react';
import './item.css'
import a from './a.PNG'

export default function item(props) {
  const { id, name, description} = props;
  // console.log('sds')
  // let id = 12325
  let hr = 'item/'+id
  return (
    <a href={hr} className='item'>
      <h3>{name}</h3>
      <img src={a} alt='' />
      <p>{description}</p>
    </a>
  )
}

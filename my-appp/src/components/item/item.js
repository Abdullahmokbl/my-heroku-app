import React from 'react';
import './item.css'

export default function item(props) {
  const { id, name, price, img} = props;
  const imgUrl = 'http://localhost:5000/uploads/'+img;
  let hr = 'item/'+id
  return (
    <div className='div'>
      <a href={hr} className='w'>
        <div className='a'>
          <img src={imgUrl} alt='img' />
        </div>
      </a>
      <div>
        <p>
          <a href='/category' className='category'>category</a>
        </p>
        <p className='name'>{name}</p>
        <p className='price'>${price}</p>
      </div>
    </div>
  )
}

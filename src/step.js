import React from 'react'
import './index.css'

const Cake = (props) => {
  return (
  <div className = 'cake'>
    <div className = 'card'>

        <div className = 'image'>
            <img src = {props.photo} alt = {props.name}/>
        </div>

        <div className = 'product'>
          
            <div className = 'item'>
                <p className = 'item1'>{props.name}</p>
                <p className = 'para'>{props.ingradients}</p>
            </div>

            <p className = 'price'>{props.price}</p>
            <button className = 'btn'>Order</button>

        </div>
    </div>
  </div>
  )
}

export default Cake;
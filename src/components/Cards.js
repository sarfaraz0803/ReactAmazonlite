import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/Card.css'

const Cards = () => {
   return (
        
        <div className="cards">
            <div className="card">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="mypic" className="card_img"/>
                <div className="card_info">
                    <span className="card_price">Price</span>
                    <h4 className="card_title">Product Name</h4>
                    <NavLink className='nav-link' to="/">View</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Cards


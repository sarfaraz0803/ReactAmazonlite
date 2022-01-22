import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/Card.css'

const Cards = () => {
   return (
        
        <div className="cards">
            <div className="card">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="mypic" className="card_img"/>
                <div className="card_info" >
                    <h4 className="card_title">Product Name</h4>
                    <span className="card_price mb-1">Price</span>
                    <NavLink className='nav-link' to="/productpage">View</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Cards


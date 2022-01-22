import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Homepage.css'
import Cards from './Cards'
import NavBar from './NavBar'


const Homepage = () => {
    const [login, setLogin] = useState({flag:false, role:""}) 
    useEffect(()=>{
        function initiate(){
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
            if(loggedUser !== null && loggedUser.role === 'seller'){
                setLogin((preValue)=>{return {...preValue,flag:true, role:"seller"}})
            }else if(loggedUser !== null && loggedUser.role === 'buyer'){
                setLogin((preValue)=>{return {...preValue,flag:true, role:"buyer"}})
            }else{
                setLogin((preValue)=>{return {...preValue,flag:false, role:""}})
            }
        }
        initiate()
    },[])

    return (
        <React.Fragment>
            <NavBar flag={login.flag} role={login.role} />
            <section className='home_section'>
                <div className='home_div'>
                    <h1 className='display_heading'>Welcome to Amazon lite</h1>
                    <p className='home_tagline'>this is a single page website for shopping various stuff online</p>
                    <NavLink className='nav-link home_button text-dark' to="/productpage">Explore More</NavLink>
                </div>
            </section>
            <section className='seller_section' id='home_pros'>
                <div className='seller_div'>
                    <div className='seller_heading'>
                        <h4>Our Best Products</h4>
                    </div>
                    <div className='seller_products'> 
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>                                        
                </div>
            </section>
        </React.Fragment>
    )
}

export default Homepage

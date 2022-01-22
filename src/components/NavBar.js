import React, { useEffect, useState } from 'react'
import '../style/NavBar.css'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Service from './Service';

const NavBar = (props) => {
    
    const [login, setLogin] = useState({flag:true, role:""}) 

    useEffect(()=>{
            setLogin((preValue)=>{return{...preValue,flag:props.flag,role:props.role}})
    },[props])

    function logout(){
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
        if(loggedUser !== null && loggedUser.role === 'seller'){
            Service.sellerLogout()
            .then(res=>{
                if(res.data === 'Successfully LoggedOut'){
                    localStorage.removeItem('loggedUser')
                    localStorage.removeItem('SellerCredentials')
                    alert('Successfully LoggedOut')
                    window.location.assign('/')
                }else{
                    console.log(res)
                }
            })
            .catch(err=>console.log(err))
        }else if(loggedUser !== null && loggedUser.role === 'buyer'){
            Service.buyerLogout()
            .then(res=>{
                if(res.data === 'Successfully LoggedOut'){
                    localStorage.removeItem('loggedUser')
                    localStorage.removeItem('BuyerCredentials')
                    alert('Successfully LoggedOut')
                    window.location.assign('/')
                }else{
                    console.log(res)
                }
            })
            .catch(err=>console.log(err))
        }else{
            alert('Your are not a buyer nor a seller who you are')
        }
    }
    
    return (
            <nav>
                <input type="checkbox" id='check' />
                <label htmlFor="check" className='checkbtn'><i className='fas fa-bars'></i></label>
                <label className="logo" >AmazonLite</label>
                {
                    login.flag !== false && login.role === 'buyer'?
                    <ul className='nav_list'>
                        <li><NavLink className="nav-link" to="/productpage">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                        <li><button onClick={logout}>Logout</button></li>
                        <li><NavLink className="nav-link cart" to="/cart"><ShoppingCartIcon/></NavLink></li>                    
                    </ul>
                    : login.flag !== false && login.role === "seller"?
                    <ul className='nav_list'>
                        <li><NavLink className="nav-link" to="/productpage">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/account">Profile</NavLink></li>
                        <li><button onClick={logout}>Logout</button></li>             
                    </ul>
                    : 
                    <ul className='nav_list'>
                        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/register">Register</NavLink></li>
                        <li><NavLink className="nav-link" to="/login">Login</NavLink></li>                 
                    </ul>
                }
                
            </nav>
    )
}

export default NavBar

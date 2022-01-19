import React, { useEffect, useState } from 'react'
import '../style/NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Service from './Service';

const NavBar = (props) => {
    const navigate = useNavigate()
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
                    navigate('/')
                }else{
                    console.log(res)
                }
            })
            .catch(err=>console.log(err))
        }else{
            alert('Your are in else part')
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
                        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                        <li><NavLink className="nav-link" to="/" onClick={logout}>Logout</NavLink></li>
                        <li><NavLink className="nav-link cart" to="/cart"><ShoppingCartIcon/></NavLink></li>                    
                    </ul>
                    : login.flag !== false && login.role === "seller"?
                    <ul className='nav_list'>
                        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
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

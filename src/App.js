import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Account from './components/Account'
import BuyerAccount from './components/BuyerAccount'
import NavBar from './components/NavBar'

const App = () => {
    
    function Error(){
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
        const errorStyle = {
        err_div:{ 
            border:"1px solid red",
            height:"100vh",
            textAlign:"center",
            margin:"0px auto"
        }
        }
        return (
            <React.Fragment>
                <NavBar flag={login.flag} role={login.role}  />
                <div style={errorStyle.err_div} >
                    <h2 className='w-50 mx-auto p-4'>Page Not Found.... 👎 </h2>
                </div>
            </React.Fragment>)
    }

    return (
        <React.Fragment>
            {/*
                login.flag !== false && login.role === 'buyer' ?
                <Routes>
                    <Route path="/productpage" element={<ProductPage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/profile" element={<BuyerAccount/>}/>
                    <Route path="*" element={<Error/>} />
                </Routes>
                : login.flag !== false && login.role === 'seller'?
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/productpage" element={<ProductPage/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="*" element={<Error/>} />
                </Routes>
                : 
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/productpage" element={<ProductPage/>}/>
                    <Route path="*" element={<Error/>} />
                </Routes>
            */}
            {<Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/productpage" element={<ProductPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/profile" element={<BuyerAccount/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>}
            <Footer/>
        </React.Fragment>
    )
}

export default App

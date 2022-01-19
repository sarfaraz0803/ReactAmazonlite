import React from 'react'
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

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/productpage" element={<ProductPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/profile" element={<BuyerAccount/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    )
}

export default App

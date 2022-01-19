import React, { useState, useEffect} from 'react'
import Product from './Product'
import '../style/ProductPage.css'
import NavBar from './NavBar'

const ProductPage = () => {
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
        <section className='product_section'>
            <div className="searchbar_div">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </div>
            <div className='all_products'>
                <div className='products_list'>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                    <div className='product_card'>
                        <Product/>
                    </div>
                </div>
            </div>  
        
        </section>
        </React.Fragment>
    )
}

export default ProductPage

import React, { useState, useEffect} from 'react'
import Product from './Product'
import '../style/ProductPage.css'
import NavBar from './NavBar'
import Service from './Service'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({flag:false, role:""}) 
    const [productsList,setProductsList] = useState([])
    const [searchPro,setSearchPro] = useState("")
    
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
        function loadProducts(){
            Service.getAllProducts()
            .then(res=>{
                setProductsList(()=>res.data)
            })
            .catch(err=>console.log(err))
        }
        loadProducts()
    },[])


    function addToCartFunc(name,selEmail){
        if(login.flag === false || login.role === ""){
            navigate('/login')
        }else if(login.role === 'buyer' && login.flag === true){
            Service.addProductToCart(name,selEmail)
            .then(res=>{
                if(res.data === 'Product Added'){
                    alert('Product Added')
                }else if(res.data === 'Product not exist'){
                    alert('Product not exist')
                }else if(res.data === 'Email Not Exist'){
                    alert('Email Not Exist')
                }else{
                    console.log(res.data)
                }
            })
            .catch(err=>console.log(err))
        }else if(login.role === 'seller' && login.flag === true){
            alert('Please create buyer account to add product into your cart')
        }else{
            console.log(name,selEmail)
        }
        
    }

    function searchProduct(e){
        e.preventDefault()
        if(searchPro !== ""){
            Service.getProByName(searchPro)
            .then(res=>{
            if(res.data === 'No Product'){
                alert('No Product Found')
            }else{
                setProductsList(()=>res.data)
            }
            })
            .catch(err=>console.log(err))
        }else{
            Service.getAllProducts()
            .then(res=>{
                setProductsList(()=>res.data)
            })
            .catch(err=>console.log(err))
        }
    }
    
    return (
        <React.Fragment>
        <NavBar flag={login.flag} role={login.role} />
        <section className='product_section'>
            <div className="searchbar_div">
                <form className="d-flex" onSubmit={searchProduct}>
                    <input className="form-control me-2" type="search" placeholder="Search Product By Name" aria-label="Search" onChange={(e)=>{setSearchPro(e.target.value)}} value={searchPro}/>
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </div>
            <div className='all_products'>
                <div className='products_list'>
                    {
                        productsList.map((val,ind)=>{
                            return(
                                <div className='product_card' key={ind}>
                                    <Product name={val.name} price={val.price} description={val.description} image={val.image} doCart={()=>{addToCartFunc(val.name,val.sellerEmail)}}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>  
        
        </section>
        </React.Fragment>
    )
}

export default ProductPage

import React, { useEffect, useState } from 'react'
import '../style/Cart.css'
import NavBar from './NavBar'
import Service from './Service'

const Cart = () => {
    const [buyerCart,setBuyerCart] = useState({cartTotal:0.0, productList:[]})

    useEffect(()=>{        
        Service.getBuyerCart()
        .then(res=>{
            setBuyerCart((preValue)=>{return{ ...preValue,cartTotal:res.data.cartTotal,productList:res.data.productList}})
            localStorage.setItem('cartTotal',JSON.stringify(res.data.cartTotal))
        })
        .catch(err=>console.log(err))
    },[])
    
    
    

    

    // Function for Buyer Checkout
    function checkOut(e){
        e.preventDefault()
        Service.buyerCheckout()
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

    // Function for removing the product from the cart
    function removeFromCart(pName,pSeller){
        Service.removeProFromCart(pName,pSeller)
        .then(res=>{
            if(res.data === 'Deleted'){
                alert('Product Removed')
                window.location.assign('/cart')
            }else{
                console.log(res)
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <React.Fragment>
        <NavBar flag={true} role={'buyer'} />
        <section className='cart_section'>
            <div className='heading_div mx-auto'>
                <h2 className='cart_heading'> Your Cart</h2>
            </div>
            <div className='checkout_list'>
                <div className='pro_list'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                buyerCart.productList.map((val,ind)=>{
                                    return(
                                        <tr className='pro_row' key={ind}>
                                            <th scope="row">{ind+1}</th>
                                            <td>
                                                <div className='pro_image'>
                                                    <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                                </div>
                                            </td>
                                            <td>{val.name}</td>
                                            <td>{val.category}</td>
                                            <td>{val.price}</td>
                                            <td><button className='btn btn-danger' onClick={()=>removeFromCart(val.name ,val.sellerEmail)}>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='checkout_footer'>
                <div className='checkout_buttons container'>
                    <form className="d-flex" onSubmit={checkOut}>
                        <h5> Total : {buyerCart.cartTotal}</h5>                        
                        <button className="btn btn-success" type="submit">Checkout</button>
                    </form>
                </div>
            </div>            
        </section>
        </React.Fragment>
    )
}

export default Cart

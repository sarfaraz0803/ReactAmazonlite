import React from 'react'
import '../style/Cart.css'
import NavBar from './NavBar'

const Cart = () => {
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
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                            <tr className='pro_row'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='pro_image'>
                                        <img src="https://picsum.photos/seed/picsum/200/300" alt="productImage" />
                                    </div>
                                </td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='checkout_footer'>
                <div className='checkout_buttons container'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" name='checkout' placeholder="Your Cart Total" aria-label="Checkout"/>
                        <button className="btn btn-success" type="submit">Checkout</button>
                    </form>
                </div>
            </div>            
        </section>
        </React.Fragment>
    )
}

export default Cart

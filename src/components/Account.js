import React, { useEffect, useState } from 'react'
import '../style/Account.css'
import { Modal, Form, Button } from 'react-bootstrap'
import NavBar from './NavBar'
import Service from './Service'

const Account = () => {
    const [updateAccModal, setUpdateAccModal] = useState(false)   // Update Seller Account Modal Handler
    const [addProModal, setAddProModal] = useState(false)   // Add Product Modal Handler
    const [deleteProductModal, setDeleteProductModal] = useState(false) // Delete Product Modal Handler
    const [selAcc, setSelAcc] = useState({id:"",email:"",password:"",name:"",city:"",district:"",state:"",pinCode:"",mobile:""})
    const [addProduct, setAddProduct] = useState({name:"",price:"",category:"",description:""})
    const [proImage,setProImage] = useState([])
    const [delPro,setDelPro] = useState({proName:""})
    const [selPros, setSelPros] = useState([])
    

    useEffect(()=>{
        function defaults(){
            const store = JSON.parse(localStorage.getItem('SellerCredentials')) // for storing password from frontend
            Service.loggedSeller()
            .then(res=>{
                if(res.data === 'Email Not Exist'){
                    alert('Email Not Exist')
                }else{
                    setSelAcc((preValue)=>{return {...preValue,id:res.data._id,email:res.data.email,password:store.password,name:res.data.name,city:res.data.city,district:res.data.district,
                        state:res.data.state,pinCode:res.data.pinCode,mobile:res.data.mobile}})
                }
            })
            .catch(err=>console.log(err))

            Service.myProducts()
            .then(res=>{
                if(res.data === 'No Products'){
                    setSelPros(()=>[])
                }else{
                    setSelPros(()=>res.data)
                }
            })
            .catch(err=>console.log(err))
        }
        defaults()
    },[])

    function updateInputHandler(e){
        const {name,value} = e.target
        setSelAcc((preValue)=>{return {...preValue, [name]:value}})
    }

    function addProInputHandler(e){
        const {name,value} = e.target
        setAddProduct((preValue)=>{return {...preValue,[name]:value}})
    }

    function delProInputHandler(e){
        const {name,value} = e.target
        setDelPro((preValue)=>{return {...preValue,[name]:value}})
    }

    function proImageHandler(e){
        setProImage(e.target.files[0])
    }

    function updateSubmitHandler(e){
        e.preventDefault()
        const updateData = {email:selAcc.email,password:selAcc.password,name:selAcc.name,city:selAcc.city,district:selAcc.district,state:selAcc.state,pinCode:selAcc.pinCode,mobile:selAcc.mobile}
        Service.sellerUpdateAccount(updateData)
        .then(res=>{
            if(res.data === 'Successfully Updated'){
                alert("Successfully Updated")
                setUpdateAccModal(false)
            }else{
                console.log(res)
            }
        })
        .catch(err=>console.log(err))
    }

    function addProSubmitHandler(e){
        e.preventDefault()        
        const sellerProduct = {name:addProduct.name,price:addProduct.price,categroy:addProduct.category,description:addProduct.description}
        let formData = new FormData()
        formData.append("Image",proImage)
        formData.append("name",sellerProduct.name)
        formData.append("price",sellerProduct.price)
        formData.append("category",sellerProduct.category)
        formData.append("description",sellerProduct.description)
        Service.addProductSeller(formData)
        .then(res=>{
            if(res.data === 'Successfully Added'){
                alert('Successfully Added')
                window.location.assign('/account')
            }else if(res.data === 'Product exist'){
                alert('Product exist')
            }else{
                console.log(res.data)
            }
        })
        .catch(err=>console.log(err))
        setAddProModal(false)
    }

    function deleteSubmitHandler(e){
        e.preventDefault()
        Service.deleteProduct(delPro.proName)
        .then(res=>{
            if(res.data === 'Product Not Exist'){
                alert('Product Not Exist')
                setDeleteProductModal(false)
            }else if(res.data === 'Deleted'){
                alert('Product Deleted')
                setDeleteProductModal(false)
            }else{
                console.log(res.data)
                setDeleteProductModal(false)
            }
        })
        .catch(err=>console.log(err))
    }

    function delProOnClick(proName){
        Service.deleteProduct(proName)
        .then(res=>{
            if(res.data === 'Deleted'){
                alert('Product Deleted')
                window.location.assign('/account')
            }else{
                console.log(res.data)
            }
        })
        .catch(err=>console.log(err))
    }


    
    

    return (
        <React.Fragment>
        <NavBar flag={true} role={'seller'} />


        {/*----------Update_Seller_Account_Modal------------- */}

        <Modal show={updateAccModal} size='lg' onHide={()=>{setUpdateAccModal(false)}} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
            <Modal.Title>Update Your Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Form*/}  
                <Form onSubmit={updateSubmitHandler} method='POST'>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" name='email' onChange={updateInputHandler} value={selAcc.email} readOnly />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your New Password" name='password' onChange={updateInputHandler} value={selAcc.password} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name='name' title='Your Name' onChange={updateInputHandler} value={selAcc.name} required />                    
                    </Form.Group>                    
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City Name" name='city' onChange={updateInputHandler} value={selAcc.city} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="district">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your District Name" name='district' onChange={updateInputHandler} value={selAcc.district} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your State Name" name='state' onChange={updateInputHandler} value={selAcc.state} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pinCode">
                        <Form.Label>PinCode</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your City Pincode" name='pinCode' onChange={updateInputHandler} value={selAcc.pinCode} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Contact Number" name='mobile' onChange={updateInputHandler} value={selAcc.mobile} required />
                    </Form.Group>
                    
                    <Button className='mx-2' variant="primary" type="submit">Submit</Button>
                    <Button className='mx-2' variant="secondary" onClick={()=>{setUpdateAccModal(false)}}>Close</Button>
                </Form>
            </Modal.Body>
            
        </Modal>


        {/*----------Add_Product_Modal------------- */}

        <Modal show={addProModal} size='lg' onHide={()=>{setAddProModal(false)}} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Form*/}  
                <Form onSubmit={addProSubmitHandler} method='POST' encType='multipart/form-data'>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" name='name' onChange={addProInputHandler} value={addProduct.name} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Price" name='price' onChange={addProInputHandler} value={addProduct.price} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Category" name='category' onChange={addProInputHandler} value={addProduct.category} required />                    
                    </Form.Group>                    
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Enter Description Here' name='description' onChange={addProInputHandler} value={addProduct.description} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" name='image' onChange={proImageHandler} required />                    
                    </Form.Group>
                    
                    <Button className='mx-2' variant="primary" type="submit">Submit</Button>
                    <Button className='mx-2' variant="secondary" onClick={()=>{setAddProModal(false)}}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>

        {/*----------Delete_Product_Modal------------- */}

        <Modal show={deleteProductModal} onHide={()=>{setDeleteProductModal(false)}} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Form*/}
                <Form onSubmit={deleteSubmitHandler} method='POST'>
                    <Form.Group className="mb-3" controlId="proName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" name='proName' onChange={delProInputHandler} value={delPro.proName} />                    
                    </Form.Group>
                    <Button className='mx-2' variant="primary" type="submit">Submit</Button>
                    <Button className='mx-2' variant="secondary" onClick={()=>{setDeleteProductModal(false)}}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>




        {/*----------------------------------REACT_JSX----------------------------------*/}

        <section className='whole_section'>

            <header className="ScriptHeader ">        
                <div className="col-rt-12 mx-auto border border-light">
                    <div className="rt-heading text-center">
                        <h1> Seller Account</h1>
                    </div>
                </div>
            </header>        

            <section className='account_section'>
            <div className="rt-container">
                <div className="col-rt-12">
                <div className="Scriptcontent">
                <div className="student-profile py-4">
                <div className="container">
                    {/* First_Row */}
                    <div className="row mx-auto first_row">
                    <div className="col-lg-4 mb-1">
                        <div className="card shadow-sm" style={{height:"100%"}}>
                        <div className="card-header bg-transparent text-center">
                            <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
                            <h3>{selAcc.name}</h3>
                        </div>
                        <div className="card-body row_first_card">
                            <button className='btn btn-success' onClick={()=>{setAddProModal(true)}}>Add Product</button>
                            <button className='btn btn-danger' onClick={()=>{setDeleteProductModal(true)}}>Delete Product</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card shadow-sm gen_info_card">
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-2">General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <table className="table table-bordered">
                                <tbody>
                                <tr><th width="30%">Name</th><td width="2%">:</td><td>{selAcc.name}</td></tr>
                                <tr><th width="30%">Email</th><td width="2%">:</td><td>{selAcc.email}</td></tr>
                                <tr><th width="30%">Mobile</th><td width="2%">:</td><td>{selAcc.mobile}</td></tr>
                                <tr><th width="30%">City</th><td width="2%">:</td><td>{selAcc.city}</td></tr>
                                <tr><th width="30%">District</th><td width="2%">:</td><td>{selAcc.district}</td></tr>
                                <tr><th width="30%">State</th><td width="2%">:</td><td>{selAcc.state}</td></tr>
                                <tr><th width="30%">PinCode</th><td width="2%">:</td><td>{selAcc.pinCode}</td></tr>
                                </tbody>
                            </table>
                            <div className='gen_button'>
                                <button className='btn btn-success mx-auto' onClick={()=>{setUpdateAccModal(true)}}>Update Profile</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Second_Row */}
                    <div className="row mx-auto second_row">
                        <div className="card shadow-sm my-1">
                        <div className="card-header bg-transparent border-0 text-center">
                            <h2 className="my-2">Your Products</h2>
                        </div>
                        <hr />
                        <div className="card-body pt-0">

                            {
                                selPros.map((val,ind)=>{
                                    return(
                                        <div className="sel_cards" key={ind}>
                                            <div className="sel_card">
                                                <img src={val.image} alt="mypic" className="sel_card_img"/>
                                                <div className="sel_card_info">
                                                    <h4 className="sel_card_title">Name : {val.name}</h4>
                                                    <h5 className="sel_card_price">Price : {val.price}</h5>                                                    
                                                    <button onClick={()=>{delProOnClick(val.name)}}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        </div>
                    </div>
                </div>  
                </div>
                </div>
                </div>
                </div>
            </section>
        </section>
        </React.Fragment>
    
    )
}

export default Account

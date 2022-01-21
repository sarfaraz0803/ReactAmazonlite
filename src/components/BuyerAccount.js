import React, { useEffect, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import '../style/BuyerAccount.css'
import NavBar from './NavBar'
import Service from './Service'

const BuyerAccount = () => {
    const [updateAccModal, setUpdateAccModal] = useState(false)   // Update Buyer Account Modal Handler
    const [buyAcc,setBuyAcc] = useState({id:"",email:"",password:"",name:"",city:"",district:"",state:"",pinCode:"",mobile:""})

    useEffect(()=>{
        function defaults(){
            const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
            Service.loggedBuyer()
            .then(res=>{
                if(res.data === 'Email Not Exist'){
                    alert('Email Not Exist')
                }else{                    
                    setBuyAcc((preValue)=>{return {...preValue,id:res.data._id,email:res.data.email,password:store.password,name:res.data.name,city:res.data.city,district:res.data.district,
                        state:res.data.state,pinCode:res.data.pinCode,mobile:res.data.mobile}})                    
                }
            })
            .catch(err=>console.log(err))
        }
        defaults()
    },[])

    function updateInputHandler(e){
        const {name,value} = e.target
        setBuyAcc((preValue)=>{return {...preValue, [name]:value}})
    }

    function updateSubmitHandler(e){
        e.preventDefault()
        const updateData = {email:buyAcc.email, password:buyAcc.password, name:buyAcc.name, city:buyAcc.city, district:buyAcc.district, state:buyAcc.state,
            pinCode:buyAcc.pinCode, mobile:buyAcc.mobile}
        Service.updateBuyerAccount(updateData)
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

    return (
        <React.Fragment>
        <NavBar flag={true} role={'buyer'} />

        {/*----------Update_Buyer_Account_Modal------------- */}

        <Modal show={updateAccModal} size='lg' onHide={()=>{setUpdateAccModal(false)}} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
            <Modal.Title>Update Your Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Form*/}  
                <Form onSubmit={updateSubmitHandler}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" name='email' onChange={updateInputHandler} value={buyAcc.email} readOnly />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your New Password" name='password' onChange={updateInputHandler} value={buyAcc.password} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name='name' title='Your Name' onChange={updateInputHandler} value={buyAcc.name} required />                    
                    </Form.Group>                    
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City Name" name='city' onChange={updateInputHandler} value={buyAcc.city} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="district">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your District Name" name='district' onChange={updateInputHandler} value={buyAcc.district} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your State Name" name='state' onChange={updateInputHandler} value={buyAcc.state} required />                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pinCode">
                        <Form.Label>PinCode</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your City Pincode" name='pinCode' onChange={updateInputHandler} value={buyAcc.pinCode} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Contact Number" name='mobile' onChange={updateInputHandler} value={buyAcc.mobile} required />
                    </Form.Group>
                    
                    <Button className='mx-2' variant="primary" type="submit">Submit</Button>
                    <Button className='mx-2' variant="secondary" onClick={()=>{setUpdateAccModal(false)}}>Close</Button>
                </Form>
            </Modal.Body>
            
        </Modal>

        
        {/*----------------------------------REACT_JSX----------------------------------*/}



        <section className='buyer_section'>

            <header className="ScriptHeader ">        
                <div className="col-rt-12 mx-auto border border-light">
                    <div className="rt-heading text-center">
                        <h1>Your Profile</h1>
                    </div>
                </div>
            </header>
        

            <section className='profile_section'>
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
                            <h3>{buyAcc.name}</h3>
                        </div>
                        <div className="card-body row_first_card">
                            <button className='btn btn-success' onClick={()=>{setUpdateAccModal(true)}}>Update Account</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card shadow-sm empDetail">
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-2">General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <table className="table table-bordered">
                                <tbody>
                                <tr><th width="30%">Name</th><td width="2%">:</td><td>{buyAcc.name}</td></tr>
                                <tr><th width="30%">Email</th><td width="2%">:</td><td>{buyAcc.email}</td></tr>
                                <tr><th width="30%">City</th><td width="2%">:</td><td>{buyAcc.city}</td></tr>
                                <tr><th width="30%">District</th><td width="2%">:</td><td>{buyAcc.district}</td></tr>
                                <tr><th width="30%">State</th><td width="2%">:</td><td>{buyAcc.state}</td></tr>
                                <tr><th width="30%">Pincode</th><td width="2%">:</td><td>{buyAcc.pinCode}</td></tr>
                                <tr><th width="30%">Mobile</th><td width="2%">:</td><td>{buyAcc.mobile}</td></tr>
                                </tbody>
                            </table>
                        </div>
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

export default BuyerAccount

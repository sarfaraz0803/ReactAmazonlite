import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Register.css'
import NavBar from './NavBar'
import Service from './Service'

const Register = () => {
    const navigate = useNavigate()
    const[registerDetail,setRegisterDetail] = useState({email:"",password:"",cnfrmpass:"",name:"",mobile:"",role:""})


    const inputHandler = (e) => {
       const{name, value} = e.target
       setRegisterDetail((preValue)=>{return {...preValue,[name]:value}})       
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const registerData = {email:registerDetail.email, password:registerDetail.password, name:registerDetail.name, mobile:registerDetail.mobile}
        if(registerDetail.email === "" || registerDetail.password === "" || registerDetail.cnfrmpass === "" || registerDetail.name === "" || registerDetail.mobile === "" || registerDetail.role === ""){
            alert('Please Fill All fields')
        }else if(registerDetail.password !== registerDetail.cnfrmpass){
            alert('Password not matching')
        }else if(registerDetail.role === 'seller'){
            Service.sellerRegister(registerData)
            .then(res=>{
                if(res.data === 'Email Already Exist'){
                    alert('Email Already Exist')
                }else if(res.data === 'Successfully Registered'){
                    setRegisterDetail((preValue)=>{return {...preValue,email:"",password:"",cnfrmpass:"",name:"",mobile:"",role:""}})
                    alert('Successfully Registered')
                    navigate('/login')                    
                }else{
                    console.log(res)
                }
            })
            .catch(err=>console.log(err))
        }else if(registerDetail.role === 'buyer'){
            Service.registerBuyer(registerData)
            .then(res=>{
                if(res.data === 'Successfully Registered'){
                    setRegisterDetail((preValue)=>{return {...preValue,email:"",password:"",cnfrmpass:"",name:"",mobile:"",role:""}})
                    alert('Successfully Registered')
                    navigate('/login')
                }else if(res.data === 'This email already registered'){
                    alert('This email already registered')
                }else{
                    console.log(res.data);
                }
            })
            .catch(err=>console.log(err))
        }else{
            alert('who you are')
        }
   }

    return (
        <React.Fragment>
        <NavBar/>   
        <section className='register_section'>
            <div className="register_main">
                <div className="register_div form-group">

                    <h3 className='register_heading my-2'>Register</h3>

                    <form className='register_form mx-auto my-3' onSubmit={formSubmitHandler}>
                        <input type="email" name='email' className='form-control' placeholder='Enter email' title='Please use valid email' value={registerDetail.email} onChange={inputHandler}/>
                        <input type="password" name='password' className='form-control my-2' placeholder='Enter password' title='Use strong password' value={registerDetail.password} onChange={inputHandler}/>
                        <input type="password" name='cnfrmpass' className='form-control my-2' placeholder='Confirm password' title='Use strong password' value={registerDetail.cnfrmpass} onChange={inputHandler}/>
                        <input type="text" name='name' className='form-control my-2' placeholder='Enter your fullname' title='Put your name' value={registerDetail.name} onChange={inputHandler}/>
                        <input type="number" name='mobile' className='form-control my-2' placeholder='Enter your mobile number' title='Enter valid mobile number' value={registerDetail.mobile} onChange={inputHandler}/>
                        <select name="role" id="role" className='form-control' onChange={inputHandler}>
                            <option value="">Please Select Role</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        <br />
                        <button className='register_button btn btn-success' type='submit'>Register</button>
                    </form>

                </div> 
            </div>
        </section>
        </React.Fragment>
    )
}

export default Register

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Login.css'
import NavBar from './NavBar'
import Service from './Service'

const Login = () => {
    let navigate = useNavigate()
    const[loginDetail, setLoginDetail] = useState({userEmail:"",userPassword:"",userRole:""})


   const inputHandler = (e) => {
       const{name, value} = e.target
       setLoginDetail((preValue)=>{return {...preValue,[name]:value}})
   }

   const formSubmitHandler = (e) => {
       e.preventDefault()
       const loginData = {email:loginDetail.userEmail, password:loginDetail.userPassword}
       if(loginDetail.userEmail === "" || loginDetail.userPassword === "" || loginDetail.userRole === ""){
            alert('Please Fill All fields')
        }else if(loginDetail.userRole === 'seller'){
            Service.sellerLogin(loginData)
            .then(res=>{
                if(res.data === 'email not registered'){
                    alert("Email is not Registered")
                }else if(res.data === 'wrong password'){
                    alert("Wrong Password")
                }
                else{
                    localStorage.setItem('SellerCredentials',JSON.stringify({email:loginData.email,password:loginData.password,token:res.data.token}))
                    localStorage.setItem('loggedUser',JSON.stringify({flag:true,role:'seller'}))
                    navigate('/account')
                }
            })
            .catch(err=>alert(err))
        }else if(loginDetail.userRole === 'buyer'){
            Service.buyerLogin(loginData)
            .then(res=>{
                if(res.data === 'Email Not Exist'){
                    alert('Email Not Exist')
                }else if(res.data === 'Wrong Password'){
                    alert('Wrong Password')
                }else{
                    localStorage.setItem('BuyerCredentials',JSON.stringify({email:loginData.email,password:loginData.password,token:res.data.token}))
                    localStorage.setItem('loggedUser',JSON.stringify({flag:true,role:'buyer'}))
                    navigate('/productpage')
                }
            })
            .catch(err=>console.log(err))
        }else{
            console.log(loginData)
            navigate('/')
        }
   }


    return (
        <React.Fragment>
        <NavBar />
        <section className='login_section'>
            <div className="login_main">
                <div className="login_div form-group">

                    <h3 className='login_heading my-2'>Login</h3>

                    <form className='login_form mx-auto my-3' onSubmit={formSubmitHandler}>
                        <input type="email" name='userEmail' className='form-control' placeholder='Enter email' value={loginDetail.userEmail} onChange={inputHandler}/>
                        <input type="password" name='userPassword' className='form-control my-2' placeholder='Enter Password' value={loginDetail.userPassword} onChange={inputHandler}/>
                        <select name="userRole" id="role" className='form-control' onChange={inputHandler}>
                            <option value="">Please Select Role</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        <br />
                        <button className='login_button btn btn-success' type='submit'>Login</button>
                    </form>

                </div> 
            </div>
        </section>
        </React.Fragment>
    )
}

export default Login

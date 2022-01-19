import React from 'react'
import '../style/BuyerAccount.css'
import NavBar from './NavBar'

const BuyerAccount = () => {
    return (
        <React.Fragment>
        <NavBar flag={true} role={'buyer'} />
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
                            <h3>Buyer Name</h3>
                        </div>
                        <div className="card-body row_first_card">
                            <button className='btn btn-success'>Update Account</button>
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
                                <tr><th width="30%">Name</th><td width="2%">:</td><td>BuyerName</td></tr>
                                <tr><th width="30%">Email</th><td width="2%">:</td><td>BuyerEmail</td></tr>
                                <tr><th width="30%">Mobile</th><td width="2%">:</td><td>BuyerMobile</td></tr>
                                <tr><th width="30%">City</th><td width="2%">:</td><td>City</td></tr>
                                <tr><th width="30%">District</th><td width="2%">:</td><td>District</td></tr>
                                <tr><th width="30%">State</th><td width="2%">:</td><td>State</td></tr>
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

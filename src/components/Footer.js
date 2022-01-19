import React from 'react'
import "../style/Footer.css"
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className='footer'>
                <div className='footer_container'>
                    <div className="footer_row">
                        <div className="footer_col">
                            <h4>Company</h4>
                            <ul>
                                <li><NavLink className="nav-link" to="">About Us</NavLink></li>
                                <li><NavLink className="nav-link" to="">Services</NavLink></li>
                                <li><NavLink className="nav-link" to="">Privacy Policy</NavLink></li>
                                <li><NavLink className="nav-link" to="">Affiliate Programs</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><NavLink className="nav-link" to="">Shipping</NavLink></li>
                                <li><NavLink className="nav-link" to="">Orders</NavLink></li>
                                <li><NavLink className="nav-link" to="">Payments</NavLink></li>
                                <li><NavLink className="nav-link" to="">Returns</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h4>Our Products</h4>
                            <ul>
                                <li><NavLink className="nav-link" to="">Appliances</NavLink></li>
                                <li><NavLink className="nav-link" to="">Dress</NavLink></li>
                                <li><NavLink className="nav-link" to="">Gadgets</NavLink></li>
                                <li><NavLink className="nav-link" to="">Others</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h4>Follow Us</h4>
                            <div className='social_links'>
                                <NavLink className='nav-link' to=""><FacebookIcon/></NavLink>
                                <NavLink className='nav-link' to=""><TwitterIcon/></NavLink>
                                <NavLink className='nav-link' to=""><InstagramIcon/></NavLink>
                                <NavLink className='nav-link' to=""><LinkedInIcon/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border border-light'/>
                <div className='footer_copyright'>
                    <h5>All Right Reserved 2022</h5>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer

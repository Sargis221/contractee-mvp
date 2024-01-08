import "./style.css";
import {PrimaryButton, SecondaryButton} from "../../components/button/Button";
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import {useAuth} from "../../context/AuthContext";
import ProfileDropdown from "../../components/profiledropdown/ProfileDropdown";

function Header() {

    const {isAuthenticated} = useAuth()

    return (
        <div className="L-header-main">
            <div className="L-head">
                <div className="L-header-name">
                <div className="L-head-logo" style={{backgroundImage: `url(${logo})`}}/>
                    <NavLink to='/'><span className="L-header-name-t">Contractee</span></NavLink>
                </div>
                <div className="topnav">
                    <NavLink className='navlink' to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/contact' className='navlink'>
                        Contact
                    </NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">Solutions
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink className='navlink' to='/upload'>
                                Risk Assessment
                            </NavLink>
                            <NavLink className='navlink' to='/upload'>
                                Task Assignment
                            </NavLink>
                            <NavLink className='navlink disabled' to=''>
                                Drafting Tool
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to='about' className='navlink'>
                        About us
                    </NavLink>
                    {isAuthenticated ? (
                        <ProfileDropdown />
                    ) : (
                        <>
                            <PrimaryButton route='/signup' text="Get Started"/>
                            <SecondaryButton route='/signin' text="Sign In"/>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header
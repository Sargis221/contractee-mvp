import "./style.css"
import { NavLink } from 'react-router-dom'
function Header(){
    return(
        <div className="L-header-main">
            <div className="L-head">
                <div className="L-header-name">
                    <span className="L-header-name-t">Contractee</span>
                </div>
                <div className="topnav">
                <NavLink className='navlink' to='/'><a className="active">Home</a></NavLink>
                <NavLink to='contact' className='navlink'><a>Contact</a></NavLink>
  <div className="dropdown">
    <button className="dropbtn">Solutions
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <NavLink className='navlinkk' to='risk'><a className="disabled">Risk Assessment</a></NavLink>
      <NavLink className='navlinkk' to='assign'><a className="disabled">Assigning tool</a></NavLink>
      <NavLink className='navlinkk'><a className="disabled">Drafting tool</a></NavLink>
    </div>
  </div>
  <NavLink to='about' className='navlink'><a>About</a></NavLink>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
                </div>
            </div>
        </div>
    )
}
export default Header
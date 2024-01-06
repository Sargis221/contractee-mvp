import "./style.css"
function Footer(){
    return(
        <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-info">
              <h1>Contractee</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="footer-links">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h2>Contact Us</h2>
              <p>Email: info@yourcompany.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    )
}
export default Footer
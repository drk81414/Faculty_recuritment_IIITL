import React from 'react'
import "../css/footer.css"
export default function Footer() {
  return (
    <div>
    <div className="footer">
  <div className="inner-footer">
    <div className="footer-items">
      <h1>IIIT LUCKNOW</h1>
      <p></p>
    </div>


    <div className="footer-items">
      <h3>Quick Links</h3>
      <div className="border1"></div> 
        <ul>
          <a href=""><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Contact us</h3>
      <div className="border1"></div>
        <ul>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i>Vikrant </li>
          <li><i className="fa fa-phone" aria-hidden="true"></i>7439735149</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>vikrant4514@gmail.com </li>
        </ul> 
      

       
    </div>
  </div>
  

  <div className="footer-bottom">
    Copyright &copy; Vikrant.
  </div>
</div>
  

    </div>
  )
}

import React from 'react'
import logo from '../../assets/images/logo.svg'
import icon1 from '../../assets/images/icons/footer-discord.svg'
import icon2 from '../../assets/images/icons/footer-twitter.svg'
import icon3 from '../../assets/images/icons/footer-tiktok.svg'
import icon4 from '../../assets/images/icons/footer-youtube.svg'
import icon5 from '../../assets/images/icons/footer-facebook.svg'


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_main">
          <div className='fm_child1'>
            <img src={logo} className="footer-logo" alt="" />
            <div className=''>
              <div className="menu footer-menu">
                <ul className='list-unstyled'>
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">About Us</a></li>
                  <li><a href="#!">Merch</a></li>
                  <li><a href="#!">Dev Blogs</a></li>
                </ul>
              </div>
              <p className='copy-right-text'>©2021 CC Games - All Rights Reserved </p>
            </div>
          </div>
          <div className='fm_child2'>
            <div>
              <a href="#!"><img src={icon1} alt="" /></a>
              <a href="#!"><img src={icon2} alt="" /></a>
              <a href="#!"><img src={icon3} alt="" /></a>
              <a href="#!"><img src={icon4} alt="" /></a>
              <a href="#!"><img src={icon5} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
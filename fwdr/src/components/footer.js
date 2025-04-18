import  Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import '../style/Footer.css'; 
import { Link } from 'react-router-dom';



function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact-info">
            <h3>Porsche Việt Nam</h3>
            <p>Địa chỉ: 8A TÔN THẤT THUYẾT</p>
            <p>Điện thoại: 0123456789</p>
            <p>Email: nguyenminhha11220055@gmail.com</p>
          </div>
          <div className="footer-section quick-links">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><a href="/aboutme">Về chúng tôi</a></li>
              <li><a href="/order">Sản phẩm</a></li>
              <li><a href="/login">Đăng nhập</a></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h3>Theo dõi chúng tôi</h3>
            <div className="social-icons">
              <a href="[Link Facebook]" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="[Link Twitter]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="[Link Instagram]" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="[Link YouTube]" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Porsche Việt Nam. All Rights Reserved.</p>
          <p><a href="/terms">Điều khoản sử dụng</a> | <a href="/privacy">Chính sách bảo mật</a></p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
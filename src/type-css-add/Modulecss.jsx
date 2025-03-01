import React from 'react'
import styles from './Modstyle.module.css'


const Modulecss = () => {
  return (
      <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h2>CarXpert</h2>
          <p>Your trusted car dealership, offering the best deals and services.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li ><a style={{backgroundColor:"#1a1a1a"}} href="#">Home</a></li>
            <li><a style={{backgroundColor:"#1a1a1a"}} href="#">New Cars</a></li>
            <li><a style={{backgroundColor:"#1a1a1a"}} href="#">Used Cars</a></li>
            <li><a style={{backgroundColor:"#1a1a1a"}} href="#">About Us</a></li>
            <li><a style={{backgroundColor:"#1a1a1a"}} href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: support@carxpert.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Mumbai, India</p>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2025 CarXpert. All Rights Reserved.</p>
    </footer>
  )
}

export default Modulecss

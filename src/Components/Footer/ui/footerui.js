import React from 'react'
import '../assets/footer.css';
import { BackTop } from 'antd';
import { Link } from 'react-router-dom';
import LogoRent from '../../navbar/assets/RentLogo.png';

const AppFooter = () => {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    {/* <i className="fas fa-bolt"></i> */}
                    <Link to="/"><img src={LogoRent} style={{ width: 70 }} alt="logo"></img>
                    </Link>
                </div>
                <ul className="socials">
                    <p style={{ fontWeight: 'bold', marginTop: 10 }}>Follow Us</p>
                    <li><a href="www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="www.pinterest.com"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="copyright"> Copyright &copy; 2021 RentKarao</div>
                <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
        </div>
    );
}

export default AppFooter;
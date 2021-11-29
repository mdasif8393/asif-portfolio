import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div id="footer" style={{backgroundColor: '#18203d', height:"100%", marginTop:"80px", paddingTop:"40px", paddingBottom:"40px"}}>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 text-white p-5">
                <h2 className="text-center">About Me</h2>
                <hr/>
                    <p className="text-center">Myself is a MERN Full-Stack web developer.<br/> I completed several Full Stack Projects by using MERN<br/> and also complete my graduation on CSE from North South University.<br/> Besides Full Stack projects, I have many projects using React, Javascript, HTML, CSS etc.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-white text-center p-5">
                    <h2>Useful Links</h2>
                    <hr/>
                    <a className="footer-hover" style={{textDecoration: 'none', color: 'white'}} target="_blank" href="https://drive.google.com/file/d/1XTx4sviO0OSMkHlUimZZSo0epdPfuxjC/view">Resume</a> <br/>

                    <a style={{textDecoration: 'none', color: 'white'}} target="_blank" href="https://github.com/mdasif8393">GitHub</a> <br/>

                    <a style={{textDecoration: 'none', color: 'white'}} target="_blank" href="https://www.linkedin.com/in/md-asif-zaman/">LinkedIn</a> <br/>

                    <a style={{textDecoration: 'none', color: 'white'}} target="_blank" href="https://www.facebook.com/md.asif.8393">Facebook</a> <br/>
                    <div>
                        <br/>
                            <a className="aboutMe-anchor" target="_blank" href="https://github.com/mdasif8393"><i style={{color:"white"}} className="fab fa-github fa-2x"></i></a>

                            <a className="aboutMe-anchor" target="_blank" href="https://www.linkedin.com/in/md-asif-zaman/"><i style={{color:"white"}} className="fab fa-linkedin fa-2x ms-3"></i></a>

                            <a target="_blank" href="https://www.facebook.com/md.asif.8393/"><i style={{color:"white"}} className="fab fa-facebook fa-2x ms-3"></i></a>

                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-white p-5">
                <h2 className="text-center">Contact Me</h2>
                <hr/>
                    <p className="text-center"><i class="fas fa-map-marker-alt fa-lg"></i> Address: Bashundhara R/A, Dhaka</p>
                    <p className="text-center"><i class="far fa-envelope-open fa-lg"></i> Email: md.asif.8393@gmail.com</p>
                    <p className="text-center"><i class="fas fa-mobile-alt fa-lg"></i> Phone: +88 01784248413</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
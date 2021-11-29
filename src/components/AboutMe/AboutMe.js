import React from 'react';
import './AboutMe.css'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
const AboutMe = () => {
    return (
        <div className="container-fluid" style={{marginTop:'60px'}}>
            <ParticlesBg color="#7510f7" type="cobweb"  bg={true} />
            <div className="row d-flex align-items-center">

                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end" style={{marginLeft:'-20px'}}>
                    <div>
                        <h1>Hello! Myself <span ></span>Asif Zaman</h1>
                        <h4>I'm a 
                        <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            ' Full Stack Web Developer (MERN)',
                            1000,
                            ' React Front End Web Developer',
                            1000,
                            ' React '
                        ]}
                    />
                        </h4>
                        <div>
                            <a className="aboutMe-anchor" target="_blank" href="https://github.com/mdasif8393"><i style={{color:"black"}} className="fab fa-github fa-2x"></i></a>

                            <a className="aboutMe-anchor" target="_blank" href="https://www.linkedin.com/in/md-asif-zaman/"><i style={{color:"black"}} className="fab fa-linkedin fa-2x ms-3"></i></a>

                            <a target="_blank" href="https://www.facebook.com/md.asif.8393/"><i style={{color:"black"}} className="fab fa-facebook fa-2x ms-3"></i></a>

                        </div>
                        
                        <div>
                            <a target="_blank" href='https://drive.google.com/file/d/1XTx4sviO0OSMkHlUimZZSo0epdPfuxjC/view?usp=sharing' download> <br/>
                                <button className="glow-on-hover text-center">Resume</button>
                            </a>
                        </div>

                        
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height:'600px', width:'600px' }} className="img-fluid" src="https://i.ibb.co/Fq5zM6H/Asif-removebg-50-1-50-modified.png" alt=""></img>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
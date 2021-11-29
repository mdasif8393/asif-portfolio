import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'
const Projects = () => {
    return (
        <div id="projects" style={{marginTop: '80px'}}>
            <div style={{backgroundColor: 'rgb(117, 16, 247)', height: '450px' , paddingTop: '40px'}}>
                <div className="text-center text-white">
                    <h1>My projects</h1>
                    <hr></hr>
                    <h6>Most of my projects are created by MERN<br/>
                        But there are also many projects created by HTML, CSS, Javascript
                    </h6>
                </div>
            </div>

            <div>
            <div className="row d-flex align-items-center justify-content-center"  style={{marginTop: '-200px'}}> 
                <div className="project-image-container col-lg-4 col-md-4 col-sm-12 m-5 border-primary">
                    <img className="img-fluid " src="https://i.ibb.co/Xkdvnpr/rsz-1rsz-2fancy-bike.png" alt="" />
                    <p className="title">Fancy Bikes<br/></p>
                    <div className="overlay"></div>
                    <div className="button">
                        <h4 style={{color:'white'}}>Full-Stack bike selling website with fully functional Admin panel activity</h4> <br/>
                        <Link to="/fancy-bikes">See More</Link>
                    </div>
                </div>
                <div className="project-image-container col-lg-4 col-md-4 col-sm-12 ms-3 m-5">
                    <img className="img-fluid " src="https://i.ibb.co/pWGDP7V/rsz-1rsz-1travelling-is-fun.png" alt="" />
                    <p className="title">Travelling is Fun</p>
                    <div className="overlay"></div>
                    <div className="button">
                        <h4 style={{color:'white'}}>Travelling is Fun is a full-stack travel agency website</h4> <br/>
                        <Link to="/travelling-is-fun">See More</Link>
                    </div>
                </div>
                <div className="project-image-container col-lg-4 col-md-4 col-sm-12 ms-3 m-5">
                    <img className="img-fluid " src="https://i.ibb.co/K7SL3Bp/rsz-1screenshot-doctorsofkhulnacitynetlifyapp-20211129-00-51-17.png" alt="" />
                    <p className="title">Doctors of Khulna</p>
                    <div className="overlay"></div>
                    <div className="button">
                    <h4  style={{color:'white'}}>Created the site so that a patient can easily find doctors as his/her query</h4> <br/>
                    <Link to="/doctors-of-khulna-city">See More</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;
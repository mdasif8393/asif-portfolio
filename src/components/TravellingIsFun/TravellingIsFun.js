import React from 'react';
import './TravellingIsFun.css'

const TravellingIsFun = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center"style={{color:'#7510f7'}}>Travelling is Fun</h1>
            
            <div className="row mt-5">
                <div className="col-md-3 col-sm-12">
                    <div>
                        <h3 style={{color:'#7510f7'}}>Summary</h3>
                        <ul>
                            <h6><li>User can see tour details with price, time, location</li></h6>
                            <h6><li>User can book a tour by providing his/her details information</li></h6>
                            <h6><li>User can cancel his/her tour when tour status is pending</li></h6>
                            <h6><li>Admin can delete a user and update user tour status confirm from pending</li></h6>
                            <h6><li>Admin can also add a new tour plan which will show in Home page</li></h6>
                            <h6><li>Logging in using Google is mandatory to see all functionality</li></h6>
                        </ul>
                    </div>


                    <div>
                        <h3 style={{color:'#7510f7'}}>Tools</h3>
                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/8zNTVWK/mongodb.jpg" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/LkPB886/font-awesome.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/cx5SXwk/Ekran-Resmi-2019-11-18-18-08-13.png" alt=""></img>
                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/rF9xDNB/axios.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/G3w8xdW/bootstrap.jpg" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/3r3HgCH/dot-env.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/Cz79gS1/express.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/jMTGf4D/firebase.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/ZJQcH5W/hook-form.png" alt=""></img>

                        
                    </div>

                    <div>
                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://travelling-is-fun.web.app/" style={{textDecoration: 'none', color: 'white'}}>Website Link</a></button>

                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://github.com/mdasif8393/tourism-or-delivery-website-client" style={{textDecoration: 'none', color: 'white'}}>Client Side Code</a></button>
                        
                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://github.com/mdasif8393/tourism-or-delivery-website-server" style={{textDecoration: 'none', color: 'white'}}>Server Side Code</a></button>
                    </div>

                </div>
                <div className="col-md-9 col-sm-12 "style={{backgroundColor:"#f9f9f9", padding:"50px"}}>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <img src="https://i.ibb.co/1dryDyG/screenshot-travelling-is-fun-web-app-2021-11-30-00-57-07.png" alt="" className="img-fluid border border-3"></img>
                            <img src="https://i.ibb.co/51SNh8L/screenshot-travelling-is-fun-web-app-2021-11-30-01-14-02.png" alt="" className="img-fluid border border-3 mt-3"></img>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src="https://i.ibb.co/kGJ2HsL/Screenshot-20211130-010025.jpg" alt="" className="img-fluid border border-3"></img>
                            <img src="https://i.ibb.co/2PtRHp2/screenshot-travelling-is-fun-web-app-2021-11-30-01-22-08.png" alt=""className="img-fluid border border-3 mt-3"></img>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8 col-sm-12">
                        <img src="https://i.ibb.co/ZzFxMBD/screenshot-travelling-is-fun-web-app-2021-11-30-01-18-01.png" alt="" className="img-fluid border border-3"></img>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            
                        </div>
                        <div className="col-md-4 col-sm-12">

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravellingIsFun;
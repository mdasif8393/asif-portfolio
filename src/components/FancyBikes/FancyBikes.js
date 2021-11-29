import React from 'react';
import './FancyBikes.css'

const FancyBikes = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center"style={{color:'#7510f7'}}>Fancy Bikes</h1>
            
            <div className="row mt-5">
                <div className="col-md-3 col-sm-12">
                    <div>
                        <h3 style={{color:'#7510f7'}}>Summary</h3>
                        <ul>
                            <h6><li>It's mainly a motor bike selling website</li></h6>
                            <h6><li>User can see different category bikes</li></h6>
                            <h6><li>User can buy a bike by submitting his/her details</li></h6>
                            <h6><li>User can review our service and it will show to home page</li></h6>
                            <h6><li>User can delete his order from my order page</li></h6>
                            <h6><li>Admin can add a bike which will show in home page and explore bikes page</li></h6>
                            <h6><li>Admin can make a user admin</li></h6>
                            <h6><li>Admin can delete all users order and make their order shipped from pending</li></h6>
                            <h6><li>Admin can delete a product</li></h6>
                        </ul>
                    </div>


                    <div>
                        <h3 style={{color:'#7510f7'}}>Tools</h3>
                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/rF9xDNB/axios.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/SBr4JrK/mui.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/3r3HgCH/dot-env.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/Cz79gS1/express.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/jMTGf4D/firebase.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/ZJQcH5W/hook-form.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/8zNTVWK/mongodb.jpg" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/LkPB886/font-awesome.png" alt=""></img>

                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/cx5SXwk/Ekran-Resmi-2019-11-18-18-08-13.png" alt=""></img>
                    </div>

                    <div>
                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://fancy-bikes.web.app/" style={{textDecoration: 'none', color: 'white'}}>Website Link</a></button>

                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://github.com/mdasif8393/niche-website-client-side" style={{textDecoration: 'none', color: 'white'}}>Client Side Code</a></button>
                        
                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://github.com/mdasif8393/niche-website-server-side" style={{textDecoration: 'none', color: 'white'}}>Server Side Code</a></button>
                    </div>

                </div>
                <div className="col-md-9 col-sm-12 "style={{backgroundColor:"#f9f9f9", padding:"50px"}}>
                    <div className="row">
                        
                        <div className="col-md-4 col-sm-12">
                            <img src="https://i.ibb.co/PDs5Krw/Screenshot-20211129-223652.jpg" alt="" className="img-fluid border border-3"></img>
                            <img src="https://i.ibb.co/VCqVT3D/screenshot-fancy-bikes-web-app-2021-11-29-22-55-27.png" alt=""className="img-fluid border border-3 mt-3"></img>
                            
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <img src="https://i.ibb.co/Xkdvnpr/rsz-1rsz-2fancy-bike.png" alt="" className="img-fluid border border-3"></img>
                            <img src="https://i.ibb.co/Gp0xVf3/screenshot-fancy-bikes-web-app-2021-11-29-22-50-39.png " alt="" className="img-fluid border border-3 mt-3"></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FancyBikes;
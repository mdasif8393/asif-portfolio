import React from 'react';
import './DoctorsOfKhulnaCity.css'
const DoctorsOfKhulnaCity = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center"style={{color:'#7510f7'}}>Doctors of Khulna City</h1>
            
            <div className="row mt-5">
                <div className="col-md-3 col-sm-12">
                    <div>
                        <h3 style={{color:'#7510f7'}}>Summary</h3>
                        <ul>
                            <h6><li>Created the site so that a patient can easily find doctors as his/her query</li></h6>
                            <h6><li>A patient who wants to visit a doctor can find doctors by their fee, speciality and designation</li></h6>
                            <h6><li>A patient can also see each doctor’s degree, department, designation, fee, visiting hour, contact number, chamber address.</li></h6>
                            <h6><li>Almost 250 real doctors data were collected to build this site.</li></h6>
                        </ul>
                    </div>


                    <div>
                        <h3 style={{color:'#7510f7'}}>Tools</h3>
                        
                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/cx5SXwk/Ekran-Resmi-2019-11-18-18-08-13.png" alt=""></img>
                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/G3w8xdW/bootstrap.jpg" alt=""></img>
                        <img style={{height:'100px', width:'100px', margin:"10px"}} className="img-fluid" src="https://i.ibb.co/zF9ZRZk/react-router.png" alt=""></img>
                    </div>

                    <div>
                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://doctorsofkhulnacity.netlify.app/" style={{textDecoration: 'none', color: 'white'}}>Website Link</a></button>

                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://drive.google.com/file/d/1AV4vtN9aTOqRQcTLCpP_6SuH9Q4YBVA1/view" style={{textDecoration: 'none', color: 'white'}}>App APK</a></button>

                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://github.com/mdasif8393/find-doctors" style={{textDecoration: 'none', color: 'white'}}>Website Code</a></button>
                        
                        <button className="glow-on-hover text-center m-1"><a target="_blank" href="https://github.com/mdasif8393/SearchDoctorsAndroidApp" style={{textDecoration: 'none', color: 'white'}}>App Code</a></button>
                    </div>

                </div>
                <div className="col-md-9 col-sm-12 "style={{backgroundColor:"#f9f9f9", padding:"50px"}}>
                    <div className="row">
                        
                        
                    
                        <div className="col-md-8 col-sm-12">
                            <img src="https://i.ibb.co/bRnxW6Y/screenshot-doctorsofkhulnacity-netlify-app-2021-11-30-01-48-08.png" alt="" className="img-fluid border border-3"></img>
                            <img src="https://i.ibb.co/HCFWRJ7/screenshot-doctorsofkhulnacity-netlify-app-2021-11-30-01-49-39.png " alt="" className="img-fluid border border-3 mt-3"></img>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <img src="https://i.ibb.co/8YDpCpZ/Screenshot-20211130-015113.jpg" alt="" className="img-fluid border border-3"></img>
                            
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    );
};

export default DoctorsOfKhulnaCity;
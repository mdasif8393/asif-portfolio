import React, { useRef } from 'react';
import './ContactMe.css'
import '../AboutMe/AboutMe.css'
import emailjs from 'emailjs-com';
const ContactMe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_6l3nqc6', e.target, 'user_zZF2qj887EBUVcRUxWz9A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Thank you for Email Me! I shall respond to you as early as possible.")
      e.target.reset();
  };
    return (
        <div id="contact-me" style={{marginTop:"50px"}}>
            <h1 className="text-center">Contact Me</h1>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"></input>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Email Address" name="email"></input>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"></input>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto text-center">
                            <input type="submit" className="glow-on-hover text-center" value="Send Message"></input>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
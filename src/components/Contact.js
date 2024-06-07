import React, { useEffect } from "react";

function Contact() {
    useEffect( () => {
        document.title = "Contact Page";
    }, []);

    return (
        <div className="contact-container">
            <a className="normal-link" target="_blank"
            href="https://www.linkedin.com/in/jimmy-zheng-16983724a/"> 
                Linkedin 
            </a>
            <a className="normal-link" target="_blank"
            href="mailto:nyc.jimmyzheng@gmail.com?subject=Portfolio Inquiry"> 
                Send Email
            </a>
            <a className="normal-link" target="_blank"
            href=""> 
                 
            </a>
            <a className="normal-link" target="_blank"
            href=""> 
                 
            </a>
            <a className="normal-link" target="_blank"
            href=""> 
               
            </a>

        </div>
    );
}

export default Contact;
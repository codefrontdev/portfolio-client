
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';




const FormText = () => {
    
    const navigatore = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const styling = {
        top: '10px',
        fontSize: '10px'
    }
    
    
    
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        
        if (username.trim() === "" || username.length <= 2) return toast.error("Username is required");
        if (email.trim() === "" || email.length <= 10) return toast.error("Email is required");
        if (message.trim() === "" || message.length <= 30) return toast.error("message is required");
        
        if (username === 'ahmede' && email === 'cd62970@gmail.com') {
            navigatore('/login-admin')
        } else {
            emailjs.sendForm('service_ud95eo9', 'template_dqpisyc', form.current, 'm3Hz6tUfDuFw2NGPu')
            .then((result) => {
                
                navigatore('/contact/pop-up');
                
            }, (error) => {
                
                return toast.error(error)
            });
        }
        
    };
    return ( 
        <>
        <ToastContainer theme='colored' position='top-center' />
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <div className="input">
                    <input id='name' value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="from_name" />
                    <label style={username ? styling : null} className='label' htmlFor="name">what's your full name?</label>
                </div>
                <div className="input">
                    <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="from_email" />
                    <label style={email ? styling: null} className='label' htmlFor="email">what's your email adress?</label>
                </div>
                <div className="input">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id='message' name="message"></textarea>
                    <label style={message ? styling : null} className='lable' htmlFor="message">what's On your mind?</label>
                </div>
                <input type="submit" value="lets go!" />
            </form>
        </div>
        </>
     );
}
 
export default FormText;
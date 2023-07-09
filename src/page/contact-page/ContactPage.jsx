import { useEffect } from 'react';
import ContactText from './ContactText';
import './contact-page.css';
import FormText from './FormText';


const Contact = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
        <>
            <div className="contact-page">
                <div className="title-text">
                    <span className='process-text'>Contact</span>
                    <h1>ready to get conversation started?</h1>
                    <p><span></span>good ideai</p>
                </div>

                <div className="contact-form-wrapper">
                    <div className="contact-from-display">
                        <FormText />
                        <ContactText />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;
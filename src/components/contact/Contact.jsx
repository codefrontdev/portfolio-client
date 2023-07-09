import { Link } from 'react-router-dom';
import './contact.css';
import Title from '../title/Title';

const Contact = () => {
    return ( 
        <>
            <section className="contact">

                <Title text={'contact'} title={'contact me'} span={'contact'} />

                <div className="content-contact">
                    <div className="btn-content">
                    </div>
                        <Link to={'/contact'} className="dashed-btn">
                            <div className="contact-btn">
                                <p>desire for a progect that rocks?</p>
                                <h1>contact ahmed</h1>
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                        </Link>
                </div>

            </section>
        </>
     );
}
 
export default Contact;
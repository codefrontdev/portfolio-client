import { Link } from "react-router-dom";
import ContactText from "../contact-page/ContactText";

const SayHi = () => {
    return ( 
        <>
            <div className="say-hi">
                <div className="say-hi-text">
                    <h1>what are you waiting for?</h1>
                    <Link to={'/contact'}>get Started <i className="bi bi-arrow-up-right"></i></Link>
                </div>
                <div className="say-hi-contact">
                    <ContactText text='say hi.' />
                </div>
            </div>
        </>
     );
}
 
export default SayHi;
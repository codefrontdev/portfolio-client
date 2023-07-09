import { Link } from "react-router-dom";
import './not-found.css';

const NotFound = () => {
    return ( 
        <>
            <section className="not-found">
                <div className="not-found-title">404</div>
                    <h1 className="not-found-text">page not found</h1>
                    <p className="not-found-desc">the page you are looking for doesnt exist or has been moved</p>

                    <Link className="not-found-link" to={'/'}>back to home <i className="bi bi-arrow-up-right"></i></Link>
            </section>
        </>
     );
}
 
export default NotFound;
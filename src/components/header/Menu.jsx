import { Link } from 'react-router-dom';
import Shadow from './Shadow';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/apiCall/authApiCall';



const Menu = ({ setToggle }) => {

    const dispatch = useDispatch();
    
    const [token, setToken] = useState(false);


    function logOutBtn() {
        if (token) {
            dispatch(logoutUser());
            setToggle(false);
        }
    }


    const localToken = localStorage.getItem('token');
    
    useEffect(() => {
        if (localToken) {
            setToken(true);
        } else {
            setToken(false)
        }
    }, [dispatch, localToken]);



    return ( 
        <>
            <nav className="navbar">
            <Shadow prop={true} />
                <ul className="navbar-links">
                    <Link onClick={() => setToggle(prev => !prev)} to={'/'} className="navbar-link">Home</Link>
                    <Link onClick={() => setToggle(prev => !prev)} to={'/about'} className="navbar-link">About</Link>
                    <Link onClick={() => setToggle(prev => !prev)} to={'/works'} className="navbar-link">Works</Link>
                    {token && 
                        <Link onClick={() => setToggle(prev => !prev)} to={'/dashboard-admin'} className="navbar-link">Admin</Link>
                    }
                    <Link onClick={() => setToggle(prev => !prev)} to={'/contact'} className="navbar-link">Contact</Link>
                </ul>
                

                {
                    token && (
                        <div onClick={logOutBtn} className="logUout">
                            <Link to={'/'} >
                                log out
                            </Link>
                        </div>
                    )
                }
            </nav>
        </>
     );
}
 
export default Menu;
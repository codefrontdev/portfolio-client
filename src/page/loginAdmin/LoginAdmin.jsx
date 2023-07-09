import { useEffect, useState } from "react";
import './login-admin.css';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiCall/authApiCall";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {

    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const navigator = useNavigate();

    const dispatch = useDispatch();

    
    const styling = {
        top: '10px',
        fontSize: '10px'
    }
    
    
    function handlerLoginAdmin(e) {
        e.preventDefault();
        
        const userAdmin = {
            username: username,
            email: email,
            password: pass,
        }
        
        if (username.trim() === "") return toast.error("Username is required");
        if (email.trim() === "") return toast.error("Email is required");
        if (pass.trim() === "") return toast.error("Password is required");
        
        dispatch(loginUser(userAdmin));
        navigator('/')
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return ( 
        <>
            <ToastContainer theme="colored" position="top-center" />
            <div className="contact-form-wrapper">
                <div className="contact-from-display active">
                    <div className="contact-form">
                        <form onSubmit={handlerLoginAdmin}>
                            <div className="input">
                                <input id="name" value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="from_name" />
                                <label style={username ? styling: null} className="label" htmlFor="name">what's your full name?</label>
                            </div>
                            <div className="input">
                                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="from_email" />
                                <label style={email ? styling: null} className="label" htmlFor="email">what's your email adress?</label>
                            </div>
                            <div className="input">
                                <input id="pass" value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="from_password"/>
                                <label style={pass ? styling: null} className="label" htmlFor="pass">what's On your password?</label>
                            </div>
                            <input type="submit" value="lets go!" />
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LoginAdmin;
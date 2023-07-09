import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);


    
    return ( 
        <>
            <div className={toggle ? "header-top active" : "header-top"}>
                <div className="header-top-logo">
                    <h1>AD<span>.</span></h1>
                </div>
                <div onClick={() => setToggle(prev => !prev)} className="header-top-menu-btn">
                    {toggle ? (
                        <>
                            <i className="bi bi-x-lg"></i>
                        </>
                        ): (
                        <>
                            <span></span>
                            <span></span>
                        </>
                    )}
                </div>
            </div>
            {toggle && <Menu setToggle={setToggle} />}

        </>
     );
}
 
export default Navbar;
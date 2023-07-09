import './footer.css';



const Footer = () => {
    return ( 
        <>
            <section className="footer">
            <div className="cluminous-blue-bottom">

            </div>
                <div className="auth">
                    <h3>Font End Dev & Back End Dev <span>.</span> by Ahmed Achalhi</h3>
                </div>
                <div className="social">
                    <div className="facebook-btn">
                        <a href="https://www.facebook.com/profile.php?id=100042688891122&mibextid=ZbWKwL">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/codefrontdev">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                    <div className="youtube">
                        <a href="https://youtube.com/@codinglara5774">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                    <div className="linkdin">
                        <a href="https://www.linkedin.com/in/ahmede-achalhi-ab4432161">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Footer;
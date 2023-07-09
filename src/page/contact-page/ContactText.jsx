const ContactText = ({text}) => {


    return ( 
        <>
            <div className="contact-text">
                <h1>{text ? text : "i'd love to hear from you"}</h1>
                <div className="content-contact">

                    <div className="contact-icon">
                        <i className="bi bi-telephone-fill"></i>
                        <div className="text-contact">
                            <h4>whatsapp</h4>
                            <span>(+212) 610118798</span>
                        </div>
                    </div>
                    <div className="contact-icon">
                        <i className="bi bi-envelope-fill"></i>
                        <div className="text-contact">
                            <h4>email</h4>
                            <span>cd62970@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact-icon">
                        <i className="bi bi-geo-fill"></i>
                        <div className="text-contact">
                            <h4>address</h4>
                            <span>morocco, larache, lot chaeeban2</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ContactText;
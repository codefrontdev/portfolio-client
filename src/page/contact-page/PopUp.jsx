import FormText from "./FormText";


const PopUp = () => {

    return ( 
        <>
            <div className="pop-up">
                <h1 className="pop-up-title">Pop up</h1>
                <FormText />
                <div className="pop-up-line"></div>
                
                <div className="contact-text active">
                    <h1>thank you, your message has been sent.</h1>
                    <p>I'll Look info it right away and have an answer for you as soon as possible.</p>
                </div>:
            </div>
        </>
     );
}
 
export default PopUp;
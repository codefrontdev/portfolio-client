const Title = ({text, title, span}) => {
    return ( 
        <>
            
            <div className="title-text">
                    <span className="process-text">{text}</span>
                    <h1>{title}</h1>
                    <p><span></span> {span}</p>
                </div>
        </>
     );
}
 
export default Title;
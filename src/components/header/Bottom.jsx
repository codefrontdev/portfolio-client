

const Botton = () => {

    return ( 
        <>
            <div className="botton">
                <span>Ma</span>
                <span>14C°</span>
                <span>{new Date().getHours()+ ':' + new Date().getMinutes()}PM</span>
                <span></span>
            </div>
        </>
     );
}
 
export default Botton;
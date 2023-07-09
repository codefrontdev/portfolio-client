

const Shadow = ({prop}) => {
    return ( 
        <>
            <div className={prop ? "shadow active" : "shadow noActive"}>

            </div>
        </>
     );
}
 
export default Shadow;
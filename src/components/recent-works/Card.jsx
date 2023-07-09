import { Link } from "react-router-dom";

const Card = ({projects}) => {

    
    
    return ( 
        <>
            {projects.map((item, i) => 
            <div key={i} className="card">
                <div className="text">
                    <h2>{item?.title.length > 15 ? item?.title.slice(0, 15) + "..." : item?.title}</h2>
                    <div className="card-content-link">
                        <div className="btn-preview">
                            <Link to={item?.linkPreviou}>Live Preview</Link>
                        </div>
                        <div className="btn-github">
                        <Link to={item?.linkGithub}>
                            <i className="bi bi-github"></i>
                        </Link>
                        </div>
                    </div>
                </div>
                <Link to={`/works/details/${item?._id}`}>
                    <div className="img">
                        <img src={item?.image?.url} alt="" />
                    </div>
                </Link>

            </div>
            )}
        </>
     );
}
 
export default Card;
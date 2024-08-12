import { Link } from "react-router-dom";

export default function GameItem({
    _id,
    title
}
) {

    return (
        
        <div className="game">
                <div className="image-wrap">
                    <img src={title.imageUrl} />
                </div>
                <h3>{title.title}</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buttons">
                    <Link to={`/details/${_id}`} className="btn details-btn">Details</Link>
                </div>
            </div>
    )
    
}
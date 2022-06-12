import "./card.css"
import Star from "../../images/star.png"


const Card = (props) => {
    
    return (
        <div className="card-container">
        <img src={props.img} alt="" className="c-img" />
         <div className="c-template">
            <img src={Star} alt="" className="rating" />
                <span className="gray">{props.reviewCount} </span>
                <span className="gray">({props.rating}) • </span>
            <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
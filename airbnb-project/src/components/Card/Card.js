import "./card.css"
import Star from "../../images/star.png"

const Card = (props) => {

        let badgeText
        if (props.item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.item.location === "Online") {
            badgeText = "ONLINE"
        }
    
    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={props.item.coverImg} alt="" className="c-img" />
         <div className="c-template">
            <img src={Star} alt="" className="rating" />
                <span className="gray">{props.item.stats.reviewCount} </span>
                <span className="gray">({props.item.stats.rating}) • </span>
            <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;
import "./card.css"
import Katie from "../../images/Katie-Zaferes.jpeg"
import Star from "../../images/star.png"


const Card = () => {
    
    return (
        <div className="card-container">
         <img src={Katie} alt="" className="c-img" />
         <div className="c-template">
            <img src={Star} alt="" className="rating" />
                <span className="gray">5.0 </span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;
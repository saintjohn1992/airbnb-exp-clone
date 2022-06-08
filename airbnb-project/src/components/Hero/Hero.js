import "./hero.css";
import Photogrid from "../../images/Peek.png";


const Hero = () => {

    return (
        <div className="hero-container">
            <img src={Photogrid} alt="" className="hero" />

            <h1 className="hero-title">Online Experiences</h1>

            <p className="h-desc">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

            </p>
        </div>
    )
}

export default Hero;
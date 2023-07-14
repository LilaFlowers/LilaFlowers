import about_gardener from "../../images/about_gardener.jpg"
import video_blog from "../../videos/video_blog.mp4"
import './About.css';
export default function About(){
    return <div className="aboutSection">
    <h1>About LILA</h1>
    <div className="container">
    <img src={about_gardener} alt="LILA Owner picture"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="sustainablePractices">
        <h1>Sustainable practices at LILA</h1>
        <div className="video">
        <video autoPlay loop muted>
            <source src={video_blog} type="video/mp4"/>
        </video>
        </div>
    </div>
    </div>
}
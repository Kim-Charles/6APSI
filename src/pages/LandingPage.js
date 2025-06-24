import "../styles/landing-page.css"
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

function LandingPage() {
    const navigate = useNavigate();

    function onClickLogin(){
        navigate("/login");
    }
    function onClickSignIn(){
        navigate("/register");
    }

    return <>
    <div className='header-container'>
        <div className='header-row'>
            <div className="logo-text">
                NoteMe
            </div>
            <div>
                <button>HOME</button>
                <button>CONTACT</button>
                <button>ABOUT US</button>
            </div>
        </div>
        <div className="content-container">
            <div className="content-text">
                Start your task here!
            </div>
            <div className="content-button-container">
                <button className="content-button" onClick={onClickLogin}>Login</button>
                <button className="content-button" onClick={onClickSignIn}>Sign In</button>
            </div>
        </div>
    </div>
    <div className="feature-container">
        <div className="feature-text">Features</div>
        <div className="feature-list-container">
            <div className="feature-item-container">
                <div className="feature-img"></div>
                <div className="feature-item">Tasks</div>
                <div>Text Description</div>
            </div>
            <div className="feature-item-container">
                <div className="feature-img-2"></div>
                <div className="feature-item">Checklist</div>
                <div>Text Description</div>
            </div>
            <div className="feature-item-container">
                <div className="feature-img-3"></div>
                <div className="feature-item">History</div>
                <div>Text Description</div>
            </div>
        </div>
    </div>
    </>
}

export default LandingPage;
import Projects from "./Projects";


function Aboutme(){

    let myPic = "/assets/me.jpg";

    return(
        <div className="Aboutme-container">
            <div className="Aboutme-child">
                <div className="Aboutme-Image">
                    <img src={myPic} alt="my pic" />
                </div>
                <div className="Aboutme-content">
                    <p className="header">Hi! My name is <span>John Gabriel Gerolia</span>.</p><br />
                    <p id="description">BSIT Graduate year 2025. Currently Employed at Security System Integrator Company!</p><br />
                    <p id="description">I currently handle procurement at the company where I work, and I also do programming as a hobby sometimes</p> <br />
                    <p id="description">What you will see below are my mini projects where I'm knowledgeable at when it comes to software development.</p><br />
                    <a href="/GEROLIA-RESUME.pdf" download>
                    <button className="Resumebtn">
                        Resume 
                        <img src="/assets/download.svg" alt="download_logo" />
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
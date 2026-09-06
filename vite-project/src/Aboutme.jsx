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
                    <p className="header">Hi! My name is <span>John Gabriel Gerolia</span>.</p><br/>
                    <p id="description">BSIT Graduate year 2025. Currently Employed at <b>Vinculum Technologies Corporation</b> a Security System Integrator Company!</p><br/>
                    <p id="description">I am responsible of designing, planning, and documenting security systems, and I also do programming as a hobby sometimes</p><br/>
                    <p id="description">Below are my capstone project and mini projects I made in short amount of time. Also my contacts</p><br />
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
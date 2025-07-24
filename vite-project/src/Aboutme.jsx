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
                    <p id="description">I am a Fresh Graduate self taught developer who wanted to explore and enhance myself more in the world of programming.</p><br />
                    <p id="description">My love for Video Games is what drifted me to spark my curiousity to explore how it takes to make one. and that curiousity lead to other areas of Programming</p> <br />
                    <p id="description">My Goal is to be knowledgeable in different fields of development. No matter how long it takes.</p><br />
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
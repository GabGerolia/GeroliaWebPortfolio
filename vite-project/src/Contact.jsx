
function Contact(){
  const handleCopy = () => {
    navigator.clipboard.writeText("johngabrielgerolia05@gmail.com").then(() => {
      alert("Email copied to clipboard!");
    });
  };
  return(
    <div className="Contact-container">
      <div className="Contact-wrapper">
        <div className="Contact-description">
            <p>Feel free to message me below</p>
            <br />
            <p>Email me at:</p>
            <p
              onClick={handleCopy}
              className="mahEmail"
            >
              <span className="font-mono">
              johngabrielgerolia05@gmail.com
              </span>
            </p>
        </div>
        <div className="Contact-mycontacts">
            <div className="contactImage">
                <a href="https://www.facebook.com/johngabriel.gerolia" target="_blank">
                    <img
                    src="/assets/fb.svg"
                    alt="fb_logo"
                /></a>
            </div>
            <div className="contactImage">
                <a href="mailto:johngabrielgerolia05@gmail.com" target="_blank">
                <img
                    src="/assets/gmail.svg"
                    alt="gmail_logo"
                /></a>
            </div>
            <div className="contactImage">
                <a href="https://www.linkedin.com/in/john-gabriel-gerolia-31b59b347/" target="_blank">
                    <img
                        src="/assets/linkedin.svg"
                        alt="linkedin_logo"
                /></a>
            </div>
            <div className="contactImage">
                <a href="https://github.com/GabGerolia" target="_blank">
                    <img
                        src="/assets/github.svg"
                        alt="github_logo"
                /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
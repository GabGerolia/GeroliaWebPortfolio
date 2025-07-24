
function Projects(props){

    return(
        <div className="Projects-container">
            <div className="Projects-parent">
                <div className="Projects-image">
                    <img src={props.gif} alt={props.alt} />
                    <h3>{props.title1}</h3>
                </div>
                <div className="Projects-description">
                    <h1>{props.title2}</h1>
                    <br />
                    <p>{props.p1}</p><br />
                    <p>{props.p2}</p><br />
                    <p>{props.p3}</p>
                </div>
            </div>
        </div>
    )
}
export default Projects
import "./style.css"
function Steps(props){
    return(
        <div className="L-main-step" key={props.id}>
            {props.icon}
            <h3 className="L-main-h3">{props.stepcount}</h3>
            <p className="L-main-stepp">{props.text}</p>
            <button className="L-main-btn">View More</button>
        </div>
    )
}
export default Steps
import "./style.css"
function Reviews(props){
    return(
        <div className="L-main-say">
                <div className="L-main-say-img" style={{backgroundImage:`url(${props.img})`}}/>
                <p className="L-main-say-pos">{props.pos}</p>
                <p className="L-main-say-desc">{props.desc}</p>
                </div>
    )
}
export default Reviews
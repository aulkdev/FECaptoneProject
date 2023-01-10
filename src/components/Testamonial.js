import './Testamonial.css'
const Testamonial = (props) => {
    return(
        <div className="testamonial">
            <span className="profilepicture"></span>
            <div className="text">
            <p className="review">
                {props.review}
            </p>
            <p className="name">
            ~{props.name}
            </p>
            </div>
        </div>
    )
}
export default Testamonial;
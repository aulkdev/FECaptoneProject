import './FoodCard.css'
const FoodCard = (props) => {
    return (
        <div className="foodcard">
            <img src={props.img}/>
            <div className="foodinfo">
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            </div>
        </div>
    )

}
export default FoodCard;
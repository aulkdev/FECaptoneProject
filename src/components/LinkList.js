import './LinkList.css'

const LinkList = (props) => {
    return (
        <div className="linklist">
            <h4>{props.title}</h4>
            {
                props.links.map(i => (
                    <a href={i[1]}>{i[0]}</a>
                ))
            }
        </div>
    )

}
export default LinkList;
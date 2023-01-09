import { Link } from "react-router-dom"
export default function RecentArticle(props) {
    return (
            <Link to={`/article/${props.id}`} className="recent--article__container col">
                    <h3 className="recent--article__title title">{props.title}</h3>
                    <p className="body recent--article__body">{props.body}</p>
                    <p className="date recent--article__date">{props.date}</p>
                    <img className="recent--article__img" src={`/images/${props.image}`} />
            </Link>

    )
}
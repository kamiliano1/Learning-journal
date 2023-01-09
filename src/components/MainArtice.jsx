export default function MainArticle(props) {
    const backgroundImage = props.image
    const styles ={
        backgroundImage: `url("/images/${backgroundImage}"`,
        backgroundColor: "tomato"
    }
    return (
        <div className="container" alt={props.alt}>
            <main className="home--page--head" style={styles}>
                <div className="container col">
                    <h2 className="home--page__title title">{props.title}</h2>
                    <p className="home--page__body body">{props.body}</p>
                    <p className="home--page__date date">{props.date}</p>
                </div>
            </main>
        </div>
    )
}
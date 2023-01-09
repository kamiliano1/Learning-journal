import { useContext } from "react"
import { WebContext } from "../useContex"
import { Link } from "react-router-dom"
import MainArticle from "../components/MainArtice"
import articleData from "../articleData/articleData"
import Footer from "../components/Footer"

export default function Home() {

    const { isMore, moreArticles, recentElements } = useContext(WebContext)
    
    const mainArticle = articleData.find(article=>article.isMain===true)
    return (
        <div>
            <Link to="/mainArticle">
                <MainArticle
                    title = {mainArticle.title}
                    body = {mainArticle.body}
                    date = {mainArticle.date}
                    image ={mainArticle.image}
                    alt = {mainArticle.alt}
                />
            </Link>
            <div className="container col">
                <div className="recent--articles--container row">
                    {recentElements}
                </div>
            <p className="home--view--more" onClick={moreArticles}>{isMore ? "View less" : "View more"}</p>
            </div>
            <Footer />
        </div>
    )
}
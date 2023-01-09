import { useParams, useNavigate } from "react-router-dom"
import articleData from "../articleData/articleData"
import Footer from "../components/Footer"


export default function Article() {
    const { articleId } = useParams()
    const currentLocation = useNavigate()
    const recentArticles = articleData.filter(article=>article.isMain===false)
    const currentArticleData = recentArticles.find(art=>art.id==articleId)
    const styles = {
        order: articleId % 2 === 0 ? 0 : -2,
        textAlign: articleId % 2 === 0 ? "end" : "start"
    }

    return (
        <div>
            <div className="container">
                <p className="date article--date" style={styles}>{currentArticleData.date}</p>
                <div className="article--head col">
                    <div className="article--side">
                        <h1 className="title article--title">{currentArticleData.title}</h1>
                        <h4 className="body">{currentArticleData.body}</h4>
                    </div>
                    <img className="article--img" 
                    style={styles}
                    src={`/images/${currentArticleData.image}`} 
                    alt={currentArticleData.alt}/>
                </div>
                <div className="about--body section--body">
                    
            <p><strong>How I stay committed to learning</strong></p>
                <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                <p><strong>How I got started</strong></p>
                <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                </div>
                <button className="article--btn" onClick={()=>{currentLocation(-1)}}>Back</button>
        </div>
        
            <Footer />
        </div>
    )
}
import articleData from "../articleData/articleData"

import { WebContext } from "../useContex"
import { useContext } from "react"

import Footer from "../components/Footer"
export default function About() {

    const { recentElements } = useContext(WebContext)

    const mainArticle = articleData.find(article=>article.isMain===true)
    return (
        <div>
            <div className="container">
                <div className="col width-95">
                    <h2 className="title main--article__title">{mainArticle.title}</h2>
                    <p className="body main--article--body">{mainArticle.body}</p>
                    <p className="date">{mainArticle.date}</p>
                </div>
                <img className="main--article--image" src={`/images/${mainArticle.image}`} />

            <div className="section--body width-95">
                <p><strong>How I stay committed to learning</strong></p>
                <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                <p><strong>How I got started</strong></p>
                <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                <p className="recents--posts"><strong>Recent posts</strong></p>
            </div>
        </div>
            <div className="row articles--recent container">
                {recentElements}
            </div>
            <Footer />           
        </div>
    
    )
}
import { useState, createContext } from "react"
import RecentArticle from "./components/RecentArticle"
import articleData from "./articleData/articleData"
const WebContext = createContext()

function WebContextProvider(props) {
    const [isMore, setIsMore] = useState(false)

    const recentArticles = articleData.filter(article=>article.isMain===false)
    const recentElements = recentArticles.map((article, number)=>{
        if (isMore) {
            return <RecentArticle key={article.id}
                    id={article.id}
                    title = {article.title} 
                    body = {article.body}
                    date = {article.date}
                    image = {article.image}
            />

        } else if (number <3) {
            return <RecentArticle key={article.id}
            id={article.id}
            title = {article.title} 
            body = {article.body}
            date = {article.date}
            image = {article.image}
    />
        }
    })

    function moreArticles() {
        setIsMore(prev=>!prev)
    }

    return (
        <WebContext.Provider value={{isMore, moreArticles, recentElements}}>
            {props.children}
        </WebContext.Provider>
    )
}

export { WebContextProvider, WebContext }
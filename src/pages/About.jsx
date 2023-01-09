import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import { WebContext } from "../useContex"
import { useContext } from "react"
export default function About() {

    const { recentElements } = useContext(WebContext)
    return (
        <div>
            <div className="container">
                <AboutMe />
                <div className="row articles--recent container">
                    {recentElements}
                </div>
            </div>
            <Footer />
        </div>
    )
}
import { Link } from "react-router-dom"
// import 'remixicon/fonts/remixicon.css'
export default function Navbar() {
    return (
        <nav className="container navbar row">
            <i className="ri-chat-smile-2-fill navbar__logo"></i>
            <h2 className="title navbar__title">My learning journal</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About me</Link>
                </li>
            </ul>
        </nav>
    )
}
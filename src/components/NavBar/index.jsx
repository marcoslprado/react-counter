import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <ul id="navbar">
            <li>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    <button>Contact</button>
                </Link>
            </li>
        </ul>
    )
}
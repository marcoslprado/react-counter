import { Link } from "react-router-dom"
import './style.css'

export default function NavBar () {
    return (
    <header>
        <h1>Home Page</h1>
        <Link to='/'>
            <button>Home</button>
        </Link>
        <Link to='/contact'>
            <button>Contact</button>
        </Link>
    </header>
    )
}
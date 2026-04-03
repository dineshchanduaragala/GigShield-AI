import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>ShieldX</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/policy">Policies</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/claims">Claims</Link>
      </div>
    </nav>
  )
}
import "./Header.css";
import hbtLogo from "../assets/holberton-logo.jpg";
export default function Header() {
    return (
        <div className="App-header">
            <img src={hbtLogo} alt="holberton logo" />
            <h1 style={{ color: "#e1003c" }}>School Dashboard</h1>
        </div>
    )
}
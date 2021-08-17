import { LoginContext } from "pages/Login"
import { useContext } from "react"
import { Link } from "react-router-dom"


export default function Header() {
    const [user, setUser] = useContext(LoginContext)

    return <header>
        <span>{user.name} <u onClick={() => setUser()}>logout</u></span>
        <span>logo</span>
        <Link to='/'>dashboard</Link>
        <Link to='/my-tests'>my-tests</Link>
    </header>
}
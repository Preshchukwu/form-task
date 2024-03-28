import './NavBar.css'
import{Link, NavLink} from "react-router-dom"

const NavBar = ()=>{
    return(
        <div className='main'>

            <div className="logoDiv">
                LOGO
            </div>

            <div className="navLinks">
                <Link to={"/"}>
                    <div>Home</div>
                </Link>

                <NavLink to={"/about"}>
                    <div>About</div>
                </NavLink>

                <Link to={"/services"}>
                    <div>Services</div>
                </Link>
                
            </div>
        </div>
    )
}

export default NavBar
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

const Navigation = () => {
    const activeLink = ({ isActive }) => isActive ? classes.isActive : undefined

    return <header>
        <nav>
            <ul>
                {/* <li>
                    <NavLink
                        to="/"
                        className={activeLink}
                        end
                    >
                        Home
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/artikli" className={activeLink} end>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/artikli/novi-artikal" className={activeLink} end>Novi Artikal</NavLink>
                </li>
                <li>
                    <NavLink to="/prijava" className={activeLink} end>Login</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigation
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

const Navigation = () => {
    const activeLink = ({ isActive }) => isActive ? classes.isActive : undefined

    return <header>
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={activeLink}
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={activeLink} end>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={activeLink} end>Login</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigation
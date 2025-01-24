import { NavLink } from 'react-router';


function Navbar() {
    return (
        <nav>
            <ul>
            <li><NavLink to="/" end>Person Details</NavLink></li>
            <li><NavLink to="/MyStateComponent">Sign Up Form</NavLink></li>
            <li><NavLink to="/EffectsComponent">Game of Thrones Characters</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
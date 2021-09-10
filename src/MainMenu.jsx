import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/personajes">Personajes</NavLink></li>
        <li><NavLink exact to="/contacto">Contacto</NavLink></li>
    </ul>
)

export default MainMenu;
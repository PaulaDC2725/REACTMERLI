import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <center>
                <li class="nav-item active"><NavLink exact to="/">Home</NavLink></li>
                <li class="nav-item active"><NavLink exact to="/personajes">Personajes</NavLink></li>
                <li class="nav-item active"><NavLink exact to="/contacto">Contacto</NavLink></li>
            </center>
            </ul>
        </div>    
    </nav>
    
)

export default MainMenu;
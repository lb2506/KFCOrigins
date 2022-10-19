import React from "react";
import logo from '../assets/IMG/Logo.png'
import user from '../assets/IMG/user.svg'

let Navbar = function() {
    return (
        <div className="navbar">
            <div className="navbar__top">
                <div className="navbar__leftBlock">
                    <ul>
                        <li><a href="/"><img className="navbar__logo" src={logo} alt='logo'/></a></li>
                        <li><a href="/">notre carte</a></li>
                        <li><a href="/">en ce moment</a></li>
                        <li><a href="/">trouver un kfc</a></li>
                    </ul>
                </div>   
                <div className="navbar__rightBlock">
                    <ul>
                        <li><button className="rightBlock__orderBtn">Commander</button></li>
                        <li><button><img className="rightBlock__user" src={user} alt="user"/></button></li>
                        <li>
                            <button className="rightBlock__burgerMenu">
                                <span/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar__bottom">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li>{'>'}</li>
                    <li><a href="/">Lorem Lepsum</a></li>
                    <li>{'>'}</li>
                    <li className="active"><a href="/">Lorem Lepsum</a></li>
                </ul>
            </div>   
        </div> 
    );
}

export default Navbar;
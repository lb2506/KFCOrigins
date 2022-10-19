import React from 'react';
import Navbar from '../components/navbar.jsx';
import Caroussel from '../components/caroussel.jsx';


let Header = function(){
    return (
        <div>
            <Navbar />
            <Caroussel />
        </div>
    );
}

export default Header;
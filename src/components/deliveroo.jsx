import React from "react";

let Deliveroo = function(){
    return(
        <div className="deliveroo">
            <div className="deliveroo__container">
                <p className="deliveroo__text">En vente exclusive sur deliveroo dans les KFC <span className="neon">Paris</span> <span className="neon">République</span>, <span className="neon">Paris</span> <span className="neon">Bastille</span>, <span className="neon">Paris rue de</span><span className="neon"> Montmartre</span>, du <span className="neon">19 </span><span className="neon">octobre</span> <span className="neon">au</span> <span className="neon">21 octobre.</span><br/>Sous réserve des stocks disponibles.</p>
                <div className="deliveroo__img"></div>
                <p className="deliveroo__translate">KFC origins = KFC origines. Made in KFC = fabriqué par KFC. Old school = vieille école.</p>
                <p className="deliveroo__cgv">Vous pouvez consulter <span>nos conditions générales de vente</span> pour être au courant de tout sur notre collections</p>
            </div>
        </div>
    )
}

export default Deliveroo;
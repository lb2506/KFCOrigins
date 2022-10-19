import React from "react";

import collection from '../assets/IMG/collection.png'

let Origins = function() {
    return(
        <div className="bg__origins">
            <div className="origins">
                <div className="origins__content">
                    <h2 className="title">KFC lance sa collection capsule <span className="title__neon">Origins.</span></h2>
                    <h3 className="subtitle">Quatre pièces vintages uniques directement inspirées des années 50.</h3>
                    <p className="text">Fabriquées en france et tirées à seulement 100 exemplaires par modèle, c'est clairement les sapes les plus croustillantes du moment. Alors si tu veux choper un blouson, <br/> une chemise, un bob ou des chaussettes KFC, ne perds pas une seconde, ça va partir comme des petits tenders.</p>
                </div>
                <div className="origins__img">
                    <img src={collection} alt='collection'/>
                </div>       
            </div>
        </div>
    )
}

export default Origins;
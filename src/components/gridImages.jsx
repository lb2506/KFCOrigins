import React, { useState, useEffect } from "react";

let clothes = [
    {
        name: 'blouson',
        title : "Le blouson <span>qui déchire.</span>",
        description : "La sape ultime. Le graal de la mode made in kfc. Un starter ultra quali, au look old school inimitable. Réservé aux puristes.",
        details : [
            "détails produits :",
            "100% polyester",
            "matière satin",
            "existe en s m l et xl"
        ]
    },
    {
        name: 'chemise',
        title : "La chemise qui défonce.",
        description : "Inspirée des chemises de base-ball, c'est la future pièce maitraisse de ta garde robe. Déjà un classique.",
        details : [
            "détails produits :",
            "100% coton",
            "existe en s m l et xl"
        ]
    },
    {
        name: 'bob',
        title : "Le bob qui fait plaisir.",
        description: "Parce qu'éviter d'avoir une insolation ne doit pas empêcher d'avoir du style. Un couvre chef digne d'un colonel.",
        details : [
            "détails produits :",
            "100% polyester",
            "taille réglable"
        ]
    },
    {
        name: 'chaussette',
        title : "Les chaussettes qui claquent.",
        description: "Simples. Blanches. Classes. Avec la tête du colonel brodée sur la cheville pour un style pédestre irréprochable.",
        details : [
            "détails produits :",
            "100% coton",
            "taille unique 38-44"
        ]
    },
];




let gridImages = function({id, arrayImages, arrow1, arrow2}){



    return(
        <>
            { clothes && Array.isArray(clothes) && 
                <div className='description__details gridImages'>
                    {
                        clothes.map((cloth, index) => {

                            if(cloth.name === id){
                                return (
                                    <div id={cloth.name} className='details__containerMobile' key={index}>
                                        <h2 className='details__title' dangerouslySetInnerHTML={{__html: cloth.title}}></h2>
                                        <p className='details__description'>{cloth.description}</p>
                                        <ul className='details__list'>
                                            {
                                                cloth.details.map((detail, index) => {
                                                    return <li className='list__item' key={index}>{detail}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        }
                    )}
                    { arrayImages && Array.isArray(arrayImages) &&
                        arrayImages.map((image, index) => {
                            return <img className={`gridImages__image${index}`} src={image} alt={`cloth${index}`} key={index}/>
                        }
                    )}

                    { arrow1 && <div className={`arrow ${arrow1}` }></div> }
                    { arrow2 && <div className={`arrow ${arrow2}` }></div> }
                </div>
            }
        </>
    )
    
}
export default gridImages;
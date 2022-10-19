import React, { useEffect, useState } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Blouson from '../assets/IMG/vêtements/blouson.png';
import Chemise from '../assets/IMG/vêtements/chemise.png';
import Bob from '../assets/IMG/vêtements/bob.png';
import Chaussette from '../assets/IMG/vêtements/chaussettes.png';



let clothes = [
    {
        name: 'blouson',
        image: Blouson,
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
        image: Chemise,
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
        image: Bob,
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
        image: Chaussette,
        title : "Les chaussettes qui claquent.",
        description: "Simples. Blanches. Classes. Avec la tête du colonel brodée sur la cheville pour un style pédestre irréprochable.",
        details : [
            "détails produits :",
            "100% coton",
            "taille unique 38-44"
        ]
    },
];


let DescriptionClothes = function(){

    const [progress, setProgress] = useState(0) 
    const [progressMobile, setProgressMobile] = useState(0)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".progressBar",
            start: "top +750",
            end: "+3500",
            onUpdate: self => setProgress(self.progress)
          });
    }, [])


    let currentClothes = clothes[0];

    if(progress > 0 && progress <= 0.37){
        currentClothes = clothes[0];
    }else if(progress > 0.37 && progress <= 0.637){
        currentClothes = clothes[1];
    }else if(progress > 0.637 && progress <= 0.9015){
        currentClothes = clothes[2];
    }else if(progress > 0.9015 && progress <= 1){
        currentClothes = clothes[3];
    }

    
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".collection",
            start: "top top",
            end: "bottom top",
            onUpdate: self => setProgressMobile(self.progress)
          });
    }, [])

    let currentClothesMobile = clothes[0];

    if(progressMobile > 0 && progressMobile <= 0.295){
        currentClothesMobile = clothes[0];
    }else if(progressMobile > 0.295 && progressMobile <= 0.52){
        currentClothesMobile = clothes[1];
    }else if(progressMobile > 0.52 && progressMobile <= 0.75){
        currentClothesMobile = clothes[2];
    }else if(progressMobile > 0.75 && progressMobile <= 1){
        currentClothesMobile = clothes[3];
    }


    return (
        <div className="dropDown" >
        <div className={`description ${open ? 'open' : ''}`}>
            <div className="description__container">
            { clothes.map((clothe, index) => {
                return (
                    <>
                    <div className={'container__clothes' + (currentClothesMobile.name === clothe.name ? ' order' : '')} key={index}>  
                            <div className={`clothes__description` + (currentClothes.name === clothe.name ? ' active' : '')}>
                                <div className="description__dropdown">
                                    <h2 className="clothes__name" onClick={()=> {if(open){window.location.replace(`#${clothe.name}`)}; setOpen(!open)}}>{clothe.name}</h2>
                                    <img src={clothe.image} alt={clothe.name} className="clothes__image"/>
                                </div>
                                <img src={require(`../assets/IMG/arrow_dropdown.png`)} className={`clothes__arrowDropDown ${open ? 'open' : ''}`} alt="arrowDropDown" onClick={()=> setOpen(!open)}/>
                            </div>
                        <div className={`container__line` + (currentClothes.name === clothe.name ? ' active' : '')}/>
                        <span className={`container__divider ${open ? 'active' : ''}`}></span>
                    </div>
                    
                    </>
                );
            })}
            </div>
            <div className="description__progressBar">
                <div className="progressBar" style={{width: progress*100 + '%'}}></div>
            </div>
            <div className="description__details">
                { clothes.map((clothe, index) => {

                    if(currentClothes.name === clothe.name){
                    
                   
                        return (
                            <div className="details__container" key={index}>
                                <h2 className="details__title" dangerouslySetInnerHTML={{__html: clothe.title}}></h2>
                                <p className="details__description">{clothe.description}</p>
                                <ul className="details__list">
                                    {clothe.details.map((detail, index) => {
                                        return (
                                            <li className="list__item" key={index}>{detail}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );

                                }
                        
                    }
                )}
            </div>
            </div>
        </div>
        ); 
}

export default DescriptionClothes;
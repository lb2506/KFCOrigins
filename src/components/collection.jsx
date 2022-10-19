import React from "react";

import GridImages from './gridImages.jsx';
import DescriptionClothes from "./descriptionClothes.jsx";

import blouson1 from '../assets/IMG/collection/visuel_01.jpg';
import blouson2 from '../assets/IMG/collection/visuel_02.jpg';
import blouson3 from '../assets/IMG/collection/visuel_03.jpg';
import blouson4 from '../assets/IMG/collection/visuel_04.jpg';
import chemise1 from '../assets/IMG/collection/visuel_05.jpg';
import chemise2 from '../assets/IMG/collection/visuel_06.jpg';
import chemise3 from '../assets/IMG/collection/visuel_07.jpg';
import bob1 from '../assets/IMG/collection/visuel_08.jpg';
import bob2 from '../assets/IMG/collection/visuel_09.jpg';
import bob3 from '../assets/IMG/collection/visuel_10.jpg';
import chaussette1 from '../assets/IMG/collection/visuel_11.jpg';
import chaussette2 from '../assets/IMG/collection/visuel_12.jpg';
import chaussette3 from '../assets/IMG/collection/visuel_13.jpg';

let imagesBlouson = [blouson1, blouson2, blouson3, blouson4];
let imagesChemise = [chemise1, chemise2, chemise3];
let imagesBob = [bob1, bob2, bob3];
let imagesChaussette = [chaussette1, chaussette2, chaussette3];




let Collection = function(){

    

    return (
        <div className="collection">
            <div className="collection__imagesContainer">
                <GridImages id={'blouson'} arrayImages={imagesBlouson} arrow1={'sprite top left'} arrow2={'red bottom right'}/>
                <GridImages id={'chemise'} arrayImages={imagesChemise} arrow1={'white bottom left'} arrow2={'white bottom right'}/>
                <GridImages id={'bob'} arrayImages={imagesBob} arrow1={'red bottom left'} arrow2={'white top right'}/>
                <GridImages id={'chaussette'} arrayImages={imagesChaussette} arrow1={'white top left'} arrow2={'sprite bottom right'}/>
            </div>
            <DescriptionClothes />
        </div>
    );
}

export default Collection;
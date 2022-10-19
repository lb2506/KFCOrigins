import React from 'react';

import Origins from '../components/origins.jsx';
import Collection from '../components/collection.jsx';
import Deliveroo from '../components/deliveroo.jsx';

let Main = function(){
    return (
        <div className='main'>
            <Origins />
            <Collection />
            <Deliveroo />
            <div className='bg-noise'/>
        </div>
    );
}

export default Main;
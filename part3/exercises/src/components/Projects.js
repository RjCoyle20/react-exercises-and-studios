import data from './../data.json'
import { useState } from 'react';

export default function MyProjects (){
const [index, setIndex] =useState(0);
const playerCharacter = data;
const selectedPC = data[index];

function handleClick(){
    if(index < data.length-1)
    {
        setIndex(index + 1);
    }
    else{
        setIndex(0);
    }
}
console.log(selectedPC.image)
return(<div>
    <button onClick={handleClick}>Next</button>
    <a>
    < img src={selectedPC.image} alt= {selectedPC.name} />
    </a>
    <ol>
        <li>{selectedPC.name}</li>
        <li>{selectedPC.speciesclass}</li>
        <li>{selectedPC.playedby}</li>
    </ol>
    </div>
)
};
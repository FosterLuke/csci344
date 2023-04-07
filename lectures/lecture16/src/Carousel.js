import React from "react";
import { useState } from "react";

export default function Carousel({title, gallery}) {
    const[Index, setIndex] = useState(0);


    console.log(gallery);
    const currentTimageURL = gallery.images[Index];

    function Previous() {
        console.log('Previous');
        (Index === 0) ? setIndex(gallery.images.length - 1) : setIndex(Index - 1);
    }

    function Next() {
        console.log('Next');
        (Index === gallery.images.length - 1) ? setIndex(0) : setIndex(Index + 1);
    }
    

    return(
        <div className="carousel">
        <h1>{title}</h1>
        <img src={currentTimageURL}/>
        <button onClick={Previous}>Previous</button>
        <button onClick={Next}>Next</button>
        </div>
    )
}
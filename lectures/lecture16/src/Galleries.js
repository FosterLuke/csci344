// Shows useres available galleries and allows them to select whichever they want.

import React from "react"; 

export default function Galleries({galleries}) {

    function chooseGallery(idx) {
        setGalleryInd(idx);
    }


    return (
        <section>
            <h2>Available Galleries</h2>
            {
                galleries.map(gallery,idx) => {
                    return (
                        <button onClick={chooseGallery}>Click to show {gallery.name}</button>
                    )
                }
            }
        </section>
    )
}

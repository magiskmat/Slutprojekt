import React from 'react';


function Nyhetsartikel(props) {
    return (
        <article>
        <img src={props.minArtikel.urlToImage} />
        <h2>{props.minArtikel.title}</h2>
        <p>{props.minArtikel.description}</p>
        <a>Läs mer..</a>
     </article>
    );
}

export default Nyhetsartikel;
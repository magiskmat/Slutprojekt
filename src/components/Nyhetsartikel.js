import React from 'react';

function Nyhetsartikel (props){
    return (
            <article className="Färg" >
        <img src={props.minArtikel.urlToImage} className="bilder"></img>
      <h2 className="rubriker">{props.minArtikel.title}</h2>
      <p>{props.minArtikel.description}</p>
      <a href={props.minArtikel.url}  target="">Läs mer..</a>
        </article> 
        
    );
    }


export default Nyhetsartikel;
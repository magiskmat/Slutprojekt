import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';

function Nyhetslista(props) {
   return (<section className="grid">
      {props.minaArtiklar.map(function (item, index) {
         return <Nyhetsartikel
            minArtikel={item}
            key={`artikel${index}`}
         />
      })}
   </section>);
   //funktion och array som returnerar nyhetsartiklarna
}


export default Nyhetslista;
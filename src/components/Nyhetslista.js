import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';

 //funktion som returnerar nyhetsartiklarna
function Nyhetslista(props) {
   return (<section className="grid">
      {props.minaArtiklar.map(function (item, index) {
         return <Nyhetsartikel
            minArtikel={item}
            key={`artikel${index}`}
         />
      })}
   </section>);
  
}


export default Nyhetslista;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista'
import data from './fuskdata';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          urlToImage: "https://source.unsplash.com/random/200x125/?cat",
        title:"Testnyhet 1",
        description:"Beskrivning av testnyheten",
},
{
  urlToImage: "https://source.unsplash.com/random/200x125/?cat", 
  title:"Testnyhet 2",
  description:"Beskrivning av testnyheten",
}]};
}

componentDidMount() {
fetch("https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=246b9ea9ce654437acefef97d7e29302")
 .then(function (response) {
   //gör något med det som kom tillbaka
return response.json()
} ).then( jsondata => {
//gör något med json-objektet
this.setState({ articles: jsondata.articles })
})
}

render() {
return (
  <Nyhetslista  
  minaArtiklar={this.state.articles}/>
    );
}
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista'



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
   if (response.status !==200) {
     throw Error( 'status:${response.status}');
     this.setState({
       articles:  [
   {
   title: "Något gick fel",
    description: 'Vi fick status ${response.status}',
    }
  ]})
}
   //gör något med det som kom tillbaka
return response.json()
} ).then( jsondata => {
//gör något med json-objektet
this.setState({ articles: jsondata.articles })
}).catch(error =>{
  this.setState({ 
    articles: [{
    urlToImage: "fejk.jpg",
    description: "Något gick fel. $(error.message)",
    }]
});
})
}

render() {
  return (
    <div className="App">
    <header className="App-header">
    <h2> Välkommmen till senaste nyheterna inom sjukvård och hälsa</h2>
    
    </header>
    <body>

    </body>
    <Nyhetslista  
    minaArtiklar={this.state.articles} />
  }}
  <footer className="App-footer">
  <p>Johanna Håkansson 2019</p>
  </footer>
  </div>

  );
}
}
  
export default App;
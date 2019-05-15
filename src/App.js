import React, { Component } from 'react';
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
throw Error( `status:${response.status}`);
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
<h1> Hälsosnack</h1>
<p> Här hittar du de allra senaste svenska nyheterna inom sjukvård och hälsa </p>

</header>

<Nyhetslista  
minaArtiklar={this.state.articles} />


</div>

);
}
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Nyhetslista from './components/Nyhetslista'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends Component {
constructor(props) {
super(props);
this.state = {
articles: []};
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
<h4> Här hittar du de allra senaste svenska nyheterna inom sjukvård och hälsa </h4>

</header>

<Nyhetslista  
minaArtiklar={this.state.articles} />


</div>



);
}
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(App);
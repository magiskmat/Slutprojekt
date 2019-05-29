import React, { Component } from 'react';
import './App.css';
import Nyhetslista from './components/Nyhetslista'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

//kör den versionen av constructor som finns i Reacts components
class App extends Component {
  constructor(props) {
    super(props);
    //egen komponent
    this.state = {
      articles: []
    };


  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=se&category=health&apiKey=246b9ea9ce654437acefef97d7e29302")
      .then(function (response) {
        if (response.status !== 200) {
          throw Error(`status:${response.status}`);
        }
        //gör något med det som kom tillbaka
        return response.json()
      }).then(jsondata => {
        //gör något med json-objektet
        this.setState({ articles: jsondata.articles })
      }).catch(error => {
        //visa felmeddelande om det blir något fel med setState
        this.setState({
          articles: [{
            urlToImage: "fejk.jpg",
            description: "Något gick fel. $(error.message)",
          }]
        });
      })
  }

  //funktion för att firebase ska fungera
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <div>

            {
              //Knapp för att logga in och ut med Google
              user
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>

            }
          </div>
          <h1> Hälsosnack</h1>
          <h4> Här hittar du de allra senaste svenska nyheterna inom sjukvård och hälsa </h4>
        </header>

        <Nyhetslista
          //skickar ner props och skapar eget attribut
          minaArtiklar={this.state.articles} />
      </div>


    );
  }
}
//Firebase Authentication funktion
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),

};


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
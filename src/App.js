
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useState } from 'react';



const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      const user = result.user;
      setUser(user)
      
    })
    .catch(error =>{
      console.error('error', error)
    })
  
  }

  const handleGitHubSignIn = () => {

    signInWithPopup(auth, gitHubProvider)
    .then((result) =>{
      const user = result.user;
      setUser(user)
    })
    .catch((error)=>{
      console.error('error', error)
    })
  }

  const handleSignOut = () => {
      signOut(auth)
      .then(()=>{
        setUser({})
      })
      .catch((error)=>{
        setUser({})
      })
  }

  return (
    <div className="App">

      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button> 
        <button onClick={handleGitHubSignIn}>Sign in with GitHub</button> 
        
        </>
      }

      <h1>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;

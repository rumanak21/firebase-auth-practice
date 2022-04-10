
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from 'react';



const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error =>{
      console.error('error', error)
    })



    
  }

  return (
    <div className="App">

      <button onClick={handleGoogleSignIn}>Sign in with Google</button>

      <h1>{user.displayName}</h1>
      <img src={user.photoURL} alt="" srcset="" />

    </div>
  );
}

export default App;

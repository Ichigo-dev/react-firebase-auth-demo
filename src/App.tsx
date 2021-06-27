import React, { useState, useEffect } from 'react';

import firebase from './firebase'

import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
      firebase.auth().onIdTokenChanged(res => {
          setUser(res)
        })
    })

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  const logout = () => {
    firebase.auth().signOut()
  }

  const GoogleBtn = user ?
        <button onClick={ logout }>GoogleLogout</button>
       :
        <button onClick={ login }>GoogleLogin</button>

  return (
    <div className="App">
      <p>UID: { user && user.displayName }</p>

      { GoogleBtn }
      </div>
  );
}

export default App;

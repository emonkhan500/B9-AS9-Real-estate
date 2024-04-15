import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext=createContext(null)
const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

  // user creare
const createUser= (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}


// update User
const updateUserProfile=(name,image)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:image
    })
}


// google Login

const googleLogin=()=>{
  return signInWithPopup(auth,googleProvider)
}

// githublogin

const githubLogin=()=>{
    return signInWithPopup(auth,githubProvider)
}

//   sign in

const Login=(email,password)=>{
    
  return signInWithEmailAndPassword(auth,email,password)
}

//   signOut

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
    }
    
    // observe
useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
  console.log('inside ',currentUser)
  setUser(currentUser)
  setLoading(false)
      })
      return ()=>{
          unSubscribe()
      }
  },[])

// prop passing
const authInfo={
    createUser,
    user,
    logOut,
    Login,
    loading,
    googleLogin,
    githubLogin,
    updateUserProfile
}
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
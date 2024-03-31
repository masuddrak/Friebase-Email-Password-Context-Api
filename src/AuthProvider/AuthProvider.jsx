import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Friebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { users, createUser,signInUser }

    useEffect(()=>{
      const unSuscribe= onAuthStateChanged(auth, (user) => {
              setUsers(user)
          });
          return ()=>{
            unSuscribe()
          }
    },[])
    console.log(users)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}
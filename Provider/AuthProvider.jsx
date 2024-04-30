import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebgase";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign UP
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in {login}

  const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  // log out

      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };


    //   onAuthStateChange

        useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (usr)=> {
            console.log(`value of usr : `, usr);
            setUser(usr);
            setLoading(false)
          });
          return () => {
            unSubscribe();
          };
        }, []);

        // handle sorting
        


  const authInfo = {
    creatUser,
    loading,
    signInUser,
    logOut,
    user
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

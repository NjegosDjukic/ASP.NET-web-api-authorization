import React, { createContext, useEffect } from 'react'
//import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export const UserContext = createContext();

export const UserProvider = ({children}) => {
const auth = getAuth();
  //const [ user, loading ] = useAuthState(auth);

  useEffect(() => {
    axios.interceptors.request.use(
      async (config) => {
        if (config && config.headers) {
          const token = await getAuth().currentUser?.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );
  }, []);

  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass).then((res) => console.log(res));
  };

  const logout = () => auth.signOut();

return (
    <UserContext.Provider value={{login, logout}}>
        {children}
    </UserContext.Provider>
)
}
export default UserProvider;
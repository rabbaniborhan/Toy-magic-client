/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const user = "i love you rumi";
  const authInfo = {
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isUserAuthorised, setIsUserAuthorised] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserAuthorised, setIsUserAuthorised }}>
      {props.children}
    </AuthContext.Provider>
  );
};

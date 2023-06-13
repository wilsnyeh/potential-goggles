import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login( {setLoggedIn} ) {
  const handleLoginClick = () => {
    setLoggedIn(true);
    navigate('/dash')
  };

  const navigate = useNavigate()


  return (
    <>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button onClick={handleLoginClick}>login</button>
    </>
  );
}

export default Login;

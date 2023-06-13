import { useNavigate } from "react-router-dom";

function Logout({ setLoggedIn }) {
  const handleLogoutClick = () => {
    setLoggedIn(false);
    navigate('/')
  };
  const navigate = useNavigate()
  return <button onClick={handleLogoutClick}> logout</button>;
}

export default Logout;

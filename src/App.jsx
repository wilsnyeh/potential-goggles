import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import ProvideAuth from "./ProvideAuth";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ProvideAuth>
      <div className="App">
        <Routes>
          {!loggedIn ? (
            <>
              <Route
                path="/"
                element={<Login setLoggedIn={setLoggedIn} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/dash"
                element={
                  <>
                    <Logout setLoggedIn={setLoggedIn} />
                    <Dashboard />
                  </>
                }
              />
            </>
          )}
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;

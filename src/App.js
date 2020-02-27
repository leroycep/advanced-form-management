import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import OnboardingForm from "./components/Form";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <OnboardingForm addUser={addUser} />
      <div>
        {users.map(user => (
          <User {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;

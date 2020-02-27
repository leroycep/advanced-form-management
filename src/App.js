import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import OnboardingForm from "./components/Form";

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
          <pre>{JSON.stringify(user)}</pre>
        ))}
      </div>
    </div>
  );
}

export default App;

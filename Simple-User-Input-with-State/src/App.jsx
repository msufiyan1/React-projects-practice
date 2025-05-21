import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState("User");
  const [inputValue, setInputValue] = useState("");

  const changeUser = () => {
    setUser(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Hey There {user}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};

export default App;

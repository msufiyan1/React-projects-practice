import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState("User");
  const [inputValue, setInputValue] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  const changeUser = () => {
    setUser(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDynamicChange = isEditable ? handleInputChange : () => {};

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div>
      <h1>Hey There {user}!</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleDynamicChange}
        disabled={!isEditable}
      />

      <button onClick={changeUser}>Change User</button>
      <button onClick={toggleEditable}>
        {isEditable ? "Disable Editing" : "Enable Editing"}
      </button>
    </div>
  );
};

export default App;

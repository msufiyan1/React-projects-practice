import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Type something"
      />
      <button>Submit</button>
      <p>You typed: {user}</p>
    </div>
  );
};

export default App;

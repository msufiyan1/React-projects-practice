import React from 'react';

const App = () => {

  const submithandler = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log("Form submitted!");
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" placeholder="Enter something" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;

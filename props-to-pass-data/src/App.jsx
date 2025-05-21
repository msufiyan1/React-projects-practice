import React from 'react';
import Child from './Components/child';


const App = () => {
  const userData = [
    { name: "Alex Johnson", age: 25, city: "New York", profession: "Software Engineer" },
    { name: "Sophie Miller", age: 30, city: "Los Angeles", profession: "Graphic Designer" },
    { name: "Liam Smith", age: 28, city: "Chicago", profession: "Marketing Manager" },
    { name: "Emma Brown", age: 22, city: "Houston", profession: "Content Creator" },
    { name: "Noah Davis", age: 35, city: "Miami", profession: "Project Manager" }
  ];

  return (
    <div>
      <h1>User Info!</h1>
      {userData.map((user, index) => (
        <Child key={index} user={user} />
      ))}
    </div>
  );
};

export default App;

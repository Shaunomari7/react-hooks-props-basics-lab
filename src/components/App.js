import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const name = user.name
  const city = user.city
  const bio = user.bio
  const color = user.color
  const github = user.links.github
  const linkedin = user.links.linkedin


  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;

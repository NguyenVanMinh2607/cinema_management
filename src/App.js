import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./App.scss";
import { useScrollY } from "./Hooks/useScrollY";
import Menu from "./Router/Menu";
import route from "./Router/Route";

function App() {
  const [scrollY] = useScrollY();
  return (
    <div className="App">
      <Menu />
      {route()}
      {scrollY >= 100 && (
        <BsFillArrowUpCircleFill
          className="gotop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </div>
  );
}

export default App;

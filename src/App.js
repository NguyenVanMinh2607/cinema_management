import "./App.scss";
import Menu from "./Router/Menu";
import route from "./Router/Route";
import { useScrollY } from "./Hooks/useScrollY";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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

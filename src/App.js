import Menu from "./Router/Menu";
import route from "./Router/Route";

function App() {
  return (
    <div className="App">
      <Menu />
      {route()}
    </div>
  );
}

export default App;

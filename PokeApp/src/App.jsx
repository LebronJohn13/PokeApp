import TypesExample from "./NavbarComponent";
import MyComponent from "./PokeComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <nav>
        <TypesExample />
      </nav>
      <main>
        <MyComponent />
      </main>
    </>
  );
}

export default App;

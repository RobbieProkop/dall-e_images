import "./styles/main.scss";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

function App() {
  console.log("some console testing");
  return (
    <div className="App">
      <Header />

      <main>
        <Showcase />
      </main>
    </div>
  );
}

export default App;

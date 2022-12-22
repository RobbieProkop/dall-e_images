import "./styles/main.scss";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Image from "./components/Image";
import Spinner from "./components/Spinner";

function App() {
  console.log("some console testing");
  return (
    <div className="App">
      <Header />

      <main>
        <Showcase />
        <Image />
      </main>
      <Spinner />
    </div>
  );
}

export default App;

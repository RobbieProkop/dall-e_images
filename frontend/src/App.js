import "./styles/main.scss";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Image from "./components/Image";
import Spinner from "./components/Spinner";
import { useState } from "react";

function App() {
  const [spinner, setSpinner] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  return (
    <div className="App">
      <Header />

      <main>
        <Showcase
          spinner={spinner}
          setSpinner={setSpinner}
          setErrorText={setErrorText}
          setImageSrc={setImageSrc}
        />
        <Image errorText={errorText} imageSrc={imageSrc} />
      </main>
      <Spinner spinner={spinner} setSpinner={setSpinner} />
    </div>
  );
}

export default App;

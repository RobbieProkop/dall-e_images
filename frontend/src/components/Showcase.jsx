import { useState } from "react";
import "../styles/showcase.scss";

const Showcase = ({ spinner, setSpinner }) => {
  const [inputValue, setInputValue] = useState("");
  const [size, setSize] = useState("medium");

  const sizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateImageRequest = async (inputValue, size) => {
    setSpinner(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return alert("Please add a description");
    console.log([inputValue, size]);
    generateImageRequest(inputValue, size);
  };

  return (
    <section className="showcase">
      <form id="image-form" onSubmit={onSubmit}>
        <h1>What kind of Image do you want?</h1>
        <div className="form-control">
          <input
            type="text"
            id="prompt"
            placeholder="Describe an image"
            onChange={handleChange}
          />
        </div>

        {/* size */}
        <div className="form-control">
          <select name="size" id="size" onChange={sizeChange}>
            <option value="small">Small</option>
            <option value="medium" selected>
              Medium
            </option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </section>
  );
};
export default Showcase;

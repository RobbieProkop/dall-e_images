import { useState } from "react";
import "../styles/showcase.scss";

const Showcase = ({ setSpinner, setErrorText, setImageSrc }) => {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("medium");

  const sizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateImageRequest = async (prompt, size) => {
    try {
      setErrorText("");
      setSpinner(true);
      const response = await fetch(
        // figure out how to change this later to not include localhost
        "http://localhost:5000/openai/generateimage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
            size,
          }),
        }
      );

      if (!response.ok) {
        setSpinner(false);
        throw new Error("Image coundn't be generated");
      }

      const data = await response.json();
      // console.log("data", data);
      const imageUrl = data.data;
      setImageSrc(imageUrl);
      setSpinner(false);
    } catch (error) {
      setErrorText(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (prompt === "") return alert("Please add a description");
    console.log([prompt, size]);
    generateImageRequest(prompt, size);
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
            <option value="medium">Medium</option>
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

import "../styles/showcase.scss";

const Showcase = () => {
  return (
    <section>
      <form id="image-form">
        <h1>What kind of Image do you want?</h1>
        <div className="form-control">
          <input type="text" id="prompt" placeholder="Describe an image" />
        </div>

        {/* size */}
        <div className="form-control">
          <select name="size" id="size">
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

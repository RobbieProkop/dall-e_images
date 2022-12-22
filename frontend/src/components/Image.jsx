const Image = ({ errorText, imageSrc }) => {
  console.log(errorText);
  return (
    <section className="image">
      <div className="image-container">
        <h2 className="msg"></h2>
        <img src={imageSrc} alt="" id="image" />
      </div>
    </section>
  );
};
export default Image;

import "../styles/spinner.scss";

const Spinner = ({ spinner, setSpinner }) => {
  return <div className={`showcase ${spinner ? "show" : ""}`}></div>;
};
export default Spinner;

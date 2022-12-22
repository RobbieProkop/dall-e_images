import "../styles/spinner.scss";

const Spinner = ({ spinner, setSpinner }) => {
  return <div className={`spinner ${spinner ? "show" : ""}`}></div>;
};
export default Spinner;

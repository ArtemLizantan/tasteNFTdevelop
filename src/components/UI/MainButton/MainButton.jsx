import "./main-button.scss";

const MainButton = (props) => {
  const main = props.main ? "main" : "primary";

  return (
    <button className={`main-button ${main}`} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default MainButton;

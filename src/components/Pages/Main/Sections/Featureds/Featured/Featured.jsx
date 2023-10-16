import "./featured.scss";
const Featured = (props) => {
  return (
    <div className="featured">
      <div className="featured__body">
        <div className="featured__top">
          <img src={props.img} alt="" />
        </div>
        <div className="featured__center">
          <h3 className="featured__name">{props.name}</h3>
          <a href="#/" className="featured__username">
            {props.username}
          </a>
        </div>
        <div className="featured__bottom">
          <span>{props.sales}</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;

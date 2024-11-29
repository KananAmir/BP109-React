import "./index.css";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Card;

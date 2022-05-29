import PropTypes from "prop-types";

// In this component we're passing 2 destructured PROPS, one called 'color' and one called 'text', we use INLINE CSS with double curly brackets and then pass the 'color' PROP
const Button = ({ color, text, onClick }) => {
  // const onClick = () => {
  //   console.log("click");
  // };
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
        {text}
      </button>
    </div>
  );
};

// Button.defaultProp = {
//   color: "steelblue",
// };

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  Onclick: PropTypes.func,
};

export default Button;

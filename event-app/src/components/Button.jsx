import PropTypes from "prop-types";

export function Button({ children, type }) {
  return (
    <button type={type} className={`submitBtn`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  isDisabled: true,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

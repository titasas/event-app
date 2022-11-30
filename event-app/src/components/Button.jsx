import PropTypes from "prop-types";

export function Button({ children, version, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`submitBtn ${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "btnEnabled",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

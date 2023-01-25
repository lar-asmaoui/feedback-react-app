import React from "react";
import PropsTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    );
}

Button.propsTypes = {
    children: PropsTypes.node.isRequired,
    version: PropsTypes.string,
    type: PropsTypes.string,
    isDisabled: PropsTypes.bool,
};

Button.defaultProps = {
    version: "primary",
    type: "submit",
    isDisabled: false,
};

export default Button;

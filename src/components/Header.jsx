import React from "react";

function Header({ bgColor, textColor }) {
    return (
        <header style={{ backgroundColor: bgColor, color: textColor }}>
            <div className="container">
                <h2>Feedback UI</h2>
            </div>
        </header>
    );
}

Header.defaultProps = {
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

export default Header;

import React from "react";
import "../../styles/button.css"

function Button({children}) {
    return (
        <button>{ children }</button>
    )
}

export default Button
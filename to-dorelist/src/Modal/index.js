import React from "react";
import "./Modal.css"
import ReactDOM from "react-dom";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
        {children}
        </div>,
        document.getElementById("modal"),
    )
}

export {Modal}
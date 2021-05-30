import React from "react";

import closeBtn from "../../assets/svgs/close_btn.svg";

import "./modal.css";
function Modal(props) {
  return (
    <div className={props.visible ? "modal visible" : "modal"}>
      <div className="modal-content">
        <img
          src={closeBtn}
          alt="Botão para fechar modal"
          className="close-button"
          onClick={() => props.onClose()}
        />

        {props.children}
      </div>
      <label className="modal-close" onClick={() => props.onClose()}></label>
    </div>
  );
}

export default Modal;

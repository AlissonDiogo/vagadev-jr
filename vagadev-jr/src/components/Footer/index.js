import React from "react";

import logo from "../../assets/img/logo_header.png";

import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="left-part">
        <img src={logo} alt="Logo agência N1" />
      </div>
      <div className="right-part">
        Agência N1 - Todos os direitos reservados
      </div>
    </div>
  );
}

export default Footer;

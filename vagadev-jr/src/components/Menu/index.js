import React from "react";

import "./menu.css";
function Menu(props) {
  const renderRows = () => {
    let newArray = [];
    let cont = 0;

    //saber qual o maior número de itens em uma coluna

    let maxColumn = 0;
    props.data.map((item) => {
      if (item.itens.length > maxColumn) {
        maxColumn = item.itens.length;
      }
    });
    //iterar cada posição e inserir de acordo com a coluna

    while (cont < maxColumn) {
      let itens = [];

      props.data.forEach((item) => {
        itens.push(item.itens[cont]);
      });
      newArray.push(itens);
      cont++;
    }
    return newArray;
  };

  return (
    <div
      className="float-menu"
      style={props.visible ? { display: "block" } : { display: "none" }}
    >
      <table>
        <thead>
          <tr>
            {props.data.map((item, index) => {
              return <th key={index}>{item.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {renderRows().map((item, index) => {
            return (
              <tr key={index}>
                {item.map((item2, index2) => {
                  return <td key={index2}>{item2}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="list-container">
        {props.data.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <ul>
                {item.itens.map((item2, index2) => (
                  <li key={index2}>{item2}</li>
                ))}
              </ul>
              {index < props.data.length - 1 ? (
                <div className="divisor"></div>
              ) : null}
            </div>
          );
        })}
        <ul></ul>
      </div>
    </div>
  );
}

export default Menu;

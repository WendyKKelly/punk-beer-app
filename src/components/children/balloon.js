import React from "react";
import "./balloon.css";

const initialState = {
  inputValue: ""
};

const Context = React.createContext(initialState);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

const Balloon = (props) => {


  return (
    <div className="box" >
      <div id="balloon">
      <div className="text"><Consumer> {context => <p>Welcome {context.val}</p>}</Consumer></div></div>
    </div>
  );

}
export default Balloon

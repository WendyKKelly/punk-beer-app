import React from "react";
import Balloon from './balloon';


const initialState = {
  inputValue: ""
};

const Context = React.createContext(initialState);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

const Name = (props) => {


  return (
    <div className="movies">
    <Consumer>
    {({ val, onUserInput }) => (
    <form className="search">
      <label>
      Name:
      <input
        value={val}
        onChange={e => onUserInput(e.target.value)}
        type="text" />
      </label>
      <input type="submit" value="NAME" />
    </form>
  )}
</Consumer>
  </div>
  );
}




export default Name;

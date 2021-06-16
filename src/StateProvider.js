/** @format */

import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

// provide data layer to the whole app
function StateProvider({ reducer, initialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}
// fetch info from data layer
export default StateProvider;
export const useStateValue = () => useContext(StateContext);

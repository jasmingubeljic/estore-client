import { createContext, useReducer, useMemo } from "react";

export const Context = createContext();

const initialVal = {
  products: [],
};

const reducer = (state, action) => {
  if (action.type === "SET_PRODUCTS") {
    console.log("SET_PRODUCTS", action.payload);
    return {
      products: action.payload,
    };
  }
  if (action.type === "ADD_MORE_PRODUCTS") {
    return {
      products: [...state.products, ...action.payload],
    };
  }

  if (action.type === "SEARCH_PRODUCTS") {
    console.log("action payload: ", action.payload);
    return {
      products: [...action.payload],
    };
  }
  return state;
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialVal);

  const value = useMemo(() => {
    return { state, dispatch };
  });
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;

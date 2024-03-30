import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "DROP":
      let empArray = [];
      return empArray;

    case "UPDATE":
      let arr = [...state];
      return arr.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            qty: parseInt(item.qty) + parseInt(action.qty), // Add the new quantity to the existing quantity
            price: action.price, // Update the price if needed
          };
        }
        return item;
      });

    default:
      console.log("Error in Reducer");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

// Two context objects are created: CartStateContext and CartDispatchContext. These will be used to provide and consume the state and dispatch functions respectively.

// A reducer function is defined to handle state updates based on different actions (ADD, REMOVE, DROP, UPDATE). The reducer takes the current state and an action, and returns a new state based on the action type.

// The CartProvider component is created to wrap the application and provide the cart state and dispatch function to its children using the CartStateContext.Provider and CartDispatchContext.Provider.

// Inside the CartProvider, the useReducer hook is used to create a state and a dispatch function based on the reducer function defined earlier. The initial state is an empty array [].

// Two custom hooks are defined: useCart and useDispatchCart. These hooks use the useContext hook to consume the cart state and dispatch function from the respective context objects.

// Overall, this setup allows components within the application to access and modify the shopping cart state without having to pass props down manually through multiple levels of the component tree.

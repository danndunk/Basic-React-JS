import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isSub: false,
  user: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SUBSCRIBED_SUCCESS":
      return {
        isSub: true,
        user: payload,
      };
    case "NOT_SUBSCRIBED":
      return {
        isSub: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

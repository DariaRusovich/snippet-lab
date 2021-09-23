import { useReducer, useEffect, useContext, createContext } from "react";
import { getSnippets } from "../api/api";

const initialState = [];

const SnippetsContext = createContext(initialState);

export function useSnippets() {
  return useContext(SnippetsContext);
}

export function SnippetsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async function () {
      const [snippets, snippetsError] = await getSnippets();
      console.log(snippets);

      if (snippets) {
        dispatch({ type: "INIT", payload: snippets });
      }
    })();
  }, []);
  return (
    <SnippetsContext.Provider value={[state, dispatch]}>
      {children}
    </SnippetsContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.payload;
    }
    case "ADD": {
        return [...state, action.payload];
    }
    
    default:
      throw new Error(`Wrong action type (${action.type})`);
  }
}

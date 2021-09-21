import { useReducer, useEffect, useContext, createContext } from "react";
import { getCats } from "../api/api";

const initialState = [];

const CategoriesContext = createContext(initialState);

export function useCategories() {
  return useContext(CategoriesContext);
}

export function CategoriesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async function () {
      const [cats, catsError] = await getCats();
      console.log(cats);

      if (cats) {
        dispatch({ type: "INIT", payload: cats });
      }
    })();
  }, []);
  return (
    <CategoriesContext.Provider value={[state, dispatch]}>
      {children}
    </CategoriesContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.payload;
    }
    case "ADD": {
        return [...state, action.payload];
    //   console.log(state);
    //   console.log(action.payload.name);
    //   const catUnique = state.find((cat) => cat.name === action.payload.name);
    //   console.log(catUnique);

    //   if (!catUnique) {
       
    //   } else {
    //     return state;
    //   }
    }
    default:
      throw new Error(`Wrong action type (${action.type})`);
  }
}

import { useReducer, useEffect, useContext, createContext } from 'react'

const initialState = []

const SnippetsContext = createContext(initialState)

export function useSnipets() {
    return useContext(SnippetsContext)
}

export function SnippetsProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <SnippetsContext.Provider value={[state, dispatch]}>{children}</SnippetsContext.Provider>
}

function reducer(state, action) {
    switch (action.type) {
        case '' :{
            return
        }
        default:
          throw new Error (`Wrong action type (${action.type})`)
    }
}
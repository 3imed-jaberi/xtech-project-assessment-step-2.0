// Context API Factory //
import React from 'react'
import { useImmerReducer } from 'use-immer'

export function Factory(initialState, reducer) {
  const Store = React.createContext(initialState)
  const Provider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(reducer, initialState)
  
    return (
      <Store.Provider value={{ state, dispatch }}>
        {children}
      </Store.Provider>
    )
  }

  const useSotre = () => React.useContext(Store)
  const useDispatch = () => useSotre().dispatch
  const useSelector = (selectorHandler) => selectorHandler(useSotre().state)

  return {
    Store,
    Provider,
    useDispatch,
    useSelector
  }
}

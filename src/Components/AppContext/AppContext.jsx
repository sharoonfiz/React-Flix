import React, { createContext, useReducer } from 'react'
import { initialState } from '../AppReducer/AppReducer'
import { reducerCallBack } from '../AppReducer/AppReducer'

export const AppDataContext = createContext()

const AppContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducerCallBack, initialState)

    const contextValue = { state, dispatch }

    return (
        <div>
            <AppDataContext.Provider value={contextValue}>
                {children}
            </AppDataContext.Provider>
        </div>
    )
}

export default AppContext
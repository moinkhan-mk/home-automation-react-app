import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
 
//Initial State
const initialState = {
    firstName : '',
    lastName : '',
    email:'',
    password:'' 
}

//Create Context object
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const updateFirstName = (input) => {
        dispatch({
            type:'UPDATE_FIRSTNAME',
            payload:input
        })
    }
    const updateLastName = (input) => {
        dispatch({
            type:'UPDATE_LASTNAME',
            payload:input
        })
    }
    const updateEmail = (input) => {
        dispatch({
            type:'UPDATE_EMAIL',
            payload:input
        })
    }
    const updatePassword = (input) => {
        dispatch({
            type:'UPDATE_PASSWORD',
            payload:input
        })
    }
    return(
       <GlobalContext.Provider value = {{
                state,
                updateFirstName,
                updateLastName,
                updateEmail,
                updatePassword
        }}>

        {children}

        </GlobalContext.Provider>
    )
}

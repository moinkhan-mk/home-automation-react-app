import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
 
//Initial State
const initialState = {
    Btn1_status : '',
    Btn2_status : '',
    Btn3_status : '' 
}

//Create Context object
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const updateBtn_1 = (input) => {
        dispatch({
            type:'UPDATE_BTN1',
            payload:input
        })
    }
    const updateBtn_2 = (input) => {
        dispatch({
            type:'UPDATE_BTN2',
            payload:input
        })
    }
    const updateBtn_3 = (input) => {
        dispatch({
            type:'UPDATE_BTN3',
            payload:input
        })
    }
    const setPiData = () => {
        console.log(state)
        dispatch({
            type:'SETPIDATA'
        })
    }
    return(
       <GlobalContext.Provider value = {{
                state,
                updateBtn_1,
                updateBtn_2,
                updateBtn_3,
                setPiData 
        }}>

        {children}

        </GlobalContext.Provider>
    )
}

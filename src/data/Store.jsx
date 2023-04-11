import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: "Contexto API + Hooks"
}
export const appContext = React.createContext(initialState)

const Store = props => {
    const [state,setState]= useState(initialState)
    function updateState(key, value){
        setState({
            ...state,
            [key]:value
        })
    }
    return (
        <appContext.Provider value={{
            number:state.number,
            text: state.text,
            setNumber: n=> updateState("number", n),
            setText: t=> updateState("text", t),

        }}>
            {props.children}
        </appContext.Provider>
    )
}
export default Store
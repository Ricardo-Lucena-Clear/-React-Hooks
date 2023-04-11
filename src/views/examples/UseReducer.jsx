import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'




const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem Usuario</span>
                }

                <span className="text">{state.number}</span>
            </div>
            <button className="btn"
                onClick={() => dispatch({ type: "login", name: "Maria" })}>Login</button>

            <button className="btn"
                onClick={() => dispatch({ type: "add2" })}>+2</button>

            <button className="btn"
                onClick={() => dispatch({ type: "mult7" })}> * 7 </button>

            <button className="btn"
                onClick={() => dispatch({ type: "div25" })}> / 25 </button>

            <button className="btn"
                onClick={() => dispatch({ type: "NumInt" })}>Inteiro</button>

            <button className="btn"
                onClick={() => dispatch({ type: "NumADD", payload: -9 })}>- 9</button>

            <button className="btn"
                onClick={() => dispatch({ type: "NumADD", payload: +9 })}>+ 9</button>

        </div>
    )
}

export default UseReducer

import React, { useReducer } from 'react'

type Action = { type: "INCREASE" } | { type: "DECREASE" }

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'DECREASE':
            return state - 1;
        case 'INCREASE':
            return state + 1
        default:
            throw new Error("check action type")
    }

}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
    const onIncrese = () => dispatch({ type: 'INCREASE' })
    const onDecrese = () => dispatch({ type: 'DECREASE' })
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrese}> +1</button>
                <button onClick={onDecrese}> +1</button>
            </div>
        </div>
    )
}

export default Counter
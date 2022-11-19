import React from "react"

export function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            You have clicked the button {count} times!
        </button>
    )
}
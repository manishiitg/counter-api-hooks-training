import React, { useState } from 'react';

function useCounter(initState){
    let [count, setCount] = useState(initState)

    const updateCount = () => {
        setCount(count + 1)
    }

    return {
        count,
        updateCount
    }
}

export default useCounter
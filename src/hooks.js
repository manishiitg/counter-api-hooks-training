import React, { useState, useEffect } from 'react';

function useCounter(initState){
    let [count, setCount] = useState(initState)

    let [loading, setLoading] = useState(false)

    let [dummyState, updateDummyState] = useState(false)

    const toggleDummyState = () => {
        console.log("toggle dummy state")
        dummyState = updateDummyState(!dummyState)

    }
    useEffect( () => {
        console.log("only for this dummy state")
    }, [dummyState])

    const updateCount = () => {
        // setCount(count + 1)
        getData()
    }

    const getData = () => {
        console.log("api loading...")
        setLoading(true)
        fetch('https://api.countapi.xyz/hit/etechtrainig/counter')
        .then( (response) => {
            response.json().then( (data) => {
                console.log(data)
                setCount(data.value)
                setLoading(false)
            })
            
        })
        .then( (data) => {
            setLoading(false)
            console.error(data)
        });
    }

    useEffect( () => {
        console.log("should run only single time")
        getData()
    }, [])
    // above will run only one single time

    return {
        count,
        updateCount,
        loading,
        toggleDummyState
    }
}

export default useCounter
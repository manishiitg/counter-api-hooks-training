import React, { useState, useEffect } from 'react';

function useCounter(initState){
    let [count, setCount] = useState(initState)

    let [loading, setLoading] = useState(false)

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
        getData()
    }, [])

    return {
        count,
        updateCount,
        loading
    }
}

export default useCounter
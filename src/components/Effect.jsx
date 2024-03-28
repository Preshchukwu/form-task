import { useEffect, useState } from "react"


const Effect = ()=>{
    const [count, setCount] = useState(0)
    const [trigger, setTrigger] = useState(2)

    useEffect(()=>{
        setTimeout(setCount((count)=>count + 1), 1000)
    }, [trigger]

    )
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setTrigger((trigger)=> trigger * 2)}}>Trigger</button>
            <h1>Multiplication is {trigger}</h1>
        </>
    )
}

export default Effect
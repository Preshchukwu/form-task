import { useEffect, useState } from "react"
import Card from "./Card"


export const Lamp = () => {
    const [result, setResult] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData =async () =>{
        try {
             let resp = await fetch("https://660e662c6ddfa2943b36a815.mockapi.io/api/1/apiCall")

             let userData = await resp.json()
             console.log(userData);
             setResult(userData)

             
            
        } catch {
            (err)=>{
               return console.log(err);
            }
        }
            
        }

    return(

        <div>
            <h1>useEffect example</h1>

            {
                result.map((user)=>{
                    return(
                        <Card name={user.name} email={user.email}></Card>
                    )
                })
            }
        </div>
    )
}


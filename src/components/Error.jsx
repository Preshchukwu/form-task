import {Link} from "react-router-dom"

const Error = ()=>{
    return(
        <>
            <div>
                <h1>404 page</h1>
                <Link to={"/"}>
                    <button>Go home</button>
                </Link>
            </div>
        </>
    )
}
export default Error
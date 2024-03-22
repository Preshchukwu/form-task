

import { useState } from "react"

const Form = ()=>{
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        gender: "",
        password: ""
    })

    const handleForm= (e)=>{
        e.preventdefault()
    }

    const handleChange = ()=>{
        const name = e.target.name
        const  value = e.target.value

        setUserDetail()
    }

    return(
        
        <div className="formContainer">

            <h2>Sign Up </h2>
            <form onSubmit={handleForm}>
                <div className="inputContainer">
                    <label htmlFor="firstName"> Enter Your First Name</label>
                    <input type="text" id="firstName" placeholder="Enter Your Name" name="firstName" onChange={handleChange} value={userDetail.firstName} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="lastName"> Enter Your Last Name</label>
                    <input type="text" id="lastName" placeholder="Enter Your Last Name" name="lastName" onChange={handleChange} value={userDetail.lastName} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="email"> Enter Your Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={userDetail.email}/>
                </div>

                <div className="inputContainer">
                    <label htmlFor="userName"> Enter Your User Name</label>
                    <input type="text" id="userName" placeholder="Enter Your User Name" name="userName" onChange={handleChange} value={userDetail.userName} />
                </div>

                {/* <div className="inputContainer">
                    <label htmlFor="gender"> Select Your Gender</label>
                    <select name="Gender" id="gender">
                        <option value="male"> Male</option>
                        <option value="female"> Female</option>
                    </select>
                </div> */}

                <div className="inputContainer">
                    <label htmlFor="password"> Enter Your Password</label>
                    <input type="password" id="password" placeholder="Enter Your Password" name="password" onChange={handleChange}  value={userDetail.password}/>
                </div>

                <div className="buttonContainer">
                    <button>Submit</button>
                </div>
            </form>

            <p>first name: {userDetail.firstName}</p>
            <p>last name: {userDetail.lastName}</p>
            <p>email: {userDetail.email}</p>
            <p>user name: {userDetail.userName}</p>
            <p>gender: {userDetail.gender}</p>
            <p>password: {userDetail.password}</p>
        </div>
    )
}

export default Form
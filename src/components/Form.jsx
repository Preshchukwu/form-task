import formStyle from './Form.module.css'

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

    const handleChange = (e)=>{
        const name = e.target.name
        const  value = e.target.value

        setUserDetail((prevState)=>({
            ...prevState,
            [name]: value
        }))

    }



    const [page, setPage] = useState(true)

    const toggle = ()=>{
        const presentState = page
        setPage(!presentState)
    }


    const auth = ()=>{
        if(
            userDetail.firstName === "" ||
            userDetail.lastName === "" ||
            userDetail.email === "" ||
            userDetail.userName === "" ||
            userDetail.password === "" 
        ){
            alert(`Provide All Details`)
        }else if(
            userDetail.password.length < 5
        ){
            alert(`Password too short`)
        }else{
            alert(`Welcome!!!`)
        }
    }

    return(

        <div className={formStyle.parentContainer}>

            <div className="buttonDiv">
                <button style={{backgroundColor:`black`, color: `white`, padding: `1rem`}} onClick={()=>{toggle()}}> {page ? `Close Form` : `View Form`}</button>
            </div>

            {page ? <div className={formStyle.formContainer}>
            
                <div className={formStyle.topContainer}>
                    
                    <h2>Sign Up </h2>

                    <form className={formStyle.formHouse} onSubmit={handleForm}>
                        <div className={formStyle.inputContainer}>
                            {/* <label className='labelSelect' htmlFor="firstName"> Enter Your First Name</label> */}
                            <input type="text" id="firstName" placeholder="Enter Your Name" name="firstName" onChange={handleChange} value={userDetail.firstName} />
                        </div>

                        <div className={formStyle.inputContainer}>
                            {/* <label className='labelSelect' htmlFor="lastName"> Enter Your Last Name</label> */}
                            <input type="text" id="lastName" placeholder="Enter Your Last Name" name="lastName" onChange={handleChange} value={userDetail.lastName} />
                        </div>

                        <div className={formStyle.inputContainer}>
                            {/* <label className='labelSelect' htmlFor="email"> Enter Your Email</label> */}
                            <input type="email" id="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={userDetail.email}/>
                        </div>

                        {/* <div className={formStyle.inputContainer}>
                            <label htmlFor="userName"> Enter Your User Name</label>
                            <input type="text" id="userName" placeholder="Enter Your User Name" name="userName" onChange={handleChange} value={userDetail.userName} />
                        </div> */}

                        <div className={formStyle.inputContainer}>
                            {/* <label id='labelSelect' htmlFor="password"> Enter Your Password</label> */}
                            <input type="password" id="password" placeholder="Enter Your Password" name="password" onChange={handleChange}  value={userDetail.password}/>
                        </div>


                        <div className={formStyle.inputContainer}>
                            <label  htmlFor="gender"> Select Your Gender</label>
                            <select name="gender" id="gender" value={userDetail.gender} onChange={handleChange}>
                                <option value=""> </option>
                                <option value="male"> Male</option>
                                <option value="female"> Female</option>
                            </select>
                        </div>

                        <div className={formStyle.buttonContainer}>
                            <button type="submit" onClick={auth}>Submit</button>
                        </div>
                    </form>
                </div>

                <div className={formStyle.bottomContainer}>
                    <h2>Display </h2>
                    <div className={formStyle.textContainer}>
                            <p>First name: {userDetail.firstName}</p>
                            <p>Last name: {userDetail.lastName}</p>
                            <p>Email: {userDetail.email}</p>
                            {/* <p>User name: {userDetail.userName}</p> */}
                            <p>Gender: {userDetail.gender}</p>
                            <p>Password: {userDetail.password}</p>
                    </div>
                </div>
            </div> : "" }
            
        </div>
        
        
    )
}

export default Form
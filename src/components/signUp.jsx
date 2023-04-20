import { Link ,useNavigate} from "react-router-dom";
import "../styles/signup.css"
import {useRef } from "react";
import axios from "axios";

const SignUp = () => {
    let navigate=useNavigate()
    let name=useRef()
    let email=useRef()
    let password=useRef()
    let confirmpassword=useRef()

    let handlesubmit=(e)=>{
    e.preventDefault()
    let data={
        name:name.current.value,
        email:email.current.value,
        password:password.current.value,
        confirmpassword:confirmpassword.current.value
    }
    // console.log(data);
if (data.name && data.email && data.password && (data.password==data.confirmpassword)) {
    axios.post("http://localhost:4000/signup",data)
.then((res)=>{
    alert(res.data.message) //message from backend
    navigate('/') // naviagte to signin page
})
} else {
    alert("invalid credentials")
}
    }
    return (

        <div  className="SignUp">


            <div id="shade" className="signupform d-flex  align-items-center justify-content-center ">

                <div id="form" className="form w-25 m-5">

                    <h1>Sign Up</h1>

                    <form action="" onSubmit={handlesubmit}>

                        <div className="name">

                            <input type="text" name="name" ref={name} class=" my-3 w-100 " id="exampleFormControlInput1" placeholder="👨Your Name" />

                            {/* <input type="text" class=" " placeholder="Your Name" /> */}

                            {/* form-control my-3 w-100 bg-transparent border-none */}

                            {/* <input type="email" class="form-control  my-3 w-100 " id="exampleFormControlInput1" placeholder="Your Name" /> */}
                        </div>

                        <div className="email">

                            <input type="email" name="email" ref={email} class=" my-3 w-100" id="exampleFormControlInput1" placeholder="📩Your Email" />

                        </div>

                        <div className="password">
                            <input type="password" name="password" ref={password} class=" my-3 w-100 " placeholder="🔒 Password" />
                        </div>

                        <div className="confirmpassword">
                            <input type="password" name="confirmpassword" ref={confirmpassword} class=" my-3 w-100 " placeholder="🔐 Repeat Your Password" />

                        </div>


                       {/* <div className="d-flex align-content-center justify-content-center">

                       <input type="checkbox"></input>
                        <label style={{textAlign:"center",textsize:"1px"}}  for="t&c" >I agree all statements in Terms of service</label>
                       </div> */}


                        <div className="button">
                            <button className="btn btn-primary m-1">Sign-up</button>
                        </div>

                    </form>


                </div>
                <div className="img mx-5 text-center ">
                    <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />


                    <div className="links">
                        <Link className=" " to={"/"} href="">I am already a member</Link>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default SignUp;
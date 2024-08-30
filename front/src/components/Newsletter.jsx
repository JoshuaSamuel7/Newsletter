import React, { useState } from "react";
import './sign-in.css';
import logo from './logo.png';
import axios from 'axios';
function Newsletter() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState("");
    const [email, setEmail] = useState('');
    const [address,setAddress]=useState('');
    const [ph,setph]=useState('');
    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://newsletter-server-woad.vercel.app/signup",{first,last,email,address,ph})
        .then(response=>{
            alert("Signup Successful")
            console.log(response.data);
        })
        .catch(err=>{console.log(err);
        })
    }
    return (
        <main className="form-signin w-100 m-auto">
            <form method="post" onSubmit={handleSubmit}>
                <img className="mb-4 justify-content-center logo " src={logo} alt="LOGO" />
                <h1 className="h4 mb-3 fw-normal">Sign up to my Newsletter</h1>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="First Name" name="first"  onChange={(e)=>{setFirst(e.target.value)}}/>
                    <label htmlFor="floatingPassword">First Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Last Name" name="last" onChange={(e)=>{setLast(e.target.value)}} />
                    <label htmlFor="floatingPassword">Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Address" name="address"  onChange={(e)=>{setAddress(e.target.value)}}/>
                    <label htmlFor="floatingPassword">Address</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Phone number" name="ph" maxLength={10} onChange={(e)=>{setph(e.target.value)}}/>
                    <label htmlFor="floatingPassword">Phone Number</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-body-secondary text-center">&copy;Joshua</p>
            </form>
        </main >
    )
}
export default Newsletter;
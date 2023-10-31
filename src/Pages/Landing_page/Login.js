import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import API_URL from '../../Config';

export default function Login() {

    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    const [wep, setwep] = useState("")
    const [wpass, setwpass] = useState("")

    const [cep, setcep] = useState("")
    const [cpass, setcpass] = useState("")

    const wlogin = async (e) => {
        e.preventDefault();
        const workerdata = {
            "emailorphone": wep,
            "password": wpass,
        };

        try {
            const res = await axios.post(`${API_URL}/quick_handy/worker_info/checklogin`, workerdata);
            if (res.data >= 0) {
                // Set the userData in the context
                setUserData({ 
                    id: res.data, 
                    emailorphone: wep, 
                    password: wpass,
                    type:'worker',
                });
                navigate('/worker');
            } else {
                alert("Invalid credentials, please try again");
            }
        } catch (error) {
            alert('Login failed. Please try again.');
        }

        setwep("");
        setwpass("");
    };


    const clogin = async (e) => {
        e.preventDefault();
        const customerdata = {
            "emailorphone": cep,
            "password": cpass,
        };

        try {
            const res = await axios.post(`${API_URL}/quick_handy/customer_info/checklogin`, customerdata);
            if (res.data >= 0) {
                // Set the userData in the context
                setUserData({ 
                    id: res.data, 
                    emailorphone: cep, 
                    password: cpass,
                    type:'customer',
                });
                navigate('/customer');
            } else {
                alert("Invalid credentials, please try again");
            }
        } catch (error) {
            alert('Login failed. Please try again.');
        }

        setwep("");
        setwpass("");
    }

    return (
        <div className='container'>
            <div className=" row m-5" >
                <h3>Login Here</h3>
                <div className="col-6">
                    <h2>worker</h2>
                    <form onSubmit={(e) => wlogin(e)} className="col-6">
                        <div class="form-group">
                            <input type="text" onChange={(e) => { setwep(e.target.value) }} class="form-control" placeholder="Enter Email or Phone no" />
                            <br />
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <input type="text" onChange={(e) => { setwpass(e.target.value) }} class="form-control" placeholder="Enter Password" />
                                <br />
                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-6">
                    <h2>customer</h2>
                    <form onSubmit={(e) => clogin(e)} className="forms col-6">
                        <div class="form-group">
                            <input type="text" onChange={(e) => { setcep(e.target.value) }} class="form-control" placeholder="Enter Email or Phone no" />
                            <br />
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <input type="text" onChange={(e) => { setcpass(e.target.value) }} class="form-control" placeholder="Enter Password" />
                                <br />
                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>


            </div>
        </div>
    )
}

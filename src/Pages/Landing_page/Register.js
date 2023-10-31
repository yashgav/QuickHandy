import axios from 'axios'
import React, { useState } from 'react'
import API_URL from '../../Config';

export default function Register() {

    const [wfn, setwfn] = useState("")
    const [wln, setwln] = useState("")
    const [wphn, setwphn] = useState("")
    const [wem, setwem] = useState("")
    const [wpass, setwpass] = useState("")

    const [cfn, setcfn] = useState("")
    const [cln, setcln] = useState("")
    const [cphn, setcphn] = useState("")
    const [cem, setcem] = useState("")
    const [cpass, setcpass] = useState("")

    const addNewWorker = async (e) => {
        e.preventDefault();
        const workerdata = {
            "email": wem,
            "firstname": wfn,
            "lastname": wln,
            "password": wpass,
            "phone": wphn,
        };
        await axios.post(`${API_URL}/quick_handy/worker_info/add`, workerdata);
        alert("Registered a worker!")
        setwfn("")
        setwln("")
        setwpass("")
        setwphn("")
        setwem("")

    }
    const addNewCustomer = async (e) => {
        e.preventDefault();
        const customerdata = {
            "email": cem,
            "firstname": cfn,
            "lastname": cln,
            "password": cpass,
            "phone": cphn,
        };
        await axios.post(`${API_URL}/quick_handy/customer_info/add`, customerdata);
        alert("Registered a customer!")
        setcem("")
        setcfn("")
        setcln("")
        setcpass("")
        setcphn("")

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 align="center" className='mb-3'>Register</h1>
                    <div className="col-md-6">
                        <div className="row">
                            <h3 align="center" >Worker</h3>
                            <form onSubmit={(e) => addNewWorker(e)} className="forms row p-5" >

                                <div className="col-6">
                                    <div class="form-group">
                                        <input type="text" onChange={(e) => { setwfn(e.target.value) }} class="form-control" placeholder="Enter First Name" />
                                        <br />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group">
                                        <input type="text" onChange={(e) => { setwln(e.target.value) }} class="form-control" placeholder="Enter Last Name" />
                                        <br />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <input type="number" onChange={(e) => { setwphn(e.target.value) }} class="form-control" placeholder="Phone" />
                                    <br />
                                </div>
                                <div class="form-group">
                                    <input type="text" onChange={(e) => { setwem(e.target.value) }} class="form-control" placeholder="Email" />
                                    <br />
                                </div>
                                <div class="form-group">
                                    <input type="password" onChange={(e) => { setwpass(e.target.value) }} class="form-control" placeholder="Password" />
                                    <br />
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h3 align="center" >Customer</h3>
                            <form onSubmit={(e) => addNewCustomer(e)} className="forms row p-5" >

                                <div className="col-6">
                                    <div class="form-group">
                                        <input type="text" onChange={(e) => { setcfn(e.target.value) }} class="form-control" placeholder="Enter First Name" />
                                        <br />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group">
                                        <input type="text" onChange={(e) => { setcln(e.target.value) }} class="form-control" placeholder="Enter Last Name" />
                                        <br />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <input type="number" onChange={(e) => { setcphn(e.target.value) }} class="form-control" placeholder="Phone" />
                                    <br />
                                </div>
                                <div class="form-group">
                                    <input type="text" onChange={(e) => { setcem(e.target.value) }} class="form-control" placeholder="Email" />
                                    <br />
                                </div>
                                <div class="form-group">
                                    <input type="password" onChange={(e) => { setcpass(e.target.value) }} class="form-control" placeholder="Password" />
                                    <br />
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_URL from '../../Config';

export default function LoadUser() {

    const [workerInfo, setWorkerInfo] = useState([])
    const [customerInfo, setCustomerInfo] = useState([])

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result1 = await axios.get(`${API_URL}/quick_handy/worker_info/getAll`);
        setWorkerInfo(result1.data)
        const result2 = await axios.get(`${API_URL}/quick_handy/customer_info/getAll`);
        setCustomerInfo(result2.data)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3>Workers</h3>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                workerInfo.length > 0
                                    ?
                                    (
                                        workerInfo.map((us) => (
                                            <tr key={us.uid}>
                                                <th scope="row">{us.wid}</th>
                                                <td>{us.firstname}</td>
                                                <td>{us.lastname}</td>
                                                <td>{us.phone}</td>
                                                <td>{us.email}</td>
                                                <td>{us.password}</td>
                                            </tr>
                                        ))
                                    )
                                    :
                                    (
                                        <tr>
                                            <td align='center' colSpan="5">No data available</td>
                                        </tr>
                                    )}
                        </tbody>
                    </table>

                </div>
                <div className="row">
                    <h3>Customer</h3>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerInfo.length > 0
                                    ?
                                    (
                                        customerInfo.map((us) => (
                                            <tr key={us.cid}>
                                                <th scope="row">{us.cid}</th>
                                                <td>{us.firstname}</td>
                                                <td>{us.lastname}</td>
                                                <td>{us.phone}</td>
                                                <td>{us.email}</td>
                                                <td>{us.password}</td>
                                            </tr>
                                        ))
                                    )
                                    :
                                    (
                                        <tr>
                                            <td align='center' colSpan="5">No data available</td>
                                        </tr>
                                    )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

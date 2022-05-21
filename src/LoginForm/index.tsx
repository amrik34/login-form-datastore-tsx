import React, { useState } from "react";

import './login.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState<any>([]);
    const logindata = (event: any) => {
        event.preventDefault();
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
    }


    return (
        <>
            <form action="" onSubmit={logindata}>
                <label>Email</label>
                <input type="text" autoComplete="off" value={email} onChange={(event: any) => setEmail(event.target.value)} />
                <label>Password</label>
                <input type="password" autoComplete="off" value={password} onChange={(event: any) => setPassword(event.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <div className="logindata">
                <table>
                    <tr>
                        <th>Sr. no. </th>
                        <th>Email </th>
                        <th>Password </th>
                    </tr>
                    {
                        allEntry.map((data: any, index: any) => {
                            console.log('data', data)
                            return (
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                    </tr>
                                </>
                            )
                        }
                        )
                    }
                </table>
            </div>
        </>

    )
}
export default LoginForm;
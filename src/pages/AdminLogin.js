
import React, { useContext } from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "./components/Auth";
import Lode from "./components/Animation/loding";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const AdminLogin = () => {

    const { currentUser } = useContext(AuthContext)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const auth = getAuth();
    if (currentUser) {
        return <Redirect to="/home" />

    }
    function login() {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                history.push("/Home");
                toast("Welcome  " + user.displayName);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast("Invalid email or password")
                console.log(errorCode, errorMessage)
            }).finally(() => setLoading(false));

    }
    function CreateAccount() {
        history.push("/Signup")
    }

    return (
        <div >{loading ? <Lode></Lode> : <div>
            <div className="p-0">
                <nav className="navbar navbar-dark bg-whites">
                    <h3 className="ms-3">Covid Vaccination portal</h3>
                </nav>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6" >
                        <div className="d-flex justify-content-center mt-4">
                            <div className="card border-white rounded" style={{ width: "22rem" }}>
                                <h2 className="card-title m-3">Admin Login</h2>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={email} onInput={e => setemail(e.target.value)} placeholder="Enter email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control " value={password} onInput={e => setpassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    <div class="d-grid gap-2">
                                    <button className="btn btn-primary " type="button" onClick={login}>Login</button>
                                    </div>
                                    <div className="d-flex justify-content-center ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default AdminLogin;

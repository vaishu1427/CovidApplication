import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Home() {
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
        return <Redirect to="/login" />
    }
    function signout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            history.push("/Login");
            toast("Logged out Successfully")
        }).catch((error) => {
            // An error happened.
            toast(error)
            console.log(error);
        });
    }
    function GetVaccineDosage(){
        history.push("/GetDose")
    }
    function AddVaccinpage(){
        history.push("/AddVaccin")
    }
    return (
        <><div className="continer">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="btn btn-outline-secondary" onClick={signout}>Logout</button>
                    <div className="d-flex">
                        <button type="button" className="btn btn-white " disabled>Hello {user.displayName}</button>
                    </div>
                </div>
            </nav>
        </div><div>

                <div className="row">
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div className="card mt-2 border-light"  >
                                <div className="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="card" style={{width:"18rem"}} >
                                                    <div class="card-body">
                                                        <h5 class="card-title">Add Vaccination Centers</h5>
                                                        <button className="btn btn-primary " type="button" onClick={AddVaccinpage}>open</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card" style={{width:"18rem"}}>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Get Dosage details</h5>
                                                        <button className="btn btn-primary " type="button" onClick={GetVaccineDosage}>open</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card"  style={{width:"18rem"}}>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Remove Vaccination Centers</h5>
                                                        <a href="#" class="btn btn-primary">Open</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div></>

    )
}

export default Home;
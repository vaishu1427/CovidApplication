import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function SearchVaccinCenter() {
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();
    const [data, setData] = useState([]);
    if (!user) {
        return <Redirect to="/login" />
    }
    function back() {
        history.push("/UserHome")
    }
    async function fecthdata() {
        const querySnapshot = await getDocs(collection(db, "VaccineCentre"));
        const mapdata = querySnapshot.docs.map((e) => {
            return {
                centername: e.data().Centrename,
                District: e.data().District,
                state: e.data().State,
                noofdose: e.data().NoofDose,
            }
        })
        setData(mapdata);
        console.log(mapdata);
    }

    return (
        <><div className="continer">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <button className="btn btn-outline-secondary" onClick={back}>Back</button>
                    <div className="d-flex">
                        <button type="button" className="btn btn-white " disabled>Hello {user.displayName}</button>
                    </div>
                </div>
            </nav>
        </div><div>

            </div>
            <div className="">
                <button className="btn btn-primary " type="button" onClick={fecthdata}>Search</button>
                </div>
            {data.map((element, index) => {
                        return (
                            <div key={index} class="card rounded mb-3">
                                <h5 class="card-title ms-3  ">No.of.Dose : {element.noofdose}</h5>
                                <div class="card-body">
                                    <p>{element.centername}</p>
                                    <p>{element.District}</p>
                                    <p>{element.state}</p>
                                </div>
                            </div>
                        )
                    })}
            </>

    )
}

export default SearchVaccinCenter;
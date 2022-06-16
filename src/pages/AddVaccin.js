import { collection,addDoc  } from "firebase/firestore";
import firebaseconfig from "./components/Firebase";
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './components/Animation/Virus.svg';


toast.configure()

function AddVaccin() {
    
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    const [state, setstate] = useState('');
    const [district, setdistrict] = useState('');
    const [centrename, setcentrename] = useState('');
    const [noofdose,setnoofdose]=useState('');
    const db = firebaseconfig.firestore();
    if (!user) {
        return <Redirect to="/login" />
    }

    function back() {
        history.push("/Home")
    }

    async function addvaccinecentre() {

        console.log(state);
        const docRef = await addDoc(collection(db, "VaccineCentre"), {
            State: state,
            District: district,
            Centrename : centrename,
            NoofDose : noofdose
          });
          alert("Vaccination Centre added successfully")
          console.log("Document written with ID: ", docRef.id);
          
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
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">State</label>
                    <input Value={state} onChange={e => setstate(e.target.value)} type="name" class="form-control" id="exampleFormControlInput1"></input>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">District</label>
                <input Value={district} onChange={e => setdistrict(e.target.value)} type="name" class="form-control" id="exampleFormControlInput1" ></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name of the center</label>
                <input Value={centrename} onChange={e => setcentrename(e.target.value)} type="name" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">No of Dose</label>
                <input Value={noofdose} onChange={e => setnoofdose(e.target.value)} type="name" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <button type="button" class="btn btn-primary" onClick={addvaccinecentre}>Submit</button></>
    )
}

export default AddVaccin;
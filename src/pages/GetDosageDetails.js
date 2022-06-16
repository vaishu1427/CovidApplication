import React from "react";
import { useHistory, Redirect } from "react-router-dom";
function GetDosageDetails(){
    const history = useHistory();
    function back() {
        history.push("/Home")
    }
    return(
        <>
        <div className="continer">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="btn btn-outline-secondary" onClick={back}>Back</button>
                    <div className="d-flex">
                        <button type="button" className="btn btn-white " disabled></button>
                    </div>
                </div>
            </nav>
        </div>
        <h1>Get Dosage Details</h1>
        <button class="btn btn-primary">Submit</button>
        {/* <div class="card" style={{width:"18rem"}}>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div> */}
        </>
    )
}
export default GetDosageDetails;
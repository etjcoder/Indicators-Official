import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
// import LoginForm from "../components/CreateProtegeForm"
import CreateProtegeForm from "../components/CreateProtegeForm";


class ManagerDash extends Component {

    state = {
        user: ""
    }

    componentDidMount() {
        console.log("Loaded Manager Page")
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <div className="jumbotron" style={{ height: '500px' }}>
                    <h1>You're on the Manager Dashboard!</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        Add / Update Existing Proteges
                        <CreateProtegeForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagerDash
import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
// import LoginForm from "../components/CreateProtegeForm"
import CreateProtegeForm from "../components/CreateProtegeForm";
import CreateMentorForm from "../components/CreateMentorForm";
import API from "../utils/API";


class ManagerDash extends Component {

    state = {
        user: "",
        proteges: ""
    }

    componentDidMount = () => {
        console.log("Loaded Manager Page")
        this.gatherProteges()
    }

    gatherProteges =  () => {
        API.getProteges()
            .then( (res) => {
                this.setState({
                    proteges: res.data
                })
            })
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
                    <div className="col-lg-6">
                        Add New Mentor
                        <CreateMentorForm proteges={this.state.proteges} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagerDash
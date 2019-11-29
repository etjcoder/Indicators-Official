import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
import BasicLogin from "../components/BasicLogin"


class Home extends Component {

    state = {
        user: "",
        username: "",
        password: ""
    }

    componentDidMount() {
        console.log("Loaded Home Page")
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <div className="jumbotron" style={{ height: '' }}>
                    <h1>You're on the Home Page!</h1>
                    {/* Header Component, Basically a nice Jumbotron */}
                    {/* <HomePageHeader /> */}
                    {/* About Us on Left Component */}
                    {/* Sign In on Right Component */}
                    {/* Demo below */}
                    {/* Contact Form */}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>About Us:</h4>
                        <p>We are a sales analytics tool that is built to track dials, contacts, appointments scheduled and parse that data between the source of the lead, the type of call, and the specific caller</p>
                        <p>If you would like to sign up for an account, please email: ecenterprisesllc@gmail.com for more information.</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Sign up/ Log in</h4>
                        <BasicLogin />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
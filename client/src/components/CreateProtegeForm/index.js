import React, { Component } from 'react';
import fire from "../../config/Fire";
import API from "../../utils/API";
import cogoToast from "cogo-toast";

class CreateProtegeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            designation: '',
            mentor: '',
            proteges: [],
            firstName: "",
            lastName: "",
            manager: ""
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            cogoToast.success("Successful login!");
            // document.location.href = '/home'
        }).catch((error) => {
            console.log(error)
        })
    }

    signup = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => {
                console.log(data.user.email);
                console.log(data.user.uid)
                API.createUser({
                    email: data.user.email,
                    uid: data.user.uid,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    mentor: this.state.mentor,
                    manager: this.state.manager
                })
            }).catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div className="login-form">
                <div id="login-welcome">
                    Create a User Below.
      </div>
                <form>
                    <br />
                    <input value={this.state.email} onChange={this.handleInputChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <br />
                    <input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {/* <button type="submit" onClick={this.login} className="btn">Login</button> */}

                    <br />
                    <input value={this.state.firstName} onChange={this.handleInputChange} type="text" name="firstName" className="form-control" placeholder="First name" />
                    <br />
                    <input value={this.state.lastName} onChange={this.handleInputChange} type="text" name="lastName" className="form-control" placeholder="Last name" />
                    <br />
                    <input value={this.state.mentor} onChange={this.handleInputChange} type="text" name="mentor" className="form-control" placeholder="Mentor" />
                    <br />
                    <input value={this.state.manager} onChange={this.handleInputChange} type="text" name="manager" className="form-control" placeholder="Manager" />

                    <button onClick={this.signup} className="btn btn-outline-info">Create User</button>
                    {/* <button onClick={this.logOut} style={{ marginTop: '5px', marginLeft: '25px' }} className="btn btn-danger">Logout</button> */}
                </form>
            </div>
        )
    }



}

export default CreateProtegeForm;
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
            // designation: '',
            // mentor: '',
            // proteges: [],
            // firstName: "",
            // lastName: "",
            // manager: "",
            userData: ""
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            cogoToast.success("Successful login!");
            document.location.href = '/protege'
        }).catch((error) => {
            console.log(error)
        })
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

                
                    <button onClick={this.login} className="btn btn-outline-info">Log in</button>
                    {/* <button onClick={this.logOut} style={{ marginTop: '5px', marginLeft: '25px' }} className="btn btn-danger">Logout</button> */}
                </form>
            </div>
        )
    }



}

export default CreateProtegeForm;
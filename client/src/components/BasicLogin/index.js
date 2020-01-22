import React, { Component } from 'react';
import fire from "../../config/Fire";
import API from "../../utils/API";
import cogoToast from "cogo-toast";

class BasicLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userData: ""
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
            cogoToast.success("Successful login with " + res);
            console.log(res.user.uid)
            this.checkCredentials(res.user.uid)

        }).catch((error) => {
            console.log(error)
        })
    }

    checkCredentials = (uid) => {

        var protege = false;
        var mentor = false;
        console.log(protege, mentor)
        // var manager = false;
        API.getProtege(uid)
            .then(res => {
                console.log(res)
                if (res.data.length > 0) {
                    console.log("This is a protege login")
                    protege = true
                    document.location.href = '/protege'
                } else {
                    API.getMentor(uid)
                        .then(res => {
                            if (res.data.length > 0) {
                                console.log("This is a mentor login")
                                mentor = true
                                document.location.href = '/mentor'
                            }
                        }).catch(err =>
                            console.log("Type of user not found"))
                }
            }).catch(err =>
                console.log("This is not a protege login"))

    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div className="login-form">
                <form>
                    <br />
                    <label>Enter E-mail:</label>
                    <input value={this.state.email} onChange={this.handleInputChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <br />
                    <label>Enter Password:</label>
                    <input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {/* <button type="submit" onClick={this.login} className="btn">Login</button> */}


                    <button onClick={this.login} className="btn btn-outline-info">Log in</button>
                    {/* <button onClick={this.logOut} style={{ marginTop: '5px', marginLeft: '25px' }} className="btn btn-danger">Logout</button> */}
                </form>

                <br />
                {/* <form>
                    <input value={this.state.testemail} onChange={this.handleInputChange} type="email" name="email" className="form-control" id


                </form> */}
            </div>
        )
    }



}

export default BasicLogin;
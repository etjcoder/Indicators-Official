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
        proteges: "",
        mentors: "",
        mentorSelected: "",
        mentorSelectedData: "",
        editMentorDataFirstName: "",
        editMentorDataLastName: "",
        editMentorDataProteges: "",
        editMentorProtegeToAdd: ""
    }

    componentDidMount = () => {
        console.log("Loaded Manager Page")
        this.gatherProteges()
        this.gatherMentors()
    }

    gatherProteges = () => {
        API.getProteges()
            .then((res) => {
                this.setState({
                    proteges: res.data
                })
            })
    }

    gatherMentors = () => {
        API.getMentors()
            .then((res) => {
                this.setState({
                    mentors: res.data
                })
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleMentorSelection = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        setTimeout(() => { this.getMentorData() }, 500)
    }

    getMentorData = () => {
        console.log("Getting mentor by id: " + this.state.mentorSelected)
        API.getMentorById(this.state.mentorSelected)
            .then(res => {
                console.log(res)
                this.setState({
                    mentorSelectedData: res.data[0],
                    editMentorDataFirstName: res.data[0].firstName,
                    editMentorDataLastName: res.data[0].lastName,
                    editMentorDataProteges: res.data[0].proteges
                })
            })
    }

    handleArrayChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        console.log(this.state.mentorSelectedData.proteges)
        this.setState({
            editMentorProtegeToAdd: event.target.value
        })
    }


    addProtegeToMentor = (event) => {
        event.preventDefault()
        var ProtegeID = this.state.editMentorProtegeToAdd
        var MentorID = this.state.mentorSelected
        console.log("Adding Protege ID: " + this.state.editMentorProtegeToAdd + " to " + this.state.editMentorDataFirstName + " " + this.state.editMentorDataLastName)
        API.addProtegeToMentor(MentorID, {
            id: ProtegeID
        }).then(res => {
            console.log("Added Protege to Mentor")
        }).catch(err => {
            console.log("Unsuccssfully added Protege to Mentor")
        })
    
    }


    removeProtegeFromMentor = (id) => {
        console.log("Removing Protege ID: " + id + " from " + this.state.editMentorDataFirstName + " " + this.state.editMentorDataLastName)
        var ProtegeID = id
        var MentorID = this.state.mentorSelected
        API.removeProtegeFromMentor(MentorID, {
            id: ProtegeID
        }).then(res => {
            console.log("Removed Protege from Mentor")
        }).catch(err => {
            console.log("Unsuccessfully removed Protege from Mentor")
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
                <br />
                <div className="row">
                    <br />
                    <div className="col-lg-6">
                        Update Mentor
                        {this.state.mentors ? <select value={this.state.mentorSelected} onChange={this.handleMentorSelection} name="mentorSelected">
                            {this.state.mentors.map(mentor => (
                                <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                            ))}
                        </select> : null}
                        {this.state.mentorSelectedData ?
                            <div><h5>Current Proteges:</h5>

                                <ul>
                                    {this.state.editMentorDataProteges.map(protege => (
                                        <li>{protege.firstName} {protege.lastName} <button onClick={() => this.removeProtegeFromMentor(protege._id)} className="btn-danger btn-sm">X</button></li>
                                    ))}
                                </ul>

                                <form>
                                    <label>Add A Protege</label>
                                    {this.state.editMentorDataProteges ?
                                        <div>
                                            <select id="protegeDropDownMenu" value={this.state.editMentorDataProteges} onChange={this.handleArrayChange} name="editMentorDataProteges">

                                                {this.state.proteges.map(protege => (<option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>))}
                                            </select>
                                            <button onClick={this.addProtegeToMentor} className="btn-btn-outline-info">Add Protege to Mentor</button>
                                        </div>
                                        : null}

                                </form>
                            </div>


                            : null}

                        {/* <EditMentorForm proteges={this.state.proteges} /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagerDash
import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
// import LoginForm from "../components/CreateProtegeForm"
import CreateProtegeForm from "../components/CreateProtegeForm";
import CreateMentorForm from "../components/CreateMentorForm";
import API from "../utils/API";
import SideNavPageManager from "../components/SideNavPageManager"


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
        editMentorProtegeToAdd: "",
        showCreateMentorForm: false,
        showCreateProtegeForm: false,
        showCreateTool: false,
        showAnalyticsTool: false,
        showReportsTool: false,
        showSalesTool: false,
        mentorSelected: "none"
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
        var ProtegeID = this.state.protegeToAdd
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

    showCreate = () => {
        console.log("Showing Creation tools")
        if (this.state.showCreateTool === true) {
            this.setState({
                showCreateTool: false
            })
        } else {
            this.setState({
                showCreateTool: true,
                showAnalyticsTool: false,
                showReportsTool: false,
                showSalesTool: false
            })
        }
    }

    showAnalytics = () => {
        console.log("Showing Analytics tools")
    }

    showReports = () => {
        console.log("Showing Reports tools")
    }

    showSales = () => {
        console.log("Showing Sales tools")
    }

    showCreateProtegeFormFN = (e) => {
        e.preventDefault()
        if (this.state.showCreateProtegeForm === false) {
            this.setState({
                showCreateProtegeForm: true
            })
        } else {
            this.setState({
                showCreateProtegeForm: false
            })
        }
    }

    showCreateMentorFormFN = (e) => {
        e.preventDefault()
        if (this.state.showCreateMentorForm === false) {
            this.setState({
                showCreateMentorForm: true
            })
        } else {
            this.setState({
                showCreateMentorForm: false
            })
        }
    }



    render() {
        return (
            <div>

                <SideNavPageManager
                    createOption={this.showCreate}
                    analyticsOption={this.showAnalytics}
                    reportsOption={this.showReports}
                    salesOption={this.showSales}
                />

                <div className="container">

                    <div className="jumbotron" style={{ height: '200px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h3 style={{ textAlign: 'center', color: 'white' }}>You're on the Mentor Dashboard!</h3>

                    </div>
                    {this.state.showCreateTool ?
                        <div>

                            <div className="row">
                                <div className="col-lg-6 card" style={{ textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Create New Protege<span><button className="btn btn-sm btn-outline-light" onClick={this.showCreateProtegeFormFN}>Show</button></span></h3>
                                    {this.state.showCreateProtegeForm ?
                                        <CreateProtegeForm />
                                    : null}
                                </div>
                                <div className="col-lg-6 card" style={{ textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Create New Mentor<span><button className="btn btn-sm btn-outline-light" onClick={this.showCreateMentorFormFN}>Show</button></span></h3>
                                    {this.state.showCreateMentorForm ?
                                        <CreateMentorForm proteges={this.state.proteges} />
                                    : null }
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <br />
                                <div className="col-lg-6 card" style={{ textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Update Mentor </h3>
                                    <p style={{textAlign: 'center'}}>(Choose a Mentor to begin)</p>
                                    {this.state.mentors ? 
                                        <select value={this.state.mentorSelected} onChange={this.handleMentorSelection} name="mentorSelected">
                                                <option key={"none"} value={"none"}>--Select a Mentor--</option>
                                            {this.state.mentors.map(mentor => (
                                                <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                                            ))}
                                        </select> 
                                    : null}
                                    {this.state.mentorSelectedData ?
                                        <div><h5>Current Proteges:</h5>

                                            <div style={{textAlign: 'center'}}>
                                                {this.state.editMentorDataProteges.map(protege => (
                                                    <h5>{protege.firstName} {protege.lastName} <span><button onClick={() => this.removeProtegeFromMentor(protege._id)} className="btn-outline-danger btn btn-sm">Remove</button></span></h5>
                                                ))}
                                            </div>

                                            <form>
                                                <label>Add A Protege</label>
                                                {this.state.editMentorDataProteges ?
                                                    <div>
                                                        <select id="protegeDropDownMenu" value={this.state.protegeToAdd} onChange={this.handleInputChange} name="protegeToAdd">

                                                            {this.state.proteges.map(protege => (<option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>))}
                                                        </select>
                                                        <button onClick={this.addProtegeToMentor} className="btn btn-outline-dark btn-sm">Assign Protege</button>
                                                    </div>
                                                    : null}

                                            </form>
                                        </div>


                                        : null}



                                    {/* <EditMentorForm proteges={this.state.proteges} /> */}
                                </div>
                            </div>
                        </div>
                        : null}

                </div>

            </div >
        )
    }
}

export default ManagerDash
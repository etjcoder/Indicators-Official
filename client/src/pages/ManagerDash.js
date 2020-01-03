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
        mentorSelected: "none",
        mentorToAdd: "none",
        protegeToAdd: 'none'
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

    handleProtegeSelection = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        setTimeout(() => { this.getProtegeData() }, 500)
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

    getProtegeData = () => {
        console.log("Getting protege by id: " + this.state.protegeSelected)
        API.getUserDataById(this.state.protegeSelected)
            .then(res => {
                console.log(res)
                this.setState({
                    protegeSelectedData: res.data[0],
                    editProtegeDataFirstName: res.data[0].firstName,
                    editProtegeDataLastName: res.data[0].lastName,
                    editProtegeDataMentors: res.data[0].allMentors
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

    addMentorToProtege = (event) => {
        event.preventDefault()
        var MentorID = this.state.mentorToAdd
        var ProtegeID = this.state.protegeSelected
        // var existingMentorID = this.state.protegeSelectedData.
        API.addMentorToProtege(ProtegeID, {
            id: MentorID
        }).then(res => {
            console.log("Added Mentor to Protege")
        }).catch(err => {
            console.log("Unsuccessful in adding Mentor to Protege")
        })
    }


    removeProtegeFromMentor = (event) => {
        event.preventDefault()
        // console.log("Removing Protege ID: " + id + " from " + this.state.editMentorDataFirstName + " " + this.state.editMentorDataLastName)
        var ProtegeID = this.state.protegeToAdd
        var MentorID = this.state.mentorSelected
        API.removeProtegeFromMentor(MentorID, {
            id: ProtegeID
        }).then(res => {
            console.log("Removed Protege from Mentor")
        }).catch(err => {
            console.log("Unsuccessfully removed Protege from Mentor")
        })
    }

    removeMentorFromProtege = (event) => {
        event.preventDefault()
        // console.log("Removing Mentor ID: " + this.state.mentorToAdd + " from " + this.state.editProtegeDataFirstName + " " + this.state.editProtegeDataLastName)
        var MentorID = this.state.mentorToAdd
        var ProtegeID = this.state.protegeSelected


        API.removeMentorFromProtege(ProtegeID, {
            id: MentorID
        }).then(res => {
            console.log("Removed Mentor from Protege")
        }).catch(err => {
            console.log("Unsuccessful in removing Mentor from Protege")
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
                                <div className="col-12 card" style={{ color: 'white', textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Create New Protege<span><button className="btn btn-sm btn-outline-light" onClick={this.showCreateProtegeFormFN}>Show</button></span></h3>
                                    {this.state.showCreateProtegeForm ?
                                        <CreateProtegeForm />
                                        : null}
                                </div>
                                <div className="col-12 card" style={{ color: 'white', textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Create New Mentor<span><button className="btn btn-sm btn-outline-light" onClick={this.showCreateMentorFormFN}>Show</button></span></h3>
                                    {this.state.showCreateMentorForm ?
                                        <CreateMentorForm proteges={this.state.proteges} />
                                        : null}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <br />
                                <div className="col-12 card" style={{ color: 'white', textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Update Mentor </h3>
                                    <p style={{ textAlign: 'center' }}>(Choose a Mentor to begin)</p>
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

                                            <div style={{ textAlign: 'center' }}>
                                                {this.state.editMentorDataProteges.map(protege => (
                                                    <h5>{protege.firstName} {protege.lastName} <span></span></h5>
                                                ))}
                                            </div>

                                            <form>
                                                <label>Add A Protege</label>
                                                {this.state.editMentorDataProteges ?
                                                    <div>
                                                        <select id="protegeDropDownMenu" value={this.state.protegeToAdd} onChange={this.handleInputChange} name="protegeToAdd">
                                                            <option value="none">--Select a Protege to Add--</option>
                                                            {this.state.proteges.map(protege => (<option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>))}
                                                        </select>
                                                        <button onClick={this.addProtegeToMentor} className="btn btn-outline-dark btn-sm">Assign Protege</button>
                                                        <button onClick={this.removeProtegeFromMentor} className="btn btn-outline-danger btn-sm">Remove Protege</button>
                                                    </div>
                                                    : null}

                                            </form>
                                        </div>


                                        : null}



                                    {/* <EditMentorForm proteges={this.state.proteges} /> */}
                                </div>

                                <br />
                                <div className="col-12 card" style={{ color: 'white', textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                    <h3>Update Protege </h3>
                                    <p style={{ textAlign: 'center' }}>(Choose a Protege to begin)</p>
                                    {this.state.proteges ?
                                        <select value={this.state.protegeSelected} onChange={this.handleProtegeSelection} name="protegeSelected">
                                            <option key={"none"} value={"none"}>--Select a Protege--</option>
                                            {this.state.proteges.map(protege => (
                                                <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                            ))}
                                        </select>
                                        : null}
                                    {this.state.protegeSelectedData ?
                                        <div><h5>Current Mentors:
                                        {/* {this.state.protegeSelectedData.mentor} */}
                                        </h5>

                                            <div style={{ textAlign: 'center' }}>
                                                {this.state.editProtegeDataMentors.map(mentor => (
                                                    <h6 key={mentor._id}>{mentor.firstName} {mentor.lastName} <span></span></h6>
                                                ))}
                                            </div>

                                            <form>
                                                <label>Add A Mentor</label>
                                                {this.state.mentors ?
                                                    <div>
                                                        <select id="mentorsDropDownMenu" value={this.state.mentorToAdd} onChange={this.handleInputChange} name="mentorToAdd">
                                                            <option value="none">--Select a Mentor--</option>
                                                            {this.state.mentors.map(mentor => (<option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>))}
                                                        </select>
                                                        <button>Placeholder</button>
                                                        <button onClick={this.addMentorToProtege} className="btn btn-outline-dark btn-sm">Assign Mentor</button>
                                                        <button onClick={this.removeMentorFromProtege} className="btn btn-outline-danger btn-sm">Remove Mentor</button>
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
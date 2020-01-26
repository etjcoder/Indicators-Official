import React, { Component } from "react";
import "./Home.css";
// import Nav from "../components/Nav";
// import LoginForm from "../components/CreateProtegeForm"
import CreateProtegeForm from "../components/CreateProtegeForm";
import CreateMentorForm from "../components/CreateMentorForm";
import API from "../utils/API";
// import SideNavPageManager from "../components/SideNavPageManager";
import ManagerDataViewer from "../components/ManagerDataViewer";
import ProtegeViewContainer from "../components/ProtegeViewContainer";


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
        showAnalyticsTool: true,
        showReportsTool: false,
        showSalesTool: false,
        showProtegeActivity: false,
        mentorSelected: "none",
        mentorToAdd: "none",
        protegeToAdd: 'none',

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
                showSalesTool: false,
                showProtegeActivity: false
            })
        }
    }

    showAnalytics = () => {
        console.log("Showing Analytics tools")
        if (this.state.showAnalyticsTools === true) {
            this.setState({
                showAnalyticsTool: false
            })
        } else {
            this.setState({
                showCreateTool: false,
                showAnalyticsTool: true,
                showReportsTool: false,
                showSalesTool: false,
                showProtegeActivity: false
            })
        }
    }

    showReports = () => {
        console.log("Showing Reports tools")
        if (this.state.showAnalyticsTools === true) {
            this.setState({
                showAnalyticsTool: false
            })
        } else {
            this.setState({
                showCreateTool: false,
                showAnalyticsTool: true,
                showReportsTool: false,
                showSalesTool: false,
                showProtegeActivity: false
            })
        }
    }

    showActivityTracker = () => {
        console.log("Showing Activity Tracker")
        if (this.state.showProtegeActivity === true) {
            this.setState({
                showProtegeActivity: false
            })
        } else {
            this.setState({
                showCreateTool: false,
                showAnalyticsTool: false,
                showReportsTool: false,
                showSalesTool: false,
                showProtegeActivity: true
            })
        }
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

                {/* <SideNavPageManager
                    createOption={this.showCreate}
                    analyticsOption={this.showAnalytics}
                    reportsOption={this.showReports}
                    salesOption={this.showSales}
                    
                /> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '30px', marginBottom: '50px' }}>
                    <a className="navbar-brand" href="#">Manager Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.showCreate}>Create User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.showActivityTracker}>Session Tracker</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.showAnalytics}>View Analytics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.showSales}>View Sales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.showReports}>View Reports</a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="container">

                    {/* <div className="jumbotron" style={{ height: '200px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h3 style={{ textAlign: 'center', color: 'white' }}>You're on the Mentor Dashboard!</h3>

                    </div> */}

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">



                            {this.state.showProtegeActivity ?
                                <div>
                                    {this.state.proteges ?
                                        <div className="row">
                                            {this.state.proteges.map(protege => (
                                                <div key={protege._id} className="col-lg-4">
                                                    <ProtegeViewContainer
                                                        key={protege._id}
                                                        protege={protege}
                                                        rerender={this.gatherProteges}
                                                    />
                                                </div>
                                                // <div key={protege._id} className="col-md-4">
                                                //     <p>{protege.firstName} {protege.lastName}</p>
                                                //     <p>Dials:{protege.dials.length}</p>
                                                //     <p>Contacts:    </p>
                                                //     <p>Appointments:{protege.appointments.length}</p>
                                                // </div>
                                            ))
                                            }
                                        </div>
                                        : null}
                                </div>


                                : null}


                            {this.state.showCreateTool ?
                                <div className="card bg-light"
                                    style={{
                                        // backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                                        padding: '50px'
                                    }}>

                                    <div className="card-header">
                                        <h2
                                            style={{
                                                textAlign: 'center',
                                                padding: '20px',
                                                // backgroundColor: 'rgba(255,255,255,0.75)',
                                                color: 'black',
                                                margin: '20px',
                                                borderRadius: '10px'
                                            }}>
                                            C R E A T E
                                                </h2>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-12 card"
                                                style={{
                                                    textAlign: 'left',
                                                    // backgroundColor: 'rgba(36,138,255,0.8)', 
                                                    padding: '0'
                                                }}>
                                                <div className="card-header">
                                                    <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px' }}>Create Protege<span><button className="btn btn-sm btn-outline-dark" onClick={this.showCreateProtegeFormFN}>Show</button></span></h4>
                                                </div>

                                                {this.state.showCreateProtegeForm ?
                                                    <div className="card-body">
                                                        <CreateProtegeForm />
                                                    </div>
                                                    : null}

                                            </div>

                                            <div className="col-12 card"
                                                style={{
                                                    textAlign: 'left',
                                                    // backgroundColor: 'rgba(36,138,255,0.8)', 
                                                    padding: '0'
                                                }}>
                                                <div className="card-header">
                                                    <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px' }}>Create New Mentor<span><button className="btn btn-sm btn-outline-dark" onClick={this.showCreateMentorFormFN}>Show</button></span></h4>
                                                </div>

                                                {this.state.showCreateMentorForm ?
                                                    <div className="card-body">
                                                        <CreateMentorForm proteges={this.state.proteges} />
                                                    </div>
                                                    : null}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <br />
                                            <div className="col-12 card" style={{ color: 'black', textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                                                <h4>Update Mentor </h4>
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

                                                        <div style={{ textAlign: 'left' }}>
                                                            <ul>
                                                                {this.state.editMentorDataProteges.map(protege => (
                                                                    <li>{protege.firstName} {protege.lastName} <span></span></li>
                                                                ))}
                                                            </ul>
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
                                            <div className="col-12 card" style={{ color: 'black', textAlign: 'center', margin: 0, padding: 40, overflow: 'auto', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                                                <h4>Update Protege </h4>
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

                                                        <div style={{ textAlign: 'left' }}>
                                                            <ul>
                                                                {this.state.editProtegeDataMentors.map(mentor => (
                                                                    <li key={mentor._id}>{mentor.firstName} {mentor.lastName} <span></span></li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <form>
                                                            <label>Add A Mentor</label>
                                                            {this.state.mentors ?
                                                                <div>
                                                                    <select id="mentorsDropDownMenu" value={this.state.mentorToAdd} onChange={this.handleInputChange} name="mentorToAdd">
                                                                        <option value="none">--Select a Mentor--</option>
                                                                        {this.state.mentors.map(mentor => (<option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>))}
                                                                    </select>
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
                                </div>
                                : null}

                            {this.state.showAnalyticsTool ?
                                <ManagerDataViewer
                                    allMentorData={this.state.mentors}
                                    allProtegeData={this.state.proteges}
                                    mentors={this.state.mentors}
                                    proteges={this.state.proteges}
                                />
                                : null}

                        </div>
                        <div className="col-lg-1">

                        </div>

                    </div>
                </div>

            </div >

        )
    }
}

export default ManagerDash
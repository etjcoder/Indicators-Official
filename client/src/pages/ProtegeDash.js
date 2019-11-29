import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
// import Header from "../components/Header";
import ProtegeCallBtnContainer from "../components/ProtegeCallBtnContainer"
// import ProtegeC1 from "../components/ProtegeC1"
// import ProtegeC2 from "../components/ProtegeC2"
// import ProtegeC3 from "../components/ProtegeC3"
// import ProtegeC4 from "../components/ProtegeC4"
// import ProtegeC5 from "../components/ProtegeC5"
// import ProtegeC6 from "../components/ProtegeC6"
// import ProtegeC7 from "../components/ProtegeC7"
// import DailyResultsProtege from "../components/DailyResultsProtege"
// import RemindersProtege from "../components/RemindersProtege"
// import ToDoInput from "../components/ToDoInput"
// import DataBasicProtege from "../components/DataBasicProtege"
// import DataAdvancedProtege from "../components/DataAdvancedProtege"
import AppointmentItem from "../components/AppointmentItem"
import AppointmentCreator from "../components/AppointmentCreator"
import DialDataSide from "../components/DialDataSide"
import API from "../utils/API";



class ProtegeDash extends Component {

    state = {
        user: "",
        appointments: [],
        userData: "",
        dialData: "",
        contactData: "",
        numScheduled: 0
    }

    componentDidMount = () => {
        // console.log("Loaded Protege Page")
        this.gatherAppointments()
        // console.log("User Data: " + this.props.user.uid)
        setTimeout(() => { this.getUserData() }, 1200)
    }

    getUserData = () => {
        console.log(this.props.user.uid)
        var userID = this.props.user.uid
        API.getUserData(userID)
            .then(res =>
                this.setState({
                    userData: res.data[0],
                    dialData: res.data[0].dials
                }), this.getContactData(), this.gatherAppointments()
            )
    }

    getContactData = () => {
        setTimeout(() => {
            console.log("Searching for contacts using: " + this.state.userData._id)
            API.getContacts(this.state.userData._id)
                .then(res => {
                    console.log(res.data.length)
                    this.setState({
                        contactData: res.data
                    })
                })
        }, 1000)

    }


    gatherAppointments = () => {
        setTimeout(() => {
            console.log("Gathering appointemnts using ID: " + this.state.userData._id)
            API.getAppointments(this.state.userData._id)
                .then(res =>
                    this.setState({
                        appointments: res.data
                    }))
        }, 1000)
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron" style={{}}>
                    {/* ProtegeHeader */}
                    <h1>Welcome {this.state.userData.firstName} {this.state.userData.lastName}!</h1>
                </div>
                <div className="row">
                    {/* Main Section 8/12 Left
                        --Has Tabbed Card
                        --Each Tab indicated a different button 
                        // Initially can list all buttons on a big ass dashboard
                    */}
                    <div className="col-lg-8">
                        <ProtegeCallBtnContainer 
                            rerender={this.getUserData} 
                            user={this.state.userData} 
                            userID={this.state.userData._id} 
                            />
                    </div>

                    {/* Daily Results 4/12 Right
                        /// Top - Half ///
                        Dials: 
                        Contacts:
                        Appointments:
                        /// Bottom - Half ///
                        Todos:
                        Notes:
                    */}
                    <div className="col-lg-4">
                        <DialDataSide 
                            userID={this.state.userData._id} 
                            contactData={this.state.contactData} 
                            dialData={this.state.dialData} 
                            apptData={this.state.appointments} 
                            />
                    </div>
                    {/* Mid Section narrow height 12/12
                        Reminder / Todo Input 
                    */}
                    {/* Lower Section 12/12
                        Data Dashboard Below
                            Basic Data Showing first:
                                Contacts / Dials
                                Appointments / Contacts
                                Appointments / Dials 
                                Chart of Call Types
                                Chart of Contact Types
                                Web of Appointment Types
                    
                    */}
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card" style={{ textAlign: "center" }}>
                            <h4>Your Appointments:</h4>
                            {this.state.appointments.map(appt => (
                                <AppointmentItem
                                    key={appt._id}
                                    id={appt._id}
                                    apptname={appt.apptname}
                                    type={appt.type}
                                    held={appt.held}
                                    sold={appt.sold}
                                    dialer={appt.dialer}
                                    source={appt.source}
                                    date={appt.date}
                                    notes={appt.notes}
                                    username={this.state.user}
                                    rerender={this.gatherAppointments}
                                />
                            ))}
                        </div>
                    </div>
                    {/* <div className="col-lg-1">

                    </div> */}
                    <div className="col-lg-4">
                        <AppointmentCreator 
                            userID={this.state.userData._id} 
                            username={this.state.user} 
                            rerender={this.gatherAppointments} 
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProtegeDash
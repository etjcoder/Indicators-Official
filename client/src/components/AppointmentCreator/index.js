import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import "./style.css"



class AppointmentCreator extends Component {

    state = {
        apptname: "",
        apptsource: "",
        apptnotes: "",
        apptdate: "",
        appttargetmkt: "",
        apptTagged: "",
        showAppt: false
    }

    componentDidMount() {
        // console.log("Loaded Appt Item")
        // console.log(this.props)
        // this.setState({
        //     apptname: this.props.apptname,
        //     apptsource: this.props.source,
        //     apptnotes: this.props.notes,
        //     apptdate: this.props.date
        // })

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    ////////////////////////////////////////////////////////////
    ////////// MODAL FUNCTIONS ////////////////////////////////
    ///////////////////////////////////////////////////////////
    openEditModal = () => {
        this.setState({
            editModalIsOpen: true
        })
    }

    afterOpenEditModal = () => {

    }

    closeEditModal = () => {
        this.setState({
            editModalIsOpen: false
        })
    }

    ///////////////////////////////////////////////////////////
    /////////// APPOINTMENT DATA INPUT ////////////////////////
    ///////////////////////////////////////////////////////////

    handleApptSubmit = event => {
        event.preventDefault()
        console.log("Submitting appointment under user ID: " + this.props.userID)

        var ApptData = {
            apptname: this.state.apptname,
            source: this.state.apptsource,
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            dialer: this.props.userID,
            type: this.state.type,
            targetMarket: this.state.appttargetmkt
        }

        console.log(ApptData)



        API.saveAppointment(this.props.userID, {
            apptname: this.state.apptname,
            source: this.state.apptsource,
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            type: this.state.type,
            dialer: this.props.userID,
            targetMarket: this.state.appttargetmkt,
            protege: this.props.userID,
            mentor: this.state.apptTagged
        }).then(res =>
            cogoToast.info("Saved Appt!")
        ).catch(err => console.log(err))

        setTimeout(() => {
            // cogoToast.loading("Re-loading appointments")
            this.props.rerender()
        }, 1000)

    }


    showApptForm = () => {
        if (this.state.showAppt === false) {
            this.setState({
                showAppt: true
            })
        } else {
            this.setState({
                showAppt: false
            })
        }
    }



    render() {
        return (
            <div className="card" id="appointment-creator">
                <h4 style={{ color: 'whitesmoke' }}>Create Appointment <span button className="btn btn-sm btn-outline-light" onClick={this.showApptForm}>Show</span></h4>
                <hr />
                {this.state.showAppt ?
                    <form className="form-group">
                        <label className="customLabel"><p style={{ color: 'whitesmoke' }}>Type of Appointment </p></label>
                        <select className="custom-select my-1 mr-sm-2" value={this.state.type} className="customDrop" onChange={this.handleInputChange} name="type" type="text" placeholder="Choose an appointment type..">
                            <option value="CPD">Cashflow Prospect</option>
                            <option value="BPD">Businessowner Prospect</option>
                            <option value="CCD">Cashflow Client</option>
                            <option value="BCD">Businessowner Client</option>
                            <option value="CND">Cashflow Natural Mkt</option>
                            <option value="BND">Business Natural Mkt</option>
                            <option value="CSD">Cashflow Suspect</option>
                            <option value="BSD">Business Suspect</option>
                            <option value="CRD">Cashflow Referral</option>
                            <option value="BRD">Business Referral</option>
                            <option value="CTD">Cashflow Target Market</option>
                            <option value="BTD">Business Target</option>
                        </select>
                        <hr />

                        <label><p style={{ color: 'whitesmoke' }}>Appointment Name:</p></label>
                        <input id="apptname-input" className="form-control sale-input" value={this.state.apptname} onChange={this.handleInputChange} name="apptname" type="text" placeholder="Give your appointment a name!" />
                        <hr />
                        <label><p style={{ color: 'whitesmoke' }}>Date of Appointment:</p></label>
                        <input id="date-input" className="form-control sale-input" value={this.state.apptdate} onChange={this.handleInputChange} name="apptdate" type="date" placeholder="Enter date for your appointment" />
                        <hr />
                        <label><p style={{ color: 'whitesmoke' }}>Mentor Tagged: </p></label>
                        {this.props.mentors ? <select id="mentorDropMenu" className="customDrop" value={this.props.apptTagged} onChange={this.handleInputChange} name="apptTagged">
                            <option value={"none"}>--Tag Mentor--</option>
                            {this.props.mentors.map(mentor => (
                                <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                            ))}
                        </select> : null}
                        <hr />
                        <label><p style={{ color: 'whitesmoke' }}>Lead Source: </p></label>
                        {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                        {this.props.userData.sources ? <select id="sourceDropMenu" className="customDrop" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource">
                            <option value={"none"}>No Lead Source Selected</option>
                            {this.props.userData.sources.map(source => (
                                <option key={source} value={source}>{source}</option>
                            ))}
                        </select> : <p>"No lead sources created yet"</p>}

                        <hr />
                        <label><p style={{ color: 'whitesmoke' }}>Target Market: </p></label>
                        {/* <input id="targetmkt-input" className="form-control" value={this.state.apptTargetMkt} onChange={this.handleInputChange} name="appttargetmkt" type="text" placeholder="Target Market goes here" /> */}
                        {this.props.userData.targetMarkets ? <select id="sourceDropMenu" className="customDrop" value={this.state.appttargetmkt} onChange={this.handleInputChange} name="appttargetmkt">
                            <option value={"none"}>No Target Market Selected</option>
                            {this.props.userData.targetMarkets.map(target => (
                                <option key={target} value={target}>{target}</option>
                            ))}
                        </select> : <p>"No target markets created yet"</p>}
                        <hr />
                        <label><p style={{ color: 'whitesmoke' }}>Appointment Notes:</p></label>
                        <input id="note-input" className="form-control sale-input" value={this.state.apptnotes} onChange={this.handleInputChange} name="apptnotes" type="text" placeholder="Enter any notes..." />
                        <br />
                        <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleApptSubmit}>Submit Appointment</button>

                    </form>
                    : null}
            </div>
        )

    }
}

export default AppointmentCreator
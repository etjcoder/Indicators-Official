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

        if (this.props.showAppt === true) {
            this.setState({
                showAppt: true
            })
        }

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
            <div className="col-12" id="prospect" style={{ textAlign: 'left', padding: '0' }}>
                <div className="card bg-light">
                    <div className="card-header">
                        <h4 
                        style={{ textAlign: 'center', padding: '10% 10% 0 10%', color: 'black', margin: '' }}
                        >Create Appointment
                        <br />
                        <span button className="btn btn-sm btn-outline-dark" onClick={this.showApptForm}>Show</span></h4>
                    </div>

               
                    {this.state.showAppt ?
                        <div className="card-body" style={{ padding: '10px', height: '400px', overflow: 'auto' }}>

                            <form >
                                <div style={{ color: 'black', padding: '20px', borderRadius: '30px' }}>


                                    <label>Type : </label>
                                    <select id="mentorDropMenu" className="" value={this.state.type} onChange={this.handleInputChange} name="type" type="text">
                                        <option value="CPD">Personal Prospect</option>
                                        <option value="CCD">Personal Delegated Client</option>
                                        <option value="CND">Personal Natural</option>
                                        <option value="CSD">Personal Suspect</option>
                                        <option value="CRD">Personal Referral</option>
                                        <option value="CTD">Personal Target</option>
                                        <option value="BPD">Business Prospect</option>
                                        <option value="BCD">Business Delegated Client</option>
                                        <option value="BND">Business Natural</option>
                                        <option value="BSD">Business Suspect</option>
                                        <option value="BRD">Business Referral</option>
                                        <option value="BTD">Business Target</option>
                                    </select>
                                    <br />
                                    {/* </div> */}


                                    {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}> */}

                                    <label>Name :</label>
                                    <input id="apptname-input" className="form-control" value={this.state.apptname} onChange={this.handleInputChange} name="apptname" type="text" placeholder="Give your appointment a name!" />
                                    {/* </div> */}

                                    {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}> */}
                                    <br />
                                    <label>Date :</label>
                                    <input id="date-input" className="form-control" value={this.state.apptdate} onChange={this.handleInputChange} name="apptdate" type="date" placeholder="Enter date for your appointment" />
                                    {/* </div> */}
                                    <br />
                                    {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}> */}
                                    <label>Mentor : </label>

                                    {this.props.mentors ?
                                        <select id="mentorDropMenu" className="" value={this.props.apptTagged} onChange={this.handleInputChange} name="apptTagged">
                                            <option value={"none"}>None Selected</option>
                                            {this.props.mentors.map(mentor => (
                                                <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                                            ))}
                                        </select>
                                        : null}
                                    {/* </div> */}
                                    <br />

                                    {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}> */}

                                    <label>Referrer : </label>
                                    {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                                    {this.props.userData.sources ? <select id="sourceDropMenu" className="" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource">
                                        <option value={"none"}>None Selected</option>
                                        {this.props.userData.sources.map(source => (
                                            <option key={source} value={source}>{source}</option>
                                        ))}
                                    </select> : <p>"No referrers created yet"</p>}
                                    {/* </div> */}
                                    <br />
                                    {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}> */}

                                    <label>Industry : </label>
                                    {/* <input id="targetmkt-input" className="form-control" value={this.state.apptTargetMkt} onChange={this.handleInputChange} name="appttargetmkt" type="text" placeholder="Target Market goes here" /> */}
                                    {this.props.userData.targetMarkets ? <select id="sourceDropMenu" className="" value={this.state.appttargetmkt} onChange={this.handleInputChange} name="appttargetmkt">
                                        <option value={"none"}>None Selected</option>
                                        {this.props.userData.targetMarkets.map(target => (
                                            <option key={target} value={target}>{target}</option>
                                        ))}
                                    </select> : <p>"No target markets created yet"</p>}
                                    {/* </div> */}
                                    <br />

                                    {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}> */}

                                    <label>Notes :</label>
                                    <input id="note-input" className="form-control" value={this.state.apptnotes} onChange={this.handleInputChange} name="apptnotes" type="text" placeholder="Enter any notes..." />
                                </div>
                                <br />
                                <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleApptSubmit}>Submit Appointment</button>

                            </form>
                        </div>
                        : null}
                </div>
            </div>
        )

    }
}

export default AppointmentCreator
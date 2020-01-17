import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import "./style.css"



class AppointmentCreatorMentor extends Component {

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

        console.log(this.props.userID)

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
        console.log("Submitting appointment under user ID: " + this.state.apptTagged)

        // var ApptData = {
        //     apptname: this.state.apptname,
        //     source: this.state.apptsource,
        //     notes: this.state.apptnotes,
        //     date: this.state.apptdate,
        //     dialer: "none",
        //     type: this.state.type,
        //     targetMarket: this.state.appttargetmkt
        // }

        // console.log(ApptData)

        var protegeID = this.state.apptTagged


        API.saveAppointment(protegeID, {
            apptname: this.state.apptname,
            source: this.state.apptsource,
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            type: this.state.type,
            targetMarket: this.state.appttargetmkt,
            mentor: this.props.userID,
            protege: this.state.apptTagged
        }).then(res =>
            cogoToast.info("Saved Appt!")
        ).catch(err => console.log(err))

        setTimeout(() => {
            // cogoToast.loading("Re-loading appointments")
            // this.props.rerender()
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
            <div className="card col-12" id="prospect" style={{ textAlign: 'left', backgroundColor: 'rgba(36,138,255,0.8)', padding: '0' }}>
                <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px' }}>Create appointment
                <br />
                    <span><button className="btn btn-sm btn-outline-dark" onClick={this.showApptForm}>Show</button></span></h4>
                <hr />
                {this.state.showAppt ?
                    <div style={{ padding: '10px', height: '400px', overflow: 'auto' }}>
                        <form style={{}}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: 'black', padding: '20px', borderRadius: '30px' }}>
                                <label className="customLabel"><p style={{ color: 'black' }}>Type :</p></label>
                                <select className="custom-select my-1 mr-sm-2 customDrop-Mentor" value={this.state.type} onChange={this.handleInputChange} name="type" type="text" placeholder="Choose an appointment type..">
                                    <option value="CPD">Standard/Cashflow Prospect</option>
                                    <option value="CCD">Standard/Cashflow Delegated Client</option>
                                    <option value="CND">Standard/Cashflow Natural Mkt</option>
                                    <option value="CSD">Standard/Cashflow Suspect</option>
                                    <option value="CRD">Standard/Cashflow Referral</option>
                                    <option value="CTD">Standard/Cashflow Target Market</option>
                                    <option value="BPD">Tier-1/Businessowner Prospect</option>
                                    <option value="BCD">Tier-1/Businessowner Client</option>
                                    <option value="BND">Tier-1/Businessowner Natural Mkt</option>
                                    <option value="BSD">Tier-1/Businessowner Suspect</option>
                                    <option value="BRD">Tier-1/Busienssowner Referral</option>


                                    <option value="BTD">Tier-1/Businessowner Target Market</option>
                                </select>
                                <br />

                                <label>Name:</label>
                                <input id="apptname-input" className="form-control" value={this.state.apptname} onChange={this.handleInputChange} name="apptname" type="text" placeholder="Give your appointment a name!" />
                                <br />
                                <label>Date:</label>
                                <input id="date-input" className="form-control" value={this.state.apptdate} onChange={this.handleInputChange} name="apptdate" type="date" placeholder="Enter date for your appointment" />
                                <br />
                                <label>Protege:</label>
                                {this.props.userData.proteges ? <select id="mentorDropMenu" className="" value={this.props.apptTagged} onChange={this.handleInputChange} name="apptTagged">
                                    <option value={"none"}>--Tag Mentor--</option>
                                    {this.props.userData.proteges.map(protege => (
                                        <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                    ))}
                                </select> : null}
                                <br />

                                <label>Lead Source:</label>
                                {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                                {this.props.protegeData.sources ? <select className="" id="sourceDropMenu" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource">
                                    <option value={"none"}>No Lead Source Selected</option>
                                    {this.props.protegeData.sources.map(source => (
                                        <option value={source}>{source}</option>
                                    ))}
                                </select> : <p style={{ color: '' }}>"No lead sources created yet"</p>}
                                <br />

                                <label>Industry :</label>
                                {/* <input id="targetmkt-input" className="form-control" value={this.state.apptTargetMkt} onChange={this.handleInputChange} name="appttargetmkt" type="text" placeholder="Target Market goes here" /> */}
                                {this.props.protegeData.targetMarkets ? <select className="" id="sourceDropMenu" value={this.state.appttargetmkt} onChange={this.handleInputChange} name="appttargetmkt">
                                    <option value={"none"}>No Target Market Selected</option>
                                    {this.props.protegeData.targetMarkets.map(target => (
                                        <option value={target}>{target}</option>
                                    ))}
                                </select> : <p style={{ color: '' }}>"No target markets created yet"</p>}
                                <br />

                                <label>Notes:</label>
                                <input id="note-input" className="form-control" value={this.state.apptnotes} onChange={this.handleInputChange} name="apptnotes" type="text" placeholder="Enter any notes..." />
                                <br />
                                <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleApptSubmit}>Submit Appointment</button>
                            </div>
                        </form>
                    </div>
                    : null}
            </div>
        )

    }
}

export default AppointmentCreatorMentor
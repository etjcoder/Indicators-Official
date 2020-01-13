import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import Modal from "react-modal"



class AppointmentItem extends Component {

    state = {
        editModalIsOpen: false,
        apptname: "",
        apptsource: "",
        apptnotes: "",
        apptdate: "",
        appttargetmkt: ""
    }

    componentDidMount() {
        // console.log("Loaded Appt Item")
        // console.log(this.props)
        this.setState({
            apptname: this.props.apptname,
            apptsource: this.props.source,
            apptnotes: this.props.notes,
            apptdate: this.props.date,
            appttargetmkt: this.props.targetMarket
        })

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

    handleApptUpdate = event => {
        event.preventDefault()

        this.setState({
            editModalIsOpen: false
        })

        API.updateAppointment(this.props.id, {
            apptname: this.state.apptname,
            source: this.state.apptsource,
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            targetMarket: this.state.appttargetmkt
        }).then(res =>
            cogoToast.info("Updated Appt!")
        ).catch(err => console.log(err))

    }

    prepEditModal = () => {
        this.setState({
            editModalIsOpen: true,
            apptname: this.state.apptname,
            apptsource: this.state.apptsource,
            apptnotes: this.state.apptnotes,
            apptdate: this.state.apptdate
        })
    }

    deleteAppt = () => {
        API.deleteAppointment(this.props.id)
            .then(res => cogoToast.error("You deleted this appointment"))
            .catch(err => console.log(err))

        setTimeout(() => {
            // cogoToast.loading("Updating Appointments")
            this.props.rerender()
        }, 500)
    }

    render() {
        return (
            <div>
                <div style={{ height: '', padding: '0 10% 0 10%', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255,0.75)', overflow: 'auto', borderRadius: 5 }}>
                    <br />
                    <h4 style={{ textAlign: 'center' }}>{this.state.apptname}</h4>
                    <h6 style={{textAlign: 'center' }}>{this.state.apptdate}</h6>
                    <hr /> <hr />

                    <p>Notes: {this.state.apptnotes}</p>
                    <p>Source: {this.state.apptsource}</p>
                    <p>type:
                    {this.props.type === "CPD" ? <p>Cashflow Prospect</p> : null}
                        {this.props.type === "BPD" ? <p>Businessowner Prospect</p> : null}
                        {this.props.type === "CCD" ? <p>Cashflow Delegated Client</p> : null}
                        {this.props.type === "BCD" ? <p>Businessowner Delegated Client</p> : null}
                        {this.props.type === "CND" ? <p>Cashflow Natural Market</p> : null}
                        {this.props.type === "BND" ? <p>Businessowner Natural Market</p> : null}
                        {this.props.type === "CSD" ? <p>Cashflow Vertical/Orphan</p> : null}
                        {this.props.type === "BSD" ? <p>Businessowner Vertical/Orphan</p> : null}
                        {this.props.type === "CRD" ? <p>Cashflow Referral</p> : null}
                        {this.props.type === "BRD" ? <p>Businessowner Referral"</p> : null}
                        {this.props.type === "CTD" ? <p>Cashflow Target Industry</p> : null}
                        {this.props.type === "BTD" ? <p>Businessowner Target Industry</p> : null}
                    </p>
                    <hr />
                    <button value={this.props.id} onClick={this.prepEditModal} className="btn btn-outline-info btn-sm" style={{ float: 'right' }}>Edit</button>
                        <button value={this.props.id} onClick={this.deleteAppt} className="btn btn-outline-danger btn-sm" style={{ float: 'right' }}>Delete</button>
                    
                </div>


                <div className="form-group" id="appt-holder ">
                    <Modal isOpen={this.state.editModalIsOpen} onAfterOpen={this.afterOpenEditModal} onRequestClose={this.closeEditModal} style={this.customStyles} contentLabel="Your Request Viewer">
                        {/* <div className="card"> */}
                        <h3>Appointment Logger</h3>
                        <form className="form-group">
                            <label>Appointment Name:</label>
                            <input id="apptname-input" className="form-control" value={this.state.apptname} onChange={this.handleInputChange} name="apptname" type="text" placeholder="Give your appointment a name!" />

                            <label>Date of Appointment:</label>
                            <input id="date-input" className="form-control" value={this.state.apptdate} onChange={this.handleInputChange} name="apptdate" type="date" placeholder="Enter date for your appointment" />

                            <label>Lead Source:</label>
                            {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                            {this.props.user.sources ? <select id="sourceDropMenu" defaultValue={this.props.source} value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource">
                                {/* <option value={"none"}>No Lead Source Selected</option> */}
                                {this.props.user.sources.map(source => (
                                    <option key={source} value={source}>{source}</option>
                                ))}
                            </select> : <p>"No lead sources created yet"</p>}

                            <br />
                            <label>Target Market:</label>
                            {/* <input id="targetmkt-input" className="form-control" value={this.state.apptTargetMkt} onChange={this.handleInputChange} name="appttargetmkt" type="text" placeholder="Target Market goes here" /> */}
                            {this.props.user.targetMarkets ? <select id="sourceDropMenu" value={this.state.appttargetmkt} onChange={this.handleInputChange} name="appttargetmkt">
                                {/* <option value={"none"}>No Target Market Selected</option> */}
                                {this.props.user.targetMarkets.map(target => (
                                    <option key={target} value={target}>{target}</option>
                                ))}
                            </select> : <p>"No target markets created yet"</p>}
                            <br />
                            <label>Appointment Notes:</label>
                            <input id="note-input" className="form-control" value={this.state.apptnotes} onChange={this.handleInputChange} name="apptnotes" type="text" placeholder="Enter any notes..." />
                            <br />
                            <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleApptUpdate}>Submit Appointment</button>
                        </form>
                        {/* </div> */}
                    </Modal>
                </div>

            </div>
        )
    }
}

export default AppointmentItem
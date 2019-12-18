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
                <div style={{ height: '200px', textAlign: 'left' }}>
                    <hr></hr>
                    <h4>{this.state.apptname}: <span>{this.state.apptdate}</span></h4>
                    <p>Notes: {this.state.apptnotes}</p>
                    <p>Source: {this.state.apptsource}</p>
                    <button value={this.props.id} onClick={this.prepEditModal} className="btn btn-info">Edit</button>
                    <button value={this.props.id} onClick={this.deleteAppt} className="btn btn-danger">Delete</button>
                    <hr></hr>
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
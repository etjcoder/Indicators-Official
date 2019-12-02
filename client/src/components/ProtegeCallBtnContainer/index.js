import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import Modal from 'react-modal'



class ProtegeCallBtnContainer extends Component {

    state = {
        username: "EvanTest",
        modalIsOpen: false,
        apptname: "",
        apptdate: "",
        apptsource: "",
        apptnotes: "",
        appttype: "",
        userdials: []
    }

    componentDidMount() {
        // console.log("Loaded Protege Page")

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
    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    afterOpenModal = () => {

    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    ///////////////////////////////////////////////////////////
    /////////// APPOINTMENT DATA INPUT ////////////////////////
    ///////////////////////////////////////////////////////////

    handleApptSubmit = event => {
        event.preventDefault()

        var ApptData = {
            apptname: this.state.apptname,
            dialer: this.props.userID,
            source: this.state.apptsource,
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            type: this.state.appttype
        }

        console.log(ApptData)

        this.setState({
            modalIsOpen: false
        })

        API.saveAppointment(this.props.userID, {
            apptname: this.state.apptname,
            dialer: this.props.userID,
            source: this.state.apptsource,
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            type: this.state.appttype
        }).then(res =>
            cogoToast.info("Logged Appt!")
        ).catch(err => console.log(err))

        this.props.rerender()
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////// CONTACTED CALL HANDLER ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    handleContactCallSubmit = (typeOfDial) => {
        var levelOfDial = "";
        if (typeOfDial === "CPD" ||
            typeOfDial === "CCD" ||
            typeOfDial === "CND" ||
            typeOfDial === "CSD") {
            levelOfDial = "cashflow"
        } else {
            levelOfDial = "business"
        }

        var dialData = {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: levelOfDial,
            contact: true
        }

        API.logCall(this.props.user._id, {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: levelOfDial,
            contact: true
        }).then(res =>
            cogoToast.info("Logged call!")
        ).catch(err => console.log())

        console.log(dialData)

        switch (dialData.type) {
            case "CPD":
                cogoToast.success("+1 Prospect Contact")
                break;
            case "BPD":
                cogoToast.success("+1 Prospect Contact")
                break;
            case "CCD":
                cogoToast.success("+1 Client Contact")
                break;
            case "BCD":
                cogoToast.success("+1 Client Contact")
                break;
            case "CND":
                cogoToast.success("+1 Natural Mkt Contact")
                break;
            case "BND":
                cogoToast.success("+1 Natural Mkt Contact");
                break;
            case "CSD":
                cogoToast.success("+1 Suspect Contact")
                break;
            case "BSD":
                cogoToast.success("+1 Suspect Contact")
            default:
                console.log("Error with cogoToast")
        }
        this.props.rerender();
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////// SCHEDULED APPOINTMENT HANDLER /////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    handleScheduledApptSubmit = (typeOfDial) => {
        var levelOfDial = ""
        if (typeOfDial === "CPD" ||
            typeOfDial === "CCD" ||
            typeOfDial === "CND" ||
            typeOfDial === "CSD") {
            levelOfDial = "cashflow"
        } else {
            levelOfDial = "business"
        }

        var dialData = {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: levelOfDial,
            contact: true,
            scheduled: true
        }

        API.logCall(this.props.user._id, {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: levelOfDial,
            contact: true,
            scheduled: true
        }).then(res =>
            cogoToast.info("Logged call!")
        ).catch(err => console.log())

        console.log(dialData)

        switch (dialData.type) {
            case "CPD":
                cogoToast.success("+1 Cashflow Scheduled")
                break;
            case "BPD":
                cogoToast.success("+1 Business Scheduled")
                break;
            case "CCD":
                cogoToast.success("+1 Cashflow Scheduled")
                break;
            case "BCD":
                cogoToast.success("+1 Businessowner Scheduled")
                break;
            case "CND":
                cogoToast.success("+1 Cashflow Scheduled")
                break;
            case "BND":
                cogoToast.success("+1 Business Scheduled");
                break;
            case "CSD":
                cogoToast.success("+1 Cashflow Scheduled")
                break;
            case "BSD":
                cogoToast.success("+1 Business Scheduled")
            default:
                console.log("Error with cogoToast")
        }

        this.setState({
            appttype: typeOfDial,
            modalIsOpen: true
        })

        this.props.rerender()
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// MISSED CALL HANDLER ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    handleMissedCallSubmit = (typeOfDial) => {
        var levelOfDial = "";
        if (typeOfDial === "CPD" ||
            typeOfDial === "CCD" ||
            typeOfDial === "CND" ||
            typeOfDial === "CSD") {
            levelOfDial = "cashflow"
        } else {
            levelOfDial = "business"
        }

        var dialData = {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: levelOfDial
        }
        console.log(dialData)

        API.logCall(this.props.user._id, {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: levelOfDial
        }).then(res =>
            cogoToast.info("Logged call!")
        ).catch(err => console.log())


        switch (dialData.type) {
            case "CPD":
                cogoToast.success("+1 Cashflow Prospect Dial")
                break;
            case "BPD":
                cogoToast.success("+1 Business Prospect Dial")
                break;
            case "CCD":
                cogoToast.success("+1 Cashflow Client Dial")
                break;
            case "BCD":
                cogoToast.success("+1 Businessowner Client Dial")
                break;
            case "CND":
                cogoToast.success("+1 Cashflow Natural Mkt Dial")
                break;
            case "BND":
                cogoToast.success("+1 Business Natural Mkt Dial");
                break;
            case "CSD":
                cogoToast.success("+1 Suspect Dial")
                break;
            case "BSD":
                cogoToast.success("+1 Suspect Dial")
            default:
                console.log("Error with cogoToast")
        }
        this.props.rerender()
    }

    findDials = () => {
        API.getDials()
            .then(res =>
                console.log(res.data)
            )
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div className="row">
                {/* <Nav /> */}
                <div className="card col" style={{ height: '500px' }}>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="prospect-tab" data-toggle="tab" href="#prospect" role="tab" aria-controls="prospect" aria-selected="true">Prospect</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="client-tab" data-toggle="tab" href="#client" role="tab" aria-controls="profile" aria-selected="false">Client</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="natural-tab" data-toggle="tab" href="#natural" role="tab" aria-controls="natural" aria-selected="false">Natural</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="suspect-tab" data-toggle="tab" href="#suspect" role="tab" aria-controles="suspect" aria-selected="false">Suspect</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" style={{ textAlign: "center", padding: '50px' }}>

                        {/* Eventually we'll want to make it so that the "Source" is triggered as a drop-down and the user can make their own Source to reference later */}
                        <div className="tab-pane fade show active" id="prospect" role="tabpanel" aria-labelledby="prospect-tab">
                            <div className="row">
                                <div className="col-md-12">
                                    <button onClick={() => this.findDials()}>Get Dial Data</button>
                                </div>
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Prospect:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("CPD")} value="CPD" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("CPD")} value="CPD" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("CPD")} value="CPD" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Prospect:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("BPD")} value="BPD" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("BPD")} value="BPD" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("BPD")} value="BPD" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Client:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("CCD")} value="CCD" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("CCD")} value="CCD" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("CCD")} value="CCD" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Client Dial:</u></h3>

                                    <button onClick={() => this.handleMissedCallSubmit("BCD")} value="BCD" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("BCD")} value="BCD" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("BCD")} value="BCD" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="natural" role="tabpanel" aria-labelledby="natural-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Natural Market:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("CND")} value="CND" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("CND")} value="CND" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("CND")} value="CND" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Natural Market:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("BND")} value="BND" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("BND")} value="BND" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("BND")} value="BND" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="suspect" role="tabpanel" aria-labelledby="suspect-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Suspect:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("CSD")} value="CSD" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("CSD")} value="CSD" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("CSD")} value="CSD" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Suspect:</u></h3>
                                    <button onClick={() => this.handleMissedCallSubmit("BSD")} value="BSD" className="btn btn-primary">Unanswered</button>
                                    <button onClick={() => this.handleContactCallSubmit("BSD")} value="BSD" className="btn btn-primary">Answered, No appointment</button>
                                    <button onClick={() => this.handleScheduledApptSubmit("BSD")} value="BSD" className="btn btn-primary">Scheduled Appointment</button>
                                </div>
                            </div>
                        </div>





                        {/* Main Section 8/12 Left
                        --Has Tabbed Card
                        --Each Tab indicated a different button 
                        // Initially can list all buttons on a big ass dashboard
                    */}

                        {/* <ProtegeCallBtnContainer /> */}


                    </div>


                    {/* <div className="col-lg-12"> */}

                    {/* <div className="card-header"> */}
                    {/* <h2>Appointments</h2>
                        <hr /> */}
                    {/* </div> */}
                    {/* <div className="card-body"> */}

                    <div className="form-group" id="appt-holder ">
                        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={this.customStyles} contentLabel="Your Request Viewer">
                            {/* <div className="card"> */}
                            <h3>Appointment Logger</h3>
                            <form className="form-group">
                                <label for="apptname-input">Appointment Name:</label>
                                <input id="apptname-input" className="form-control" value={this.state.apptname} onChange={this.handleInputChange} name="apptname" type="text" placeholder="Give your appointment a name!" />

                                <label for="date-input">Date of Appointment:</label>
                                <input id="date-input" className="form-control" value={this.state.apptdate} onChange={this.handleInputChange} name="apptdate" type="date" placeholder="Enter date for your appointment" />

                                <label for="source-input">Lead Source:</label>
                                <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" />

                                <label for="note-input">Appointment Notes:</label>
                                <input id="note-input" className="form-control" value={this.state.apptnotes} onChange={this.handleInputChange} name="apptnotes" type="text" placeholder="Enter any notes..." />
                                <br />
                                <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleApptSubmit}>Submit Appointment</button>
                            </form>
                            {/* </div> */}
                        </Modal>
                    </div>

                    {/* </div> */}

                    {/* </div> */}

                </div>
            </div >
        )
    }
}

export default ProtegeCallBtnContainer
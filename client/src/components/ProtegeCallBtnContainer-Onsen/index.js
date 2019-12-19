import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import Modal from 'react-modal'
import ons from 'onsenui';
import { SpeedDial, SpeedDialItem, Fab, Icon } from 'react-onsenui'



class ProtegeCallBtnContainer extends Component {

    state = {
        username: "EvanTest",
        modalIsOpen: false,
        apptname: "",
        apptdate: "",
        apptsource: "",
        appttargetmkt: "",
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
            notes: this.state.apptnotes,
            date: this.state.apptdate,
            type: this.state.appttype,
            source: this.state.apptsource,
            targetMarket: this.state.appttargetmkt
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
            typeOfDial === "CSD" ||
            typeOfDial === "CRD") {
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
            contact: true,
            source: this.props.leadSource,
            targetMarket: this.props.targetMarket
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
                break;
            case "CRD":
                cogoToast.success("+1 Referral Contact")
                break;
            case "BRD":
                cogoToast.success("+1 Referral Contact")
                break;
            case "CTD":
                cogoToast.success("+1 Target Mkt Contact")
                break;
            case "BTD":
                cogoToast.success("+1 Target Mkt Contact")
                break;
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
            typeOfDial === "CSD" ||
            typeOfDial === "CRD" ||
            typeOfDial === "CTD") {
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
            scheduled: true,
            source: this.props.leadSource,
            targetMarket: this.props.targetMarket
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
                break;
            case "CRD":
                cogoToast.success("+1 Referral Scheduled")
                break;
            case "BRD":
                cogoToast.success("+1 Referral Scheduled")
                break;
            case "CTD":
                cogoToast.success("+1 Target Mkt Scheduled")
                break;
            case "BTD":
                cogoToast.success("+1 Target Mkt Scheduled")
                break;
            default:
                console.log("Error with cogoToast")
        }

        this.setState({
            appttype: typeOfDial,
            appttargetmkt: this.props.targetMarket,
            apptsource: this.props.source,
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
            typeOfDial === "CSD" ||
            typeOfDial === "CRD" ||
            typeOfDial === "CTD") {
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
            level: levelOfDial,
            source: this.props.leadSource,
            targetMarket: this.props.targetMarket
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
                break;
            case "CRD":
                cogoToast.success("+1 Referral Dial")
                break;
            case "BRD":
                cogoToast.success("+1 Referral Dial")
                break;
            case "CTD":
                cogoToast.success("+1 Target Mkt Dial")
                break;
            case "BTD":
                cogoToast.success("+1 Target Mkt Dial")
                break;
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
                <div className="card col-12" style={{ height: '500px' }}>
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
                            <a className="nav-link" id="suspect-tab" data-toggle="tab" href="#suspect" role="tab" aria-controls="suspect" aria-selected="false">Suspect</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="referral-tab" data-toggle="tab" href="#referral" role="tab" aria-controls="referral" aria-selected="false">Referral</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="target-mkt-tab" data-toggle="tab" href="#target-mkt" role="tab" aria-controls="target-mkt" aria-selected="false">Target Market</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" style={{ textAlign: "center", padding: '50px' }}>

                        {/* Eventually we'll want to make it so that the "Source" is triggered as a drop-down and the user can make their own Source to reference later */}
                        <div className="tab-pane fade show active" id="prospect" role="tabpanel" aria-labelledby="prospect-tab">
                            <div className="row">



                                <div className="col-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Cashflow-Prospect</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("CPD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("CPD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("CPD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <br />
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Business-Prospect</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("BPD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("BPD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("BPD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <h3><u>Cash-Flow Prospect:</u></h3> */}
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Cashflow-Client</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("CCD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("CCD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("CCD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Business-Client</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("BCD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("BCD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("BCD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="natural" role="tabpanel" aria-labelledby="natural-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <h3><u>Cash-Flow Prospect:</u></h3> */}
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Cashflow-Natural</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("CND")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("CND")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("CND")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Business-Natural</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("BND")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("BND")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("BND")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="suspect" role="tabpanel" aria-labelledby="suspect-tab">
                            <div className="row">

                                <div className="col-md-6">
                                    {/* <h3><u>Cash-Flow Prospect:</u></h3> */}
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Cashflow-Suspect</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("CSD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("CSD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("CSD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Business-Suspect</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("BSD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("BSD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("BSD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="referral" role="tabpanel" aria-labelledby="referral-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <h3><u>Cash-Flow Prospect:</u></h3> */}
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Cashflow-Referral</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("CRD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("CRD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("CRD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Business-Referral</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("BRD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("BRD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("BRD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="target-mkt" role="tabpanel" aria-labelledby="target-mkt-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <h3><u>Cash-Flow Prospect:</u></h3> */}
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Cashflow-Target Mkt</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("CTD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("CTD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("CTD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col">
                                            <SpeedDial style={{ zIndex: 0 }} position="top left" direction="down">
                                                <Fab style={{ width: '200px', height: '50px', borderRadius: '5px' }}>
                                                    <p style={{ fontSize: '16px' }}>Business-Target Mkt</p>
                                                </Fab>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleMissedCallSubmit("BTD")} >
                                                    <p style={{ fontSize: '14px' }}>Missed Call</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleContactCallSubmit("BTD")} >
                                                    <p style={{ fontSize: '14px' }}>Contact</p>
                                                </SpeedDialItem>
                                                <SpeedDialItem style={{ zIndex: 0, width: '200px', height: '50px', borderRadius: '5px' }} onClick={() => this.handleScheduledApptSubmit("BTD")} >
                                                    <p style={{ fontSize: '14px' }}>Appointment</p>
                                                </SpeedDialItem>
                                            </SpeedDial>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Main Section 8/12 Left
                        --Has Tabbed Card
                        --Each Tab indicated a different button 
                        // Initially can list all buttons on a big ass dashboard
                    */}

                {/* <ProtegeCallBtnContainer /> */}





                {/* <div className="col-lg-12"> */}

                {/* <div className="card-header"> */}
                {/* <h2>Appointments</h2>
                        <hr /> */}
                {/* </div> */}
                {/* <div className="card-body"> */}

                <div style={{ zIndex: 1 }} className="form-group" id="appt-holder ">
                    <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={this.customStyles} contentLabel="Your Request Viewer">
                        {/* <div className="card"> */}
                        <h3>Appointment Logger</h3>
                        <form className="form-group">
                            <label for="apptname-input">Appointment Name:</label>
                            <input id="apptname-input" className="form-control" value={this.state.apptname} onChange={this.handleInputChange} name="apptname" type="text" placeholder="Give your appointment a name!" />

                            <label for="date-input">Date of Appointment:</label>
                            <input id="date-input" className="form-control" value={this.state.apptdate} onChange={this.handleInputChange} name="apptdate" type="date" placeholder="Enter date for your appointment" />
                            <br />
                            <label>Lead Source:</label>
                            {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                            {this.props.user.sources ? <select id="sourceDropMenu" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource">
                                <option value={"none"}>No Lead Source Selected</option>
                                {this.props.user.sources.map(source => (
                                    <option key={source} value={source}>{source}</option>
                                ))}
                            </select> : <p>"No lead sources created yet"</p>}

                            <br />
                            <label>Target Market:</label>
                            {/* <input id="targetmkt-input" className="form-control" value={this.state.apptTargetMkt} onChange={this.handleInputChange} name="appttargetmkt" type="text" placeholder="Target Market goes here" /> */}
                            {this.props.user.targetMarkets ? <select id="sourceDropMenu" value={this.state.appttargetmkt} onChange={this.handleInputChange} name="appttargetmkt">
                                <option value={"none"}>No Target Market Selected</option>
                                {this.props.user.targetMarkets.map(target => (
                                    <option key={target} value={target}>{target}</option>
                                ))}
                            </select> : <p>"No target markets created yet"</p>}
                            <br />
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

            </div >
        )
    }
}

export default ProtegeCallBtnContainer
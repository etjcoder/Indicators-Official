import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import Modal from 'react-modal'
import { Button } from 'shards-react';
import "./style.css"
import SourceSelector from '../SourceSelector';
import TargetMarketSelector from '../TargetMarketSelector'

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
        userdials: [],
        otherAttributes: null
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
            source: this.props.source,
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
            source: this.props.source,
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
            source: this.props.source,
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
                <div className="card col-12" style={{backgroundColor: 'transparent'}}>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" id="prospect-label">
                            <a className="nav-link active" id="prospect-tab" data-toggle="tab" href="#prospect" role="tab" aria-controls="prospect" aria-selected="true">Prospect</a>
                        </li>
                        <li className="nav-item" id="client-label">
                            <a className="nav-link" id="client-tab" data-toggle="tab" href="#client" role="tab" aria-controls="profile" aria-selected="false">Client</a>
                        </li>
                        <li className="nav-item" id="natural-label">
                            <a className="nav-link" id="natural-tab" data-toggle="tab" href="#natural" role="tab" aria-controls="natural" aria-selected="false">Natural</a>
                        </li>
                        <li className="nav-item" id="suspect-label">
                            <a className="nav-link" id="suspect-tab" data-toggle="tab" href="#suspect" role="tab" aria-controls="suspect" aria-selected="false">Suspect</a>
                        </li>
                        <li className="nav-item" id="referral-label">
                            <a className="nav-link" id="referral-tab" data-toggle="tab" href="#referral" role="tab" aria-controls="referral" aria-selected="false">Referral</a>
                        </li>

                        <li className="nav-item" id="target-label">
                            <a className="nav-link" id="target-mkt-tab" data-toggle="tab" href="#target-mkt" role="tab" aria-controls="target-mkt" aria-selected="false">Target</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" style={{ textAlign: "center" }}>

                        {/* Eventually we'll want to make it so that the "Source" is triggered as a drop-down and the user can make their own Source to reference later */}
                        <div className="tab-pane fade show active" id="prospect" role="tabpanel" aria-labelledby="prospect-tab">
                            <div className="container" style={{textAlign: 'center'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                                    </div>
                                    <br />
                                    <div className="col-md-6">
                                        <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Cash-Flow:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("CPD")} value="CPD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("CPD")} value="CPD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("CPD")} value="CPD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Business:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("BPD")} value="BPD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("BPD")} value="BPD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("BPD")} value="BPD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                        <div className="container" style={{textAlign: 'center'}}>
                                <div className="row">
                                    <div className="col">
                                        <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                                    </div>
                                    <div className="col">
                                        <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Cash-Flow:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("CCD")} value="CCD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("CCD")} value="CCD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("CCD")} value="CCD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Business:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("BCD")} value="BCD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("BCD")} value="BCD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("BCD")} value="BCD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="natural" role="tabpanel" aria-labelledby="natural-tab">
                        <div className="container" style={{textAlign: 'center'}}>
                                <div className="row">
                                    <div className="col">
                                        <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                                    </div>
                                    <div className="col">
                                        <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Cash-Flow:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("CND")} value="CND" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("CND")} value="CND" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("CND")} value="CND" className="btn btn-primary">Scheduled</Button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Business:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("BND")} value="BND" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("BND")} value="BND" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("BND")} value="BND" className="btn btn-primary">Scheduled</Button>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="suspect" role="tabpanel" aria-labelledby="suspect-tab">
                        <div className="container" style={{textAlign: 'center'}}>
                                <div className="row">
                                    <div className="col">
                                        <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                                    </div>
                                    <div className="col">
                                        <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Cash-Flow:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("CSD")} value="CSD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("CSD")} value="CSD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("CSD")} value="CSD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Business:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("BSD")} value="BSD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("BSD")} value="BSD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("BSD")} value="BSD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="referral" role="tabpanel" aria-labelledby="referral-tab">
                        <div className="container" style={{textAlign: 'center'}}>
                                <div className="row">
                                    <div className="col">
                                        <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                                    </div>
                                    <div className="col">
                                        <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Cash-Flow:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("CRD")} value="CRD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("CRD")} value="CRD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("CRD")} value="CRD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Business:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("BRD")} value="BRD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("BRD")} value="BRD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("BRD")} value="BRD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="target-mkt" role="tabpanel" aria-labelledby="target-mkt-tab">
                        <div className="container" style={{textAlign: 'center'}}>
                                <div className="row">
                                    <div className="col">
                                        <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                                    </div>
                                    <div className="col">
                                        <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Cash-Flow:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("CTD")} value="CTD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("CTD")} value="CTD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("CTD")} value="CTD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <p style={{textAlign: 'center'}}>Business:</p>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="light" onClick={() => this.handleMissedCallSubmit("BTD")} value="BTD" className="btn btn-primary">Missed Call</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="info" onClick={() => this.handleContactCallSubmit("BTD")} value="BTD" className="btn btn-primary">Contacted</Button>
                                    <Button style={{ width: '80%', borderRadius: 0 }} theme="primary" onClick={() => this.handleScheduledApptSubmit("BTD")} value="BTD" className="btn btn-primary">Scheduled</Button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <hr />



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
                            <p>Appointment Logger</p>
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

                </div>

            </div >
        )
    }
}

export default ProtegeCallBtnContainer
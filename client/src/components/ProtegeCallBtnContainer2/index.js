import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import Modal from 'react-modal'
import { Button } from 'shards-react';
import "./style.css"
import SourceSelector from '../SourceSelector';
import TargetMarketSelector from '../TargetMarketSelector'
import AppointmentCreator from '../AppointmentCreator'


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
        otherAttributes: null,
        mentorTagged: "none",
        typeOfCall: 'none',
        callResult: 'none',
        customStyles: {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0,0,0,0.75)'
            }
        }
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
            targetMarket: this.state.appttargetmkt,
            mentorTagged: this.state.mentorTagged
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
            targetMarket: this.props.targetMarket,
            mentorTagged: this.state.mentorTagged
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
            targetMarket: this.props.targetMarket,
            mentorTagged: this.state.mentorTagged
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

        var dialData = {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: this.state.levelOfDial
        }
        console.log(dialData)

        API.logCall(this.props.user._id, {
            dialer: this.props.user._id,
            type: typeOfDial,
            level: this.state.levelOfDial,
            source: this.props.source,
            targetMarket: this.props.targetMarket,
            mentorTagged: this.state.mentorTagged
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

    handleCallSubmit = (event) => {
        event.preventDefault()
        console.log("You've submitted a call for this type: " + this.state.typeOfCall)


        if (this.state.typeOfCall === "none" || this.state.levelOfDial === "none" || this.state.callResult === "none") {
            cogoToast.error("ERROR: FILL OUT REQUIRED FIELDS!")
        } else {
            if (this.state.levelOfDial === "cashflow") {
                switch (this.state.typeOfCall) {
                    case "prospect":
                        this.setState({
                            dialType: "CPD"
                        })
                        this.recordDial()
                        break;
                    case "client":
                        this.setState({
                            dialType: "CCD"
                        })
                        this.recordDial()
                        break;
                    case "natural":
                        this.setState({
                            dialType: "CND"
                        })
                        this.recordDial()
                        break;
                    case "suspect":
                        this.setState({
                            dialType: "CSD"
                        })
                        this.recordDial()
                        break;
                    case "referral":
                        this.setState({
                            dialType: "CRD"
                        })
                        this.recordDial()
                        break;
                    case "target":
                        this.setState({
                            dialType: "CTD"
                        })
                        this.recordDial()
                        break;
                    default:
                        console.log("Error with typeOfCall under Cashflow")
                        break;
                }
            } else if (this.state.levelOfDial === "business") {
                switch (this.state.typeOfCall) {
                    case "prospect":
                        this.setState({
                            dialType: "BPD"
                        })
                        this.recordDial()
                        break;
                    case "client":
                        this.setState({
                            dialType: "BCD"
                        })
                        this.recordDial()
                        break;
                    case "natural":
                        this.setState({
                            dialType: "BND"
                        })
                        this.recordDial()
                        break;
                    case "suspect":
                        this.setState({
                            dialType: "BSD"
                        })
                        this.recordDial()
                        break;
                    case "referral":
                        this.setState({
                            dialType: "BRD"
                        })
                        this.recordDial()
                        break;
                    case "target":
                        this.setState({
                            dialType: "BTD"
                        })
                        this.recordDial()
                        break;
                    default:
                        console.log("Error with typeOfCall under Cashflow")
                        break;
                }
            }
        }

    }


    recordDial = () => {

        setTimeout(() => {
            if (this.state.typeOfDial === "none" || this.state.levelOfDial === "none" || this.state.callResult === "none") {
                cogoToast.error("ERROR: FILL OUT REQUIRED FIELDS!")
            } else {
                if (this.state.callResult === "MissedCall") {
                    this.handleMissedCallSubmit(this.state.dialType)
                } else if (this.state.callResult === "Contacted") {
                    this.handleContactCallSubmit(this.state.dialType)
                } else if (this.state.callResult === "Scheduled") {
                    this.handleScheduledApptSubmit(this.state.dialType)
                }

            }

        }, 500)
        //     <option value="MissedCall">No Answer</option>
        // <option value="Contacted">Contact, not scheduled</option>
        // <option value="Scheduled">Contacted, scheduled</option>

    }


    render() {
        return (
            <div className="row">
                <div className="card col-12" id="prospect" style={{ textAlign: 'left', backgroundColor: 'rgba(36,138,255,0.8)' }}>
                    <form>
                        <h2 style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', borderRadius: '10px' }}>I N D I C A T O R S</h2>
                        <hr />
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '', border: 'none' }}>
                            <label style={{ float: 'left', textAlign: 'right', marginRight: '15px', width: '200px' }}>Type of Call <span style={{ fontSize: 10 }}>(required)  </span>  </label>
                            <select style={{ marginLeft: 'auto' }} id="" className="" value={this.state.levelofDial} onChange={this.handleInputChange} name="levelOfDial">
                                <option value="none">Select Type 1</option>
                                <option value="cashflow">Standard / Cashflow</option>
                                <option value="business">Tier-1 / Businessowner</option>
                            </select>
                            <select style={{ marginLeft: 'auto' }} id="" className="" value={this.state.typeOfCall} onChange={this.handleInputChange} name="typeOfCall">
                                <option value="none">Select Type 2</option>
                                <option value="prospect">Warm Lead/Prospect</option>
                                <option value="client">Delegated Client</option>
                                <option value="natural">Natural Market</option>
                                <option value="suspect">Vertical / Orphan</option>
                                <option value="referral">New Referral</option>
                                <option value="target">Targeted Industry</option>
                                {/* <option value="BPD">Warm Lead/Prospect</option>
                            <option value="BCD">Tier-1 Delegated Client</option>
                            <option value="BND">Tier-1 Natural Market</option>
                            <option value="BSD">Tier-1 Vertical / Orphan</option>
                            <option value="BRD">Tier-1 New Referral</option>
                            <option value="BTD">Tier-1 Targeted Industry</option> */}
                            </select>
                            {/* </div> */}
                            <hr />
                            {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '100px' }}> */}
                            <label style={{ float: 'left', textAlign: 'right', marginRight: '15px', width: '200px', border: 'none' }}>Tag a Mentor <span style={{ fontSize: 10 }}>(optional)</span></label>
                            {this.props.userData.allMentors ? <select id="" className="" value={this.state.mentorTagged} onChange={this.handleInputChange} name="mentorTagged">
                                <option value="none">--------------------</option>
                                {this.props.userData.allMentors.map(mentor => (
                                    <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                                ))}
                            </select>
                                : <p style={{ fontSize: '8px' }}>You have note been assigned a Mentor yet!</p>}
                            {/* </div> */}
                            <hr />
                            {/* <hr /> */}
                            {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '100px' }}> */}
                            <SourceSelector userData={this.props.userData} setParentState={this.props.setParentState} />
                            {/* </div> */}
                            <hr />
                            {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '100px' }}> */}
                            <TargetMarketSelector userData={this.props.userData} setParentState={this.props.setParentStateTargetMkt} />
                            {/* </div> */}
                            <hr />
                            {/* <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '100px' }}> */}
                            <label style={{ float: 'left', textAlign: 'right', marginRight: '15px', width: '200px', border: 'none' }}>Call Result <span style={{ fontSize: 10 }}>(required)</span></label>
                            <select id="" className="" value={this.state.callResult} onChange={this.handleInputChange} name="callResult">
                                <option value="none">Select a Result</option>
                                <option value="MissedCall">No Answer</option>
                                <option value="Contacted">Contact, not scheduled</option>
                                <option value="Scheduled">Contacted, scheduled</option>
                            </select>


                        </div>
                        <button style={{ float: 'right' }} className="btn btn-success" onClick={this.handleCallSubmit}>Log Call</button>
                        <hr />
                    </form>
                </div>


                {/* <div className="col-lg-12"> */}

                {/* <div className="card-header"> */}
                {/* <h2>Appointments</h2>
                        <hr /> */}
                {/* </div> */}
                {/* <div className="card-body"> */}

                <div className="form-group" id="appt-holder ">
                    <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal}
                        style={this.state.customStyles}
                        contentLabel="Your Request Viewer"
                    >

                        {/* <div className="card"> */}




                        <AppointmentCreator
                            userID={this.props.userID}
                            username={this.props.username}
                            rerender={this.props.rerender}
                            userData={this.props.userData}
                            mentors={this.props.mentors}
                            showAppt={true}
                        />




                        {/* </div> */}
                    </Modal>
                </div>

                {/* </div> */}

                {/* </div> */}

            </div>


        )
    }
}

export default ProtegeCallBtnContainer
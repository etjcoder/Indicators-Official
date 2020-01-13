import React, { Component } from "react";
import "./Home.css";
import ProtegeCallBtnContainer from "../components/ProtegeCallBtnContainer"
import ProtegeCallBtnContainer2 from "../components/ProtegeCallBtnContainer2"
import AppointmentItem from "../components/AppointmentItem"
import AppointmentCreator from "../components/AppointmentCreator"
import DialDataSide from "../components/DialDataSide"
import API from "../utils/API";
import SourceCreator from "../components/SourceCreator"
import SourceSelector from "../components/SourceSelector"
import TargetMarketSelector from "../components/TargetMarketSelector"
import TargetMarketCreator from "../components/TargetMarketCreator"
import MainDataViewer from "../components/MainDataViewer"
import NoteCreator from "../components/NoteCreator"
import NoteViewer from "../components/NoteViewer"
import SalesCreator from "../components/SalesCreator"
import SalesItem from "../components/SalesItem"
import SideNavPage from "../components/SideNavPage"
import MainCalendar from "../components/MainCalendar"


class ProtegeDash extends Component {

    state = {
        user: "",
        appointments: [],
        mentors: "",
        proteges: "",
        userData: "",
        dialData: "",
        contactData: "",
        numScheduled: 0,
        CPDials: 0,
        BPDials: 0,
        CCDials: 0,
        BCDials: 0,
        CNDials: 0,
        BNDials: 0,
        CPContacts: 0,
        BPContacts: 0,
        CCContacts: 0,
        BCContacts: 0,
        CNContacts: 0,
        BNContacts: 0,
        CPAppts: 0,
        BPAppts: 0,
        CCAppts: 0,
        BCAppts: 0,
        CNAppts: 0,
        BNAppts: 0,
        CSDials: 0,
        BSDials: 0,
        CSContacts: 0,
        BSContacts: 0,
        CSAppts: 0,
        BSAppts: 0,
        CRDials: 0,
        CRContacts: 0,
        CRAppts: 0,
        BRDials: 0,
        BRContacts: 0,
        BRAppts: 0,
        CTDials: 0,
        CTContacts: 0,
        CTAppts: 0,
        BTDials: 0,
        BTContacts: 0,
        BTAppts: 0,
        leadSource: "none",
        targetMarket: "none",
        showDials: false,
        showNotes: false,
        // showCreate: false,
        showAnalytics: false,
        showAppts: false,
        showSales: false,
        showNoteViewer: false,
        showCreate: true
    }

    componentDidMount = () => {
        // console.log("Loaded Protege Page")
        // this.gatherAppointments()
        // console.log("User Data: " + this.props.user.uid)
        setTimeout(() => {
            this.getUserData()
            this.gatherMentors()
            this.gatherProteges()

        }, 1500)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    setParentState = (data) => {
        this.setState({
            leadSource: data
        })
    }

    setParentStateTargetMkt = (data) => {
        this.setState({
            targetMarket: data
        })
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////    Data Querying Functions        //////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    getUserData = () => {
        // console.log(this.props.user.uid)
        var userID = this.props.user.uid
        API.getUserData(userID)
            .then(res =>
                this.setState({
                    userData: res.data[0],
                    dialData: res.data[0].dials
                }), this.getContactData(),
                this.gatherAppointments(),
                this.gatherSales(),
                setTimeout(() => {
                    this.parseDials()
                    this.getProtegeNoteData()
                }, 500)
            )
    }

    getProtegeNoteData = () => {
        // console.log(this.state.userData._id)

        API.getProtegeNotes(this.state.userData._id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    notes: res.data
                })
            }
            )
            .catch(err => {
                console.log(err)
            })
    }

    gatherMentors = () => {
        API.getMentors()
            .then((res) => {
                this.setState({
                    mentors: res.data
                })
            })
    }

    gatherProteges = () => {
        API.getProteges()
            .then((res) => {
                this.setState({
                    proteges: res.data
                })
            })
    }

    getContactData = () => {
        setTimeout(() => {
            // console.log("Searching for contacts using: " + this.state.userData._id)
            API.getContacts(this.state.userData._id)
                .then(res =>
                    // console.log("Contacts: " )
                    // console.log(res.data.length)
                    this.setState({
                        contactData: res.data
                    }),
                    setTimeout(() => { this.parseContacts() }, 500)
                )
        }, 1000)

    }


    gatherAppointments = () => {
        setTimeout(() => {
            // console.log("Gathering appointemnts using ID: " + this.state.userData._id)
            API.getAppointments(this.state.userData._id)
                .then(res =>
                    this.setState({
                        appointments: res.data
                    }),
                    setTimeout(() => { this.parseAppointments() }, 500)
                )
        }, 1000)
    };

    gatherSales = () => {
        setTimeout(() => {
            // console.log("Gathering sales using ID: " + this.state.userData._id)
            API.getSales(this.state.userData._id)
                .then(res =>
                    this.setState({
                        sales: res.data
                    })
                    // ,setTimeout(() => { this.parseSales}, 500)
                )
        }, 1000)
    };

    gatherNotes = () => {
        API.gatherNotes(this.state.userData._id)
            .then(res =>
                this.setState({

                })
            )
    }

    showApptViewer = () => {

        if (this.state.showApptViewer === true) {
            this.setState({
                showApptViewer: false
            })
        } else {
            this.setState({
                showApptViewer: true
            })
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// Parse Functions for Data ////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    parseAppointments = () => {
        // console.log("Parsing appointments: " + this.state.appointments)
        var CPA = 0;
        var BPA = 0;
        var CCA = 0;
        var BCA = 0;
        var CNA = 0;
        var BNA = 0;
        var CSA = 0;
        var BSA = 0;
        var CRA = 0;
        var BRA = 0;
        var CTA = 0;
        var BTA = 0;
        for (var i = 0; i < this.state.appointments.length; i++) {
            // console.log(this.state.appointments[i])
            switch (this.state.appointments[i].type) {
                case "CPD":
                    CPA++
                    break;
                case "BPD":
                    BPA++
                    break;
                case "CCD":
                    CCA++
                    break;
                case "BCD":
                    BCA++
                    break;
                case "CND":
                    CNA++
                    break;
                case "BND":
                    BNA++
                    break;
                case "CSD":
                    CSA++
                    break;
                case "BSD":
                    BSA++
                    break;
                case "CRD":
                    CRA++
                    break;
                case "BRD":
                    BRA++
                    break;
                case "CTD":
                    CTA++
                    break;
                case "BTD":
                    BTA++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPAppts: CPA,
            BPAppts: BPA,
            CCAppts: CCA,
            BCAppts: BCA,
            CNAppts: CNA,
            BNAppts: BNA,
            CSAppts: CSA,
            BSAppts: BSA,
            CRAppts: CRA,
            BRAppts: BRA,
            CTAppts: CTA,
            BTAppts: BTA
        })
    }

    parseDials = () => {
        // console.log("Parsing Dials: " + this.state.dialData)
        var CPD = 0;
        var BPD = 0;
        var CCD = 0;
        var BCD = 0;
        var CND = 0;
        var BND = 0;
        var CSD = 0;
        var BSD = 0;
        var CRD = 0;
        var BRD = 0;
        var CTD = 0;
        var BTD = 0;
        for (var i = 0; i < this.state.dialData.length; i++) {
            // console.log(this.state.dialData[i])
            switch (this.state.dialData[i].type) {
                case "CPD":
                    CPD++
                    break;
                case "BPD":
                    BPD++
                    break;
                case "CCD":
                    CCD++
                    break;
                case "BCD":
                    BCD++
                    break;
                case "CND":
                    CND++
                    break;
                case "BND":
                    BND++
                    break;
                case "CSD":
                    CSD++
                    break;
                case "BSD":
                    BSD++
                    break;
                case "CRD":
                    CRD++
                    break;
                case "BRD":
                    BRD++
                    break;
                case "CTD":
                    CTD++
                    break;
                case "BTD":
                    BTD++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPDials: CPD,
            BPDials: BPD,
            CCDials: CCD,
            BCDials: BCD,
            CNDials: CND,
            BNDials: BND,
            CSDials: CSD,
            BSDials: BSD,
            CRDials: CRD,
            BRDials: BRD,
            CTDials: CTD,
            BTDials: BTD
        })
    }

    parseContacts = () => {
        // console.log("Parsing Contacts: " + this.state.contactData)
        var CPC = 0;
        var BPC = 0;
        var CCC = 0;
        var BCC = 0;
        var CNC = 0;
        var BNC = 0;
        var CSC = 0;
        var BSC = 0;
        var CRC = 0;
        var BRC = 0;
        var CTC = 0;
        var BTC = 0;
        for (var i = 0; i < this.state.contactData.length; i++) {
            switch (this.state.contactData[i].type) {
                case "CPD":
                    CPC++
                    break;
                case "BPD":
                    BPC++
                    break;
                case "CCD":
                    CCC++
                    break;
                case "BCD":
                    BCC++
                    break;
                case "CND":
                    CNC++
                    break;
                case "BND":
                    BNC++
                    break;
                case "CSD":
                    CSC++
                    break;
                case "BSD":
                    BSC++
                    break;
                case "CRD":
                    CRC++
                    break;
                case "BRD":
                    BRC++
                    break;
                case "CTD":
                    CTC++
                    break;
                case "BTD":
                    BTC++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPContacts: CPC,
            BPContacts: BPC,
            CCContacts: CCC,
            BCContacts: BCC,
            CNContacts: CNC,
            BNContacts: BNC,
            CSContacts: CSC,
            BSContacts: BSC,
            CRContacts: CRC,
            BRContacts: BRC,
            CTContacts: CTC,
            BTContacts: BTC
        })
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// Show / Hide Modules Functions///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    showDials = () => {

        if (this.state.showDials === true) {
            this.setState({
                showDials: false
            })
        } else {
            this.setState({
                showDials: true,
                showNotes: false,
                showCreate: false,
                showAnalytics: false
            })
        }
    }

    showNotes = () => {
        if (this.state.showNotes === true) {
            this.setState({
                showNotes: false
            })
        } else {
            this.setState({
                showDials: false,
                showNotes: true,
                showCreate: false,
                showAnalytics: false
            })
        }
    }

    showCreate = () => {
        if (this.state.showCreate === true) {
            this.setState({
                showCreate: false
            })
        } else {
            this.setState({
                showDials: false,
                showNotes: false,
                showCreate: true,
                showAnalytics: false
            })
        }
    }

    showAnalytics = () => {
        if (this.state.showAnalytics === true) {
            this.setState({
                showAnalytics: false
            })
        } else {
            this.setState({
                showDials: false,
                showNotes: false,
                showCreate: false,
                showAnalytics: true
            })
        }
    }

    showAppts = () => {
        if (this.state.showAppts === true) {
            this.setState({
                showAppts: false
            })
        } else {
            this.setState({
                showDials: false,
                showNotes: false,
                showCreate: false,
                showAnalytics: false,
                showAppts: true,
                showSales: false
            })
        }
    }

    showSales = () => {
        if (this.state.showSales === true) {
            this.setState({
                showSales: false
            })
        } else {
            this.setState({
                showDials: false,
                showNotes: false,
                showCreate: false,
                showAnalytics: false,
                showAppts: false,
                showSales: true
            })
        }
    }




    render() {
        return (
            <div>
                <SideNavPage
                    dialOption={this.showDials}
                    noteOption={this.showNotes}
                    createOption={this.showCreate}
                    analyzeOption={this.showAnalytics}
                    scheduleOption={this.showAppts}
                    salesOption={this.showSales}
                />
                <div className="container" style={{ backgroundColor: 'transparent' }}>
                    <div className="row">
                        <div className="col">
                            <div className="jumbotron" style={{ width: '100%', margin: '0', backgroundColor: 'rgba(25,25,25,0.8)', color: 'whitesmoke', textAlign: 'center', fontStyle: 'Roboto, sans-serif' }}>
                                <div className="row">
                                    <div className="col" style={{ textAlign: 'center', padding: '30px' }}>
                                        <h2>{this.state.userData.firstName} {this.state.userData.lastName}</h2>
                                        <h4> Indicators Application Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Jumbotron Navig       /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/* 
                            <div className="jumbotron" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', textAlign: 'center', fontStyle: 'Roboto, sans-serif' }}>
                                <div className="row">
                                    <div className="col" style={{ textAlign: 'center' }}>
                                        <h1>Welcome {this.state.userData.firstName} {this.state.userData.lastName}!</h1>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <button onClick={() => this.showDials()} className="nav-button bttn-slant bttn-md">Dials</button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => this.showNotes()} className="nav-button bttn-slant bttn-md">Notes</button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => this.showCreate()} className="nav-button bttn-slant bttn-md">Create</button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => this.showAnalytics()} className="nav-button bttn-slant bttn-md">Analyze</button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => this.showAppts()} className="nav-button bttn-slant bttn-md">Schedule</button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => this.showSales()} className="nav-button bttn-slant bttn-md">Sales</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                    {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                    {/*  /////////////////////////    Analytics Module      /////////////////////////////// */}
                    {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                    {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                    {this.state.showAnalytics ?
                        <div id="protege-data-viewer-container">
                            <div className="row">
                                <div className="col-12">
                                    <MainDataViewer
                                        userID={this.state.userData._id}
                                        contactData={this.state.contactData}
                                        dialData={this.state.dialData}
                                        apptData={this.state.appointments}
                                        CPAppts={this.state.CPAppts}
                                        BPAppts={this.state.BPAppts}
                                        CCAppts={this.state.CCAppts}
                                        BCAppts={this.state.BCAppts}
                                        CNAppts={this.state.CNAppts}
                                        BNAppts={this.state.BNAppts}
                                        CPDials={this.state.CPDials}
                                        BPDials={this.state.BPDials}
                                        CCDials={this.state.CCDials}
                                        BCDials={this.state.BCDials}
                                        CNDials={this.state.CNDials}
                                        BNDials={this.state.BNDials}
                                        CPContacts={this.state.CPContacts}
                                        BPContacts={this.state.BPContacts}
                                        CCContacts={this.state.CCContacts}
                                        BCContacts={this.state.BCContacts}
                                        CNContacts={this.state.CNContacts}
                                        BNContacts={this.state.BNContacts}
                                        CSDials={this.state.CSDials}
                                        BSDials={this.state.BSDials}
                                        CSContacts={this.state.CSContacts}
                                        BSContacts={this.state.BSContacts}
                                        CSAppts={this.state.CSAppts}
                                        BSAppts={this.state.BSAppts}
                                        CRDials={this.state.CRDials}
                                        BRDials={this.state.BRDials}
                                        CRContacts={this.state.CRContacts}
                                        BRContacts={this.state.BRContacts}
                                        CRAppts={this.state.CRAppts}
                                        BRAppts={this.state.BRAppts}
                                        CTDials={this.state.CTDials}
                                        BTDials={this.state.BTDials}
                                        CTContacts={this.state.CTContacts}
                                        BTContacts={this.state.BTContacts}
                                        CTAppts={this.state.CTAppts}
                                        BTAppts={this.state.BTAppts}
                                        userData={this.state.userData}
                                    // sources={this.state.leadSource}
                                    />
                                </div>
                            </div>
                        </div>
                        : null}


                    <div className="row" style={{ marginTop: '20px', marginBottom: 200 }}>
                        <div className="col-lg-6">
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Dial Controller       /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.showDials ?
                                <div id="call-button-container" style={{ textAlign: 'center' }}>
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col">
                                                    <ProtegeCallBtnContainer2
                                                        rerender={this.getUserData}
                                                        user={this.state.userData}
                                                        userID={this.state.userData._id}
                                                        source={this.state.leadSource}
                                                        targetMarket={this.state.targetMarket}
                                                        userData={this.state.userData}
                                                        setParentState={this.setParentState}
                                                        setParentStateTargetMkt={this.setParentStateTargetMkt}
                                                        username={this.state.user}
                                                        rerender={this.gatherAppointments}
                                                        mentors={this.state.mentors}
                                                    />
                                                    {/* <div className="row">
                            <div className="col-6">
                                <SourceSelector userData={this.state.userData} setParentState={this.setParentState} />
                            </div>

                            <AppointmentCreator
                                                userID={this.state.userData._id}
                                                username={this.state.user}
                                                rerender={this.gatherAppointments}
                                                userData={this.state.userData}
                                                mentors={this.state.mentors}

                                            />
                            <div className="col-6">
                                <TargetMarketSelector userData={this.state.userData} setParentState={this.setParentStateTargetMkt} />
                            </div>
                        </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Note Module           /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.showNotes ?
                                <div id="note-container">
                                    <div className="row">
                                        <div className="col card" style={{ padding: '50px', backgroundColor: 'rgba(77,160,255,0.80)', color: 'whitesmoke' }}>
                                            <h2 style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px', borderRadius: '10px' }}>Notes</h2>
                                            <NoteCreator
                                                userData={this.state.userData}
                                                userID={this.state.userData._id}
                                                proteges={this.state.proteges}
                                                mentors={this.state.mentors}
                                            />
                                            <hr />
                                            <div style={{ height: '50px', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.50)' }}>
                                                <p style={{ textAlign: 'center', paddingTop: '5px' }}>Your Notes</p>
                                            </div>
                                            {this.state.showNoteViewer ?
                                                <NoteViewer
                                                    userData={this.state.userData}
                                                    userID={this.state.userData._id}
                                                    proteges={this.state.proteges}
                                                    mentors={this.state.mentors}
                                                    taggedNotes={this.state.notes}
                                                    rerender={this.getProtegeNoteData}
                                                    fontSize={'20px'}
                                                />
                                                : null}
                                            <div style={{ height: '20px', color: 'black', backgroundColor: 'rgba(0,0,0,0.50)' }}>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                : null}

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Creation Tool         /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.showCreate ?
                                <div className="col card" style={{ padding: '50px', backgroundColor: 'rgba(77,160,255,0.80)', color: 'whitesmoke' }}>
                                    <h2 style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px', borderRadius: '10px' }}>C R E A T E</h2>
                                    <div className="row">

                                        <div className="col-md-6" style={{ padding: '2%', textAlign: 'center' }}>
                                            {/* <p>Lead Source Creation:</p> */}
                                            <SourceCreator userData={this.state.userData} />
                                            {/* Add a View/Edit Source option */}
                                            <hr />
                                        </div>
                                        <div className="col-md-6" style={{ padding: '2%', textAlign: 'center' }}>
                                            {/* <p>Target Market Creation:</p> */}
                                            <TargetMarketCreator userData={this.state.userData} />
                                            {/* Add a View/Edit Target Market option */}
                                        </div>
                                        <div className="col-12" style={{ padding: '2%' }}>
                                            <p></p>
                                            <AppointmentCreator
                                                userID={this.state.userData._id}
                                                username={this.state.user}
                                                rerender={this.gatherAppointments}
                                                userData={this.state.userData}
                                                mentors={this.state.mentors}

                                            />
                                        </div>
                                        <div className="col-12" style={{ padding: '2%' }}>
                                            <p></p>
                                            <SalesCreator
                                                userID={this.state.userData._id}
                                                username={this.state.user}
                                                // rerender={this.gatherSales}
                                                userData={this.state.userData}
                                                mentors={this.state.mentors}
                                            />
                                        </div>
                                    </div>
                                </div>
                                : null}

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Analytics Module      /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.showAnalytics ?
                                <div id="protege-data-viewer-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <MainDataViewer
                                                userID={this.state.userData._id}
                                                contactData={this.state.contactData}
                                                dialData={this.state.dialData}
                                                apptData={this.state.appointments}
                                                CPAppts={this.state.CPAppts}
                                                BPAppts={this.state.BPAppts}
                                                CCAppts={this.state.CCAppts}
                                                BCAppts={this.state.BCAppts}
                                                CNAppts={this.state.CNAppts}
                                                BNAppts={this.state.BNAppts}
                                                CPDials={this.state.CPDials}
                                                BPDials={this.state.BPDials}
                                                CCDials={this.state.CCDials}
                                                BCDials={this.state.BCDials}
                                                CNDials={this.state.CNDials}
                                                BNDials={this.state.BNDials}
                                                CPContacts={this.state.CPContacts}
                                                BPContacts={this.state.BPContacts}
                                                CCContacts={this.state.CCContacts}
                                                BCContacts={this.state.BCContacts}
                                                CNContacts={this.state.CNContacts}
                                                BNContacts={this.state.BNContacts}
                                                CSDials={this.state.CSDials}
                                                BSDials={this.state.BSDials}
                                                CSContacts={this.state.CSContacts}
                                                BSContacts={this.state.BSContacts}
                                                CSAppts={this.state.CSAppts}
                                                BSAppts={this.state.BSAppts}
                                                CRDials={this.state.CRDials}
                                                BRDials={this.state.BRDials}
                                                CRContacts={this.state.CRContacts}
                                                BRContacts={this.state.BRContacts}
                                                CRAppts={this.state.CRAppts}
                                                BRAppts={this.state.BRAppts}
                                                CTDials={this.state.CTDials}
                                                BTDials={this.state.BTDials}
                                                CTContacts={this.state.CTContacts}
                                                BTContacts={this.state.BTContacts}
                                                CTAppts={this.state.CTAppts}
                                                BTAppts={this.state.BTAppts}
                                                userData={this.state.userData}
                                            // sources={this.state.leadSource}
                                            />
                                        </div>
                                    </div>
                                </div>
                                : null}



                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Appointment Tool      /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.showAppts ?

                                <div id="appointments-container">
                                    <div className="row">
                                        <div className="col-12" style={{ zIndex: 0 }}>
                                            <MainCalendar
                                                appointments={this.state.appointments}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <p></p>
                                            <AppointmentCreator
                                                userID={this.state.userData._id}
                                                username={this.state.user}
                                                rerender={this.gatherAppointments}
                                                userData={this.state.userData}
                                                mentors={this.state.mentors}

                                            />
                                        </div>
                                        <div className="col-12">
                                            <div className="card col-12" style={{ marginBottom: '10px', marginTop: '10px', textAlign: "left", padding: 10, height: '', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8)' }}>

                                                <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px' }}>Appointment Manager
                                                <br />
                                                    <span button className="btn btn-sm btn-outline-dark" onClick={this.showApptViewer}>Quick Show</span><span button className="btn btn-sm btn-outline-dark" onClick={this.showApptForm}>Show Full</span></h4>

                                                {this.state.showApptViewer ?
                                                    <div>
                                                        {
                                                            this.state.appointments ?
                                                                <div style={{ height: '400px', overflow: 'auto' }}>
                                                                    {
                                                                        this.state.appointments.map(appt => (
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
                                                                                user={this.state.userData}
                                                                                targetMarket={appt.targetMarket}
                                                                                mentors={this.state.mentors}
                                                                            />
                                                                        ))
                                                                    }
                                                                </div>
                                                                : null
                                                        }
                                                    </div> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Sales Tool            /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.showSales ?
                                <div id="sales-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <p></p>
                                            <SalesCreator
                                                userID={this.state.userData._id}
                                                username={this.state.user}
                                                // rerender={this.gatherSales}
                                                userData={this.state.userData}
                                                mentors={this.state.mentors}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <div className="card" style={{ textAlign: "center", margin: 20, padding: 40, height: 1000, overflow: 'auto', backgroundColor: 'rgba(114,180,255,0.8)' }}>
                                                <h4 style={{ color: 'whitesmoke' }}>Your Sales</h4>
                                                {this.state.sales ? <div>
                                                    {this.state.sales.map(sale => (
                                                        <SalesItem
                                                            key={sale._id}
                                                            id={sale._id}
                                                            saleType={sale.clientType}
                                                            saleName={sale.saleName}
                                                            saleSource={sale.leadSource}
                                                            saleNotes={sale.saleNotes}
                                                            saleDate={sale.saleDate}
                                                            saleTargetMkt={sale.targetMarket}
                                                            saleCommission={sale.commission}
                                                            salePercentage={sale.percentageProtege}
                                                            saleTaggedPercentage={sale.percentageMentor}
                                                            saleProduct={sale.product}
                                                            saleWriter={sale.protege}
                                                            saleTagged={sale.mentor}
                                                            mentors={this.state.mentors}
                                                            userData={this.state.userData}
                                                        />
                                                    ))
                                                    } </div>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}

                        </div>

                        <div className="col-lg-3">

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////    Middle Quick Data Viewer       ////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            <div className="side-date-container">
                                <div className="row">
                                    <div className="col-12">
                                        <DialDataSide
                                            userID={this.state.userData._id}
                                            contactData={this.state.contactData}
                                            dialData={this.state.dialData}
                                            apptData={this.state.appointments}
                                            CPAppts={this.state.CPAppts}
                                            BPAppts={this.state.BPAppts}
                                            CCAppts={this.state.CCAppts}
                                            BCAppts={this.state.BCAppts}
                                            CNAppts={this.state.CNAppts}
                                            BNAppts={this.state.BNAppts}
                                            CPDials={this.state.CPDials}
                                            BPDials={this.state.BPDials}
                                            CCDials={this.state.CCDials}
                                            BCDials={this.state.BCDials}
                                            CNDials={this.state.CNDials}
                                            BNDials={this.state.BNDials}
                                            CPContacts={this.state.CPContacts}
                                            BPContacts={this.state.BPContacts}
                                            CCContacts={this.state.CCContacts}
                                            BCContacts={this.state.BCContacts}
                                            CNContacts={this.state.CNContacts}
                                            BNContacts={this.state.BNContacts}
                                            CSDials={this.state.CSDials}
                                            BSDials={this.state.BSDials}
                                            CSContacts={this.state.CSContacts}
                                            BSContacts={this.state.BSContacts}
                                            CSAppts={this.state.CSAppts}
                                            BSAppts={this.state.BSAppts}
                                            CRDials={this.state.CRDials}
                                            BRDials={this.state.BRDials}
                                            CRContacts={this.state.CRContacts}
                                            BRContacts={this.state.BRContacts}
                                            CRAppts={this.state.CRAppts}
                                            BRAppts={this.state.BRAppts}
                                            CTDials={this.state.CTDials}
                                            BTDials={this.state.BTDials}
                                            CTContacts={this.state.CTContacts}
                                            BTContacts={this.state.BTContacts}
                                            CTAppts={this.state.CTAppts}
                                            BTAppts={this.state.BTAppts}
                                        />
                                    </div>
                                    <br />
                                    <div className="col-12" style={{ padding: 10, height: '', overflow: 'auto' }}>
                                        <div className="container card">
                                            <SourceCreator userData={this.state.userData} />
                                        </div>
                                    </div>
                                    <div className="col-12" style={{ padding: 10, height: '', overflow: 'auto' }}>
                                        <div className="contianer card">
                                            <TargetMarketCreator userData={this.state.userData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                        {/*  /////////////////////////    Side Data Tools      /////////////////////////////// */}
                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}


                        <div className="col-lg-3">
                            <div id="">
                                <div className="row">

                                    {/* <div className="col-12"> */}
                                    <div style={{ width: '100%', marginBottom: '10px' }}>
                                        <AppointmentCreator
                                            userID={this.state.userData._id}
                                            username={this.state.user}
                                            rerender={this.gatherAppointments}
                                            userData={this.state.userData}
                                            mentors={this.state.mentors}

                                        />
                                    </div>
                                    {/* </div> */}
                                    <br />
                                    <br />

                                    {/* <div className="col-12"> */}

                                    <div className="card col-12" style={{ marginBottom: '10px', textAlign: "left", padding: 10, height: '', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8)' }}>

                                        <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px' }}>View/Edit Appointments <span button className="btn btn-sm btn-outline-dark" onClick={this.showApptViewer}>Quick Show</span><span button className="btn btn-sm btn-outline-dark" onClick={this.showApptForm}>Show Full</span></h4>

                                        {this.state.showApptViewer ?
                                            <div>
                                                {
                                                    this.state.appointments ?
                                                        <div style={{ height: '400px', overflow: 'auto' }}>
                                                            {
                                                                this.state.appointments.map(appt => (
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
                                                                        user={this.state.userData}
                                                                        targetMarket={appt.targetMarket}
                                                                        mentors={this.state.mentors}
                                                                    />
                                                                ))
                                                            }
                                                        </div>
                                                        : null
                                                }
                                            </div> : null}
                                    </div>

                                    {/* </div> */}
                                    {/* <div className="col-12" style={{ zIndex: 0 }}> */}
                                    <div className="card col-12" style={{ zIndex: 0, marginBottom: '10px', textAlign: 'center', padding: 10, height: '350px', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8', padding: '10px' }}>
                                        <div style={{ height: '50px', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.50)' }}>
                                            <p style={{ textAlign: 'center', paddingTop: '5px' }}>Your Notes</p>
                                        </div>
                                        {this.state.showNoteViewer ?
                                            <div style={{ fontSize: '12px' }}>
                                                <NoteViewer
                                                    userData={this.state.userData}
                                                    userID={this.state.userData._id}
                                                    proteges={this.state.proteges}
                                                    mentors={this.state.mentors}
                                                    taggedNotes={this.state.notes}
                                                    rerender={this.getProtegeNoteData}
                                                    fontSize={'14px'}
                                                />
                                            </div>
                                            : null}
                                        <div style={{ height: '20px', color: 'black', backgroundColor: 'rgba(0,0,0,0.50)' }}>
                                        </div>
                                    </div>

                                    <div className="card col-12" style={{ zIndex: 0, marginBottom: '10px', textAlign: 'center', padding: 10, height: '250px', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8', padding: '10px' }}>
                                        <NoteCreator
                                            userData={this.state.userData}
                                            userID={this.state.userData._id}
                                            proteges={this.state.proteges}
                                            mentors={this.state.mentors}
                                        />
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        )
    }
}

export default ProtegeDash
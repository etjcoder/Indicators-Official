import React, { Component } from "react";
import "./Home.css";
// import Nav from "../components/Nav";
import API from "../utils/API";
import MentorDataViewer from "../components/MentorDataViewer"
// import NoteViewer from "../components/NoteViewer";
// import Header from "../components/Header";
// import TopBarMentor from "../components/TopBarMentor";
// import NoteViewer from "../components/NoteViewer";
// import NoteInput from "../components/NoteInput";
// import ProtegeProfileContainer from "../components/ProtegeProfileContainer";
//     import ProtegeProfile from "../component/ProtegeProfile"
// import MentorAnalytics from "../components/MentorAnalytics";
//     import AnalyticsMBasic from "../components/AnalyticsMB";
//     import AnalyticsMAdvanced from "../components/AnalyticsMAdvanced";
import NoteViewerMentor from "../components/NoteViewerMentor"
import NoteCreatorMentor from "../components/NoteCreatorMentor"
import SalesCreatorMentor from "../components/SalesCreatorMentor"
import SalesItemMentor from "../components/SalesItemMentor"
import AppointmentItem from "../components/AppointmentItem";
import AppointmentCreatorMentor from "../components/AppointmentCreatorMentor"
import './Mentor.css'
// import SideNavPageMentor from "../components/SideNavPageMentor";
import MainCalendar from "../components/MainCalendar"
// import AppointmentCreator from "../components/AppointmentCreator";

class MentorDash extends Component {

    state = {
        mentor: "",
        protegeData: "",
        dialData: "",
        appointments: "",
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
        protegeSelected: "",
        taggedNotes: "",
        postedNotes: "",
        viewMainData: true,
        viewAppointments: false,
        viewNotes: false,
        viewSales: false,
        showNoteViewer: false,
        showAnalyticsData: false
    }

    componentDidMount() {
        console.log("Loaded Mentor Page")
        setTimeout(() => {
            this.getMentorData()
        }, 1200)
    }

    getMentorData = () => {
        console.log(this.props.user.uid)
        var userID = this.props.user.uid
        API.getMentor(userID)
            .then(res =>
                this.setState({
                    mentor: res.data[0]
                }),
                setTimeout(() => {
                    this.getProtegeData()
                    this.getMentorNoteData()
                    this.gatherMentorSales()
                    this.gatherMentorAppts()
                }, 500))
            .catch(err => {
                console.log(err)
            })
    }


    getMentorNoteData = () => {
        console.log(this.state.mentor._id)

        API.getMentorNotes(this.state.mentor._id)
            .then(res =>
                this.setState({
                    notes: res.data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    gatherMentorSales = () => {
        console.log(this.state.mentor._id)


        API.getMentorSales(this.state.mentor._id)
            .then(res =>
                this.setState({
                    salesData: res.data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    gatherMentorAppts = () => {
        console.log(this.state.mentor._id)
        API.getMentorAppts(this.state.mentor._id)
            .then(res =>
                this.setState({
                    mentorViewAppts: res.data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getProtegeData = () => {
        console.log(this.state.mentor.proteges.length)
        var proteges = this.state.mentor.proteges
        var newestProtegeIndex = proteges.length - 1

        console.log("Looking for: " + proteges[newestProtegeIndex]._id)
        API.getUserDataById(proteges[newestProtegeIndex]._id)
            .then(res => {
                console.log(res)
                this.setState({
                    protegeData: res.data[0],
                    dialData: res.data[0].dials,
                    protegeSelected: res.data[0]._id,
                    appointments: res.data[0].appointments
                })
            }
                , this.getContactData(),
                // this.gatherAppointments(),
                setTimeout(() => {
                    this.parseDials()
                    this.parseAppointments()
                }, 500)
            )
    }

    getNextProtegeData = () => {
      

        console.log("Looking for: " + this.state.protegeSelected._id)
        API.getUserDataById(this.state.protegeSelected._id)
            .then(res => {
                console.log(res)
                this.setState({
                    protegeData: res.data[0],
                    dialData: res.data[0].dials,
                    protegeSelected: res.data[0]._id,
                    appointments: res.data[0].appointments
                })
            }
                , this.getContactData(),
                // this.gatherAppointments(),
                setTimeout(() => {
                    this.parseDials()
                    this.parseAppointments()
                }, 2000)
            )

    }

    getContactData = () => {
        setTimeout(() => {
            console.log("Searching for contacts using: " + this.state.protegeData._id)
            API.getContacts(this.state.protegeData._id)
                .then(res =>
                    // console.log(res.data.length)
                    this.setState({
                        contactData: res.data
                    }),
                    setTimeout(() => { this.parseContacts() }, 500)
                )
        }, 1000)

    }


    // gatherAppointments = () => {
    //     setTimeout(() => {
    //         console.log("Gathering appointemnts using ID: " + this.state.protegeData._id)
    //         API.getAppointments(this.state.protegeData._id)
    //             .then(res =>
    //                 this.setState({
    //                     appointments: res.data
    //                 }),
    //                 setTimeout(() => { this.parseAppointments() }, 500)
    //             )
    //     }, 1000)
    // };

    parseAppointments = () => {
        console.log("Parsing appointments: " + this.state.appointments)
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
            console.log(this.state.appointments[i])
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
        console.log("Parsing Dials: " + this.state.dialData)
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
        console.log("Parsing Contacts: " + this.state.contactData)
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

    handleProtegeChange = (event) => {
        event.preventDefault()
        console.log(this.state.protegeSelected)
        API.getUserDataById(this.state.protegeSelected)
            .then(res => {
                console.log(res)
                this.setState({
                    protegeData: res.data[0],
                    dialData: res.data[0].dials,
                    protegeSelected: res.data[0]._id,
                    appointments: res.data[0].appointments
                })
            }
                , this.getContactData(),
                // this.gatherAppointments(),
                setTimeout(() => { this.parseDials() }, 500)
            )
    }

    // viewMainData = () => {}
    viewMainData = () => {
        if (this.state.viewMainData === true) {
            this.setState({
                viewMainData: false
            })
        } else {
            this.setState({
                viewMainData: true,
                viewAppointments: false,
                viewNotes: false,
                viewSales: false
            })
        }
    }

    // viewAppointments = () => {}
    viewAppointments = () => {
        if (this.state.viewAppointments === true) {
            this.setState({
                viewAppointments: false
            })
        } else {
            this.setState({
                viewMainData: false,
                viewAppointments: true,
                viewNotes: false,
                viewSales: false
            })
        }
    }

    // viewNotes = () => {}
    viewNotes = () => {
        if (this.state.viewNotes === true) {
            this.setState({
                viewNotes: false
            })
        } else {
            this.setState({
                viewMainData: false,
                viewAppointments: false,
                viewNotes: true,
                viewSales: false
            })
        }
    }
    // viewSales = () => {}
    viewSales = () => {
        if (this.state.viewSales === true) {
            this.setState({
                viewSales: false
            })
        } else {
            this.setState({
                viewMainData: false,
                viewAppointments: false,
                viewNotes: false,
                viewSales: true
            })
        }
    }

    showApptViewer = () => {

        if (!this.state.showApptViewer) {
            this.setState({
                showApptViewer: true
            })
        } else {
            this.setState({
                showApptViewer: false
            })
        }
    }

    showNoteViewer = () => {
        if (!this.state.showNoteViewer) {
            this.setState({
                showNoteViewer: true
            })
        } else {
            this.setState({
                showNoteViewer: false
            })
        }
    }

    showAnalyticsData = () => {
        if (!this.state.showAnalyticsData) {
            this.setState({
                showAnalyticsData: true
            })
        } else {
            this.setState({
                showAnalyticsData: false
            })
        }
    }

    showSalesViewer = () => {
        if (!this.state.showSalesViewer) {
            this.setState({
                showSalesViewer: true
            })
        } else {
            this.setState({
                showSalesViewer: false
            })
        }
    }

    handleScopeChange = (e) => {
        e.preventDefault()
        console.log(this.state.scopeSelected)
        if (this.state.scopeSelected === "viewAll") {
            this.getNextProtegeData()
        } else if (this.state.scopeSelected === "viewWeekly") {
            this.getWeeklyDials()
            this.getWeeklyAppts()
        } else if (this.state.scopeSelected === "viewMonthly") {
            this.getMonthlyDials()
            this.getMonthlyAppts()
        }
    }

    getWeeklyDials = () => {
        API.getWeeklyDials(this.state.protegeData._id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    dialData: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })

        setTimeout(() => {
            this.parseWeeklyDials()
            this.parseWeeklyContacts()
        }, 1000)
    }

    getMonthlyDials = () => {
        API.getMonthlyDials(this.state.protegeData._id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    dialData: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })

        setTimeout(() => {
            this.parseMonthlyDials()
            this.parseMonthlyContacts()
        }, 1000)
    }

    getMonthlyAppts = () => {
        API.getMonthlyAppts(this.state.protegeData._id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    apptData: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })

        setTimeout(() => {
            this.parseMonthlyAppts()
        }, 1000)
    }


    getWeeklyAppts = () => {
        API.getWeeklyAppts(this.state.protegeData._id)
            .then(res => {
                this.setState({
                    apptData: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })

        setTimeout(() => {
            this.parseWeeklyAppointments()
        }, 1000)
    }

    parseWeeklyDials = () => {
        // console.log("Parsing Dials: " + this.state.dialData)
        var wCPD = 0;
        var wBPD = 0;
        var wCCD = 0;
        var wBCD = 0;
        var wCND = 0;
        var wBND = 0;
        var wCSD = 0;
        var wBSD = 0;
        var wCRD = 0;
        var wBRD = 0;
        var wCTD = 0;
        var wBTD = 0;
        for (var i = 0; i < this.state.dialData.length; i++) {
            // console.log(this.state.dialData[i])
            switch (this.state.dialData[i].type) {
                case "CPD":
                    wCPD++
                    break;
                case "BPD":
                    wBPD++
                    break;
                case "CCD":
                    wCCD++
                    break;
                case "BCD":
                    wBCD++
                    break;
                case "CND":
                    wCND++
                    break;
                case "BND":
                    wBND++
                    break;
                case "CSD":
                    wCSD++
                    break;
                case "BSD":
                    wBSD++
                    break;
                case "CRD":
                    wCRD++
                    break;
                case "BRD":
                    wBRD++
                    break;
                case "CTD":
                    wCTD++
                    break;
                case "BTD":
                    wBTD++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPDials: wCPD,
            BPDials: wBPD,
            CCDials: wCCD,
            BCDials: wBCD,
            CNDials: wCND,
            BNDials: wBND,
            CSDials: wCSD,
            BSDials: wBSD,
            CRDials: wCRD,
            BRDials: wBRD,
            CTDials: wCTD,
            BTDials: wBTD
        })
    }

    parseMonthlyDials = () => {
        // console.log("Parsing Dials: " + this.state.dialData)
        var wCPD = 0;
        var wBPD = 0;
        var wCCD = 0;
        var wBCD = 0;
        var wCND = 0;
        var wBND = 0;
        var wCSD = 0;
        var wBSD = 0;
        var wCRD = 0;
        var wBRD = 0;
        var wCTD = 0;
        var wBTD = 0;
        for (var i = 0; i < this.state.dialData.length; i++) {
            // console.log(this.state.dialData[i])
            switch (this.state.dialData[i].type) {
                case "CPD":
                    wCPD++
                    break;
                case "BPD":
                    wBPD++
                    break;
                case "CCD":
                    wCCD++
                    break;
                case "BCD":
                    wBCD++
                    break;
                case "CND":
                    wCND++
                    break;
                case "BND":
                    wBND++
                    break;
                case "CSD":
                    wCSD++
                    break;
                case "BSD":
                    wBSD++
                    break;
                case "CRD":
                    wCRD++
                    break;
                case "BRD":
                    wBRD++
                    break;
                case "CTD":
                    wCTD++
                    break;
                case "BTD":
                    wBTD++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPDials: wCPD,
            BPDials: wBPD,
            CCDials: wCCD,
            BCDials: wBCD,
            CNDials: wCND,
            BNDials: wBND,
            CSDials: wCSD,
            BSDials: wBSD,
            CRDials: wCRD,
            BRDials: wBRD,
            CTDials: wCTD,
            BTDials: wBTD
        })
    }




    parseWeeklyContacts = () => {
        // console.log("Parsing Contacts: " + this.state.contactData)
        var wCPC = 0;
        var wBPC = 0;
        var wCCC = 0;
        var wBCC = 0;
        var wCNC = 0;
        var wBNC = 0;
        var wCSC = 0;
        var wBSC = 0;
        var wCRC = 0;
        var wBRC = 0;
        var wCTC = 0;
        var wBTC = 0;
        for (var i = 0; i < this.state.dialData.length; i++) {

            if (this.state.dialData[i].contact === true) {
                switch (this.state.dialData[i].type) {
                    case "CPD":
                        wCPC++
                        break;
                    case "BPD":
                        wBPC++
                        break;
                    case "CCD":
                        wCCC++
                        break;
                    case "BCD":
                        wBCC++
                        break;
                    case "CND":
                        wCNC++
                        break;
                    case "BND":
                        wBNC++
                        break;
                    case "CSD":
                        wCSC++
                        break;
                    case "BSD":
                        wBSC++
                        break;
                    case "CRD":
                        wCRC++
                        break;
                    case "BRD":
                        wBRC++
                        break;
                    case "CTD":
                        wCTC++
                        break;
                    case "BTD":
                        wBTC++
                        break;
                    default:
                        break;
                }
            }
        }
        this.setState({
            CPContacts: wCPC,
            BPContacts: wBPC,
            CCContacts: wCCC,
            BCContacts: wBCC,
            CNContacts: wCNC,
            BNContacts: wBNC,
            CSContacts: wCSC,
            BSContacts: wBSC,
            CRContacts: wCRC,
            BRContacts: wBRC,
            CTContacts: wCTC,
            BTContacts: wBTC
        })
    }

    parseMonthlyContacts = () => {
        // console.log("Parsing Contacts: " + this.state.contactData)
        var wCPC = 0;
        var wBPC = 0;
        var wCCC = 0;
        var wBCC = 0;
        var wCNC = 0;
        var wBNC = 0;
        var wCSC = 0;
        var wBSC = 0;
        var wCRC = 0;
        var wBRC = 0;
        var wCTC = 0;
        var wBTC = 0;
        for (var i = 0; i < this.state.dialData.length; i++) {

            if (this.state.dialData[i].contact === true) {
                switch (this.state.dialData[i].type) {
                    case "CPD":
                        wCPC++
                        break;
                    case "BPD":
                        wBPC++
                        break;
                    case "CCD":
                        wCCC++
                        break;
                    case "BCD":
                        wBCC++
                        break;
                    case "CND":
                        wCNC++
                        break;
                    case "BND":
                        wBNC++
                        break;
                    case "CSD":
                        wCSC++
                        break;
                    case "BSD":
                        wBSC++
                        break;
                    case "CRD":
                        wCRC++
                        break;
                    case "BRD":
                        wBRC++
                        break;
                    case "CTD":
                        wCTC++
                        break;
                    case "BTD":
                        wBTC++
                        break;
                    default:
                        break;
                }
            }
        }
        this.setState({
            CPContacts: wCPC,
            BPContacts: wBPC,
            CCContacts: wCCC,
            BCContacts: wBCC,
            CNContacts: wCNC,
            BNContacts: wBNC,
            CSContacts: wCSC,
            BSContacts: wBSC,
            CRContacts: wCRC,
            BRContacts: wBRC,
            CTContacts: wCTC,
            BTContacts: wBTC
        })
    }

    parseWeeklyAppointments = () => {
        // console.log("Parsing appointments: " + this.state.appointments)
        var wCPA = 0;
        var wBPA = 0;
        var wCCA = 0;
        var wBCA = 0;
        var wCNA = 0;
        var wBNA = 0;
        var wCSA = 0;
        var wBSA = 0;
        var wCRA = 0;
        var wBRA = 0;
        var wCTA = 0;
        var wBTA = 0;
        for (var i = 0; i < this.state.apptData.length; i++) {
            // console.log(this.state.appointments[i])
            switch (this.state.apptData[i].type) {
                case "CPD":
                    wCPA++
                    break;
                case "BPD":
                    wBPA++
                    break;
                case "CCD":
                    wCCA++
                    break;
                case "BCD":
                    wBCA++
                    break;
                case "CND":
                    wCNA++
                    break;
                case "BND":
                    wBNA++
                    break;
                case "CSD":
                    wCSA++
                    break;
                case "BSD":
                    wBSA++
                    break;
                case "CRD":
                    wCRA++
                    break;
                case "BRD":
                    wBRA++
                    break;
                case "CTD":
                    wCTA++
                    break;
                case "BTD":
                    wBTA++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPAppts: wCPA,
            BPAppts: wBPA,
            CCAppts: wCCA,
            BCAppts: wBCA,
            CNAppts: wCNA,
            BNAppts: wBNA,
            CSAppts: wCSA,
            BSAppts: wBSA,
            CRAppts: wCRA,
            BRAppts: wBRA,
            CTAppts: wCTA,
            BTAppts: wBTA
        })
    }

    parseMonthlyAppts = () => {
        // console.log("Parsing appointments: " + this.state.appointments)
        var wCPA = 0;
        var wBPA = 0;
        var wCCA = 0;
        var wBCA = 0;
        var wCNA = 0;
        var wBNA = 0;
        var wCSA = 0;
        var wBSA = 0;
        var wCRA = 0;
        var wBRA = 0;
        var wCTA = 0;
        var wBTA = 0;
        for (var i = 0; i < this.state.apptData.length; i++) {
            // console.log(this.state.appointments[i])
            switch (this.state.apptData[i].type) {
                case "CPD":
                    wCPA++
                    break;
                case "BPD":
                    wBPA++
                    break;
                case "CCD":
                    wCCA++
                    break;
                case "BCD":
                    wBCA++
                    break;
                case "CND":
                    wCNA++
                    break;
                case "BND":
                    wBNA++
                    break;
                case "CSD":
                    wCSA++
                    break;
                case "BSD":
                    wBSA++
                    break;
                case "CRD":
                    wCRA++
                    break;
                case "BRD":
                    wBRA++
                    break;
                case "CTD":
                    wCTA++
                    break;
                case "BTD":
                    wBTA++
                    break;
                default:
                    break;
            }
        }
        this.setState({
            CPAppts: wCPA,
            BPAppts: wBPA,
            CCAppts: wCCA,
            BCAppts: wBCA,
            CNAppts: wCNA,
            BNAppts: wBNA,
            CSAppts: wCSA,
            BSAppts: wBSA,
            CRAppts: wCRA,
            BRAppts: wBRA,
            CTAppts: wCTA,
            BTAppts: wBTA
        })
    }




    render() {
        return (
            <div>
                {/* <SideNavPageMentor
                    dataOption={this.viewMainData}
                    apptOption={this.viewAppointments}
                    noteOption={this.viewNotes}
                    salesOption={this.viewSales}
                /> */}
                <div style={{ color: 'black' }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '30px' }}>
                        <div className="navbar-brand" style={{color: 'black'}} >{this.state.mentor.firstName} {this.state.mentor.lastName} Dashboard</div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <div className="nav-link" onClick={this.showDials}>Home</div>
                                </li>
                                {/* <li className="nav-item">
                                <a className="nav-link" onClick={this.showDials}>Dialing Tool</a>
                            </li> */}
                                <li className="nav-item">
                                    <div className="nav-link" onClick={this.viewMainData}>Analytics</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={this.viewNotes}>Notes</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={this.viewAppointments}>Appointments</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={this.viewSales}>Sales</div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    {/* <Nav /> */}
                    <div className="row">
                        <div className="col-12">

                            <div className="jumbotron" style={{ height: '300px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                <h3 style={{ textAlign: 'center', color: 'white' }}>Welcome {this.state.mentor.firstName}!</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 style={{ textAlign: 'center', color: 'white' }}> Please select your Protege</h4>
                                        {/* Mentor Header Here */}
                                        {/* Top Reader 8/12 Left (Sortable by Proteges, including Past)
                        --Contacts / Dials
                        --Appointments / Sales
                        --Sales / Appointment  
                    */}
                                        <form>
                                            {this.state.mentor ?

                                                <div style={{ textAlign: 'center' }}>
                                                    <span>
                                                        <select style={{}} id="protegeSelector" value={this.state.protegeSelected} onChange={this.handleInputChange} type="text" name="protegeSelected" className="customDropMentor" placeholder="Choose your protege">
                                                            {this.state.mentor.proteges.map(protege => (
                                                                <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                                            ))} </select>
                                                        <br />
                                                        <button style={{}} onClick={this.handleProtegeChange} className="btn btn-sm btn-outline-light">Search</button>
                                                    </span>
                                                    <br />

                                                </div> : null}
                                        </form>
                                    </div>
                                    <br />
                                    <div className="col-lg-6">
                                        <h4 style={{ textAlign: 'center', color: 'white' }}>Please select your Scope</h4>

                                        <form>


                                            <div style={{ textAlign: 'center' }}>

                                                <select style={{}} id="protegeSelector" value={this.state.scopeSelected} onChange={this.handleInputChange} type="text" name="scopeSelected" className="customDropMentor" placeholder="Choose your protege">
                                                    <option value={"none"}>---------------</option>
                                                    <option value={"viewAll"}>All Data</option>
                                                    <option value={"viewWeekly"}>Weekly Data</option>
                                                    <option value={"viewMonthly"}>Monthly Data</option>
                                                </select>
                                                <br />
                                                <button style={{}} onClick={this.handleScopeChange} className="btn btn-sm btn-outline-light">Apply</button>

                                                <br />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>








                    <div className="row" style={{ marginTop: '20px', marginBottom: 200 }}>



                        <div className="col-lg-8">

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////   Analytics Tool            /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}


                            {this.state.viewMainData ?
                                <div className="mentor-data-viewer-container" style={{ height: '1000px', overflow: 'auto',  marginBottom: '100px' }}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <MentorDataViewer
                                                protegeData={this.state.protegeData}
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
                                    </div>
                                </div>
                                : null}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////   Appointments Tool            /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}


                            {this.state.viewAppointments ?
                                <div className="row">
                                    <div className="col-8">
                                        <div className="card" style={{ zIndex: 0, padding: '20px' }}>

                                            <h4 style={{ textAlign: 'center' }}>Quickview Calendar</h4>
                                            <MainCalendar
                                                appointments={this.state.appointments}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <p></p>
                                        <AppointmentCreatorMentor
                                            userID={this.state.mentor._id}
                                            username={this.state.mentor.firstName + this.state.mentor.lastName}
                                            rerender={this.gatherMentorAppts}
                                            userData={this.state.mentor}
                                            proteges={this.state.mentor.proteges}
                                            protegeData={this.state.protegeData}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <div className="card bg-light" style={{ marginBottom: '10px', marginTop: '10px', textAlign: "left", padding: 10, height: '', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8)' }}>

                                            <div className="card-header">
                                                <h4 style={{ textAlign: 'center', padding: '10%', color: 'black', margin: '20px' }}>Manage Your Appointments:</h4>
                                            </div>
                                            {this.state.mentorViewAppts ?


                                                <div className="card-body bg-dark" style={{ padding: '0px 25px 0px 25px', height: '' }}>
                                                    <div style={{ height: '600px', overflow: 'auto' }}>
                                                        {this.state.mentorViewAppts.map(appt => (
                                                            <AppointmentItem
                                                                key={appt._id}
                                                                id={appt._id}
                                                                apptname={appt.apptname}
                                                                mentor={appt.mentor}
                                                                type={appt.type}
                                                                held={appt.held}
                                                                sold={appt.sold}
                                                                dialer={appt.protege}
                                                                date={appt.date}
                                                                source={appt.source}
                                                                // date={appt.date}
                                                                notes={appt.notes}
                                                                username={this.state.mentor.firstName + this.state.mentor.lastName}
                                                                rerender={this.gatherMentorAppts}
                                                                user={this.state.mentor}
                                                                targetMarket={appt.targetMarket}
                                                                mentors={this.state.mentor.proteges}
                                                                proteges={this.state.mentor.proteges}

                                                            />
                                                        ))} </div>
                                                </div>
                                                : null}
                                        </div>
                                    </div>
                                </div>
                                : null}

                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////   Notes Tool            /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}

                            {this.state.viewNotes ?
                                <div id="mentor-note-container">
                                    <div className="row" >
                                        {/* <div className="col card" style={{ padding: '50px', backgroundColor: 'rgba(77,160,255,0.8)', color: 'whitesmoke' }}>
                                        <h2 style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px', borderRadius: '10px' }}>N O T E S</h2> */}
                                        <div className="col-12">
                                            <NoteCreatorMentor
                                                userData={this.state.mentor}
                                            />
                                        </div>
                                        <br />
                                        <br />

                                    </div>




                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card bg-light" style={{ marginTop: '15px' }}>


                                                <div className="card-header">
                                                    {/* <div style={{ height: '50px', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.50)' }}> */}
                                                    <p style={{ textAlign: 'center', paddingTop: '5px' }}>Your Notes</p>
                                                </div>

                                                <div className="card-body bg-dark" style={{ padding: '0px 10px 0px 10px', marginBottom: '20px' }}>
                                                    <NoteViewerMentor
                                                        fontSize={'20px'}
                                                        notes={this.state.notes}
                                                        rerender={this.getMentorNoteData}
                                                        height={'700px'}
                                                    />
                                                </div>
                                                {/* <div style={{ height: '20px', color: 'black', backgroundColor: 'rgba(0,0,0,0.50)' }}>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}


                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  /////////////////////////   Sales Tool            /////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                            {/*  ////////////////////////////////////////////////////////////////////////////////// */}




                            {this.state.viewSales ?
                                <>
                                    <div className="row" style={{ marginBottom: '20px' }}>
                                        <div className="col-12">
                                            <SalesCreatorMentor
                                                userID={this.state.mentor._id}
                                                userData={this.state.mentor}
                                                proteges={this.state.mentor.proteges}
                                            />
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12">
                                            {/* <div className="card" style={{ marginBottom: '10px', marginTop: '10px', textAlign: "left", padding: 10, height: '', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8)' }}> */}
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: '', color: 'black' }}>Your Sales<br /><span><button className="btn btn-outline-dark" onClick={this.showSalesViewer}>Show</button></span></h4>
                                                </div>

                                                {this.state.showSalesViewer ?
                                                    <div>
                                                        {this.state.salesData ?
                                                            <div className="card-body bg-dark" style={{ padding: '0px 25px 0px 25px' }}>
                                                                <div style={{ height: '400px', overflow: 'auto' }}>
                                                                    {
                                                                        this.state.salesData.map(sale => (
                                                                            <SalesItemMentor
                                                                                key={sale._id}
                                                                                id={sale._id}
                                                                                saleType={sale.clientType}
                                                                                saleName={sale.saleName}
                                                                                saleSource={sale.leadSource}
                                                                                saleNotes={sale.saleNotes}
                                                                                saleDate={sale.saleDate}
                                                                                saleTargetMkt={sale.targetMarket}
                                                                                saleCommission={sale.commission}
                                                                                salePercentage={sale.percentageMentor}
                                                                                saleTaggedPercentage={sale.percentageProtege}
                                                                                saleProduct={sale.product}
                                                                                saleTagged={sale.protege}
                                                                                saleWriter={sale.mentor}
                                                                                proteges={this.state.mentor.proteges}
                                                                                userData={this.state.mentor}
                                                                            />
                                                                        ))
                                                                    } </div> </div>
                                                            : null}
                                                    </div>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>



                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                        {/*  /////////////////////////    Side Data Tools      /////////////////////////////// */}
                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}
                        {/*  ////////////////////////////////////////////////////////////////////////////////// */}



                        <div className="col-lg-4">
                            <div id="">
                                <div className="row">
                                    {/* <div style={{ width: '100%', marginBottom: '', }}> */}
                                    <AppointmentCreatorMentor
                                        userID={this.state.mentor._id}
                                        username={this.state.mentor.firstName + this.state.mentor.lastName}
                                        rerender={this.gatherMentorAppts}
                                        userData={this.state.mentor}
                                        proteges={this.state.mentor.proteges}
                                        protegeData={this.state.protegeData}
                                    />
                                    {/* </div> */}

                                    <br />
                                    <br />
                                    {/* </div> */}
                                </div>
                                <div className="row">
                                    <div style={{ width: '100%', marginBottom: '10px' }}>
                                        {/* <div className="card col-12" style={{ marginBottom: '10px', textAlign: 'left', padding: 10, height: '', overflow: 'auto', backgroundColor: 'rgba(36,138,255,0.8)' }}> */}

                                        <div className="card bg-light">
                                            <div className="card-header">
                                                <h4 style={{ textAlign: 'center', padding: '10% 10% 0 10%', color: 'black', margin: '0px' }}>View/Edit Appointments
                                            <span>< button className="btn btn-sm btn-outline-dark" onClick={this.showApptViewer}>Show</button></span>
                                                </h4>
                                            </div>




                                            {this.state.showApptViewer ?
                                                <div className="card-body bg-dark" style={{ padding: '0px 5px 0px 5px' }}>
                                                    {
                                                        this.state.mentorViewAppts ?
                                                            <div style={{ height: '400px', overflow: 'auto' }}>
                                                                {
                                                                    this.state.mentorViewAppts.map(appt => (
                                                                        <AppointmentItem
                                                                            key={appt._id}
                                                                            id={appt._id}
                                                                            apptname={appt.apptname}
                                                                            mentor={appt.mentor}
                                                                            type={appt.type}
                                                                            held={appt.held}
                                                                            sold={appt.sold}
                                                                            dialer={appt.protege}
                                                                            date={appt.date}
                                                                            source={appt.source}
                                                                            // date={appt.date}
                                                                            notes={appt.notes}
                                                                            username={this.state.mentor.firstName + this.state.mentor.lastName}
                                                                            rerender={this.gatherMentorAppts}
                                                                            user={this.state.mentor}
                                                                            targetMarket={appt.targetMarket}
                                                                            mentors={this.state.mentor.proteges}
                                                                            proteges={this.state.mentor.proteges}

                                                                        />
                                                                    ))}

                                                            </div>
                                                            : null}
                                                </div>
                                                : null}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-12" style={{ zIndex: 0 }} style={{ padding: '20px', height: '300px', overflow: 'auto', marginTop: '20px', marginBottom: '20px', marginLeft: '20px' }}>
                                        <h4 style={{ textAlign: 'center' }}>Quickview Calendar</h4>
                                        <MainCalendar
                                            appointments={this.state.appointments}
                                        />
                                    </div> */}
                                <div className="row">
                                    {/* <div className="col-12" style={{ zIndex: 0, padding: '', width: '100%' }}> */}
                                    {/* <div className="col-12" style={{zIndex: 0, padding: '', width: '100%'}}> */}
                                    <div className="card bg-light" style={{ marginBottom: '10px', width: '100%', zIndex: 0 }}>
                                        <div className="card-header">
                                            <h4 style={{ textAlign: 'center', padding: '10% 10% 0 10%', color: 'black', margin: '0px' }}>

                                                Your Notes:
                                                    <br />
                                                <span className="btn btn-sm btn-outline-dark" onClick={this.showNoteViewer}>Show</span>
                                            </h4>
                                        </div>

                                        {this.state.showNoteViewer ?
                                            <div className="card-body bg-dark" style={{ padding: '0px 5px 0px 5px' }}>
                                                <NoteViewerMentor
                                                    fontSize={'20px'}
                                                    notes={this.state.notes}
                                                    rerender={this.getMentorNoteData}
                                                    height={'400px'}
                                                />
                                            </div>

                                            : null}



                                        {/* <div style={{ height: '20px', color: 'black', backgroundColor: 'rgba(0,0,0,0.50)' }}>
                                            </div> */}
                                    </div>
                                    {/* </div> */}
                                </div>
                                <div className="row">
                                    {/* <div className="row"></div> */}
                                    <div className="" style={{ zIndex: 0, marginBottom: '10px', textAlign: 'center', padding: 0, height: '', overflow: 'auto', width: '100%' }}>
                                        <NoteCreatorMentor
                                            userData={this.state.mentor}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div >


        )
    }
}

export default MentorDash
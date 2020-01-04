import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import "./style.css"
import API from "../../utils/API";

class ManagerDataViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeProtegeData: "",
            activeProtegeDataPopulated: false
        }
    }

    componentDidMount = () => {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    showProtegeAnalytics = () => {
        if (this.state.showProtegeAnalyticsViewer === false) {
            this.setState({
                showProtegeAnalyticsViewer: true,
                showMentorAnalyticsViewer: false,
                showGlobalAnalyticsViewer: false
            })
        } else {
            this.setState({
                showProtegeAnalyticsViewer: false,
                activeProtegeDataPopulated: false,
                activeProtegeData: "",
                appointments: "",
                contactData: "",
                dialData: "",
                BCAppts: 0,
                BCContacts: 0,
                BCDials: 0,
                BNAppts: 0,
                BNContacts: 0,
                BNDials: 0,
                BPAppts: 0,
                BPContacts: 0,
                BPDials: 0,
                BRAppts: 0,
                BRContacts: 0,
                BRDials: 0,
                BSAppts: 0,
                BSContacts: 0,
                BSDials: 0,
                BTAppts: 0,
                BTContacts: 0,
                BTDials: 0,
                CCAppts: 0,
                CCContacts: 0,
                CCDials: 0,
                CNAppts: 0,
                CNContacts: 0,
                CNDials: 0,
                CPAppts: 0,
                CPContacts: 0,
                CPDials: 0,
                CRAppts: 0,
                CRContacts: 0,
                CRDials: 0,
                CSAppts: 0,
                CSContacts: 0,
                CSDials: 0,
                CTAppts: 0,
                CTContacts: 0,
                CTDials: 0
            })
        }
        console.log("Show Protege Analytics using: " + this.props.allProtegeData)
    }

    showMentorAnalytics = () => {
        console.log("Show Mentor Analytics using: " + this.props.allMentorData)
        if (this.state.showMentorAnalyticsViewer === false) {
            this.setState({
                showProtegeAnalyticsViewer: false,
                showMentorAnalyticsViewer: true,
                showGlobalAnalyticsViewer: false
            })
        } else {
            this.setState({
                showMentorAnalyticsViewer: false,
                activeMentorsProtegeDataPopulated: false,
                activeMentorsProtegeData: "",
                appointments: "",
                contactData: "",
                dialData: "",
                BCAppts: 0,
                BCContacts: 0,
                BCDials: 0,
                BNAppts: 0,
                BNContacts: 0,
                BNDials: 0,
                BPAppts: 0,
                BPContacts: 0,
                BPDials: 0,
                BRAppts: 0,
                BRContacts: 0,
                BRDials: 0,
                BSAppts: 0,
                BSContacts: 0,
                BSDials: 0,
                BTAppts: 0,
                BTContacts: 0,
                BTDials: 0,
                CCAppts: 0,
                CCContacts: 0,
                CCDials: 0,
                CNAppts: 0,
                CNContacts: 0,
                CNDials: 0,
                CPAppts: 0,
                CPContacts: 0,
                CPDials: 0,
                CRAppts: 0,
                CRContacts: 0,
                CRDials: 0,
                CSAppts: 0,
                CSContacts: 0,
                CSDials: 0,
                CTAppts: 0,
                CTContacts: 0,
                CTDials: 0
            })
        }
    }

    showGlobalAnalytics = () => {
        console.log("Show Global Analytics using: " + this.props.allProtegeData)
        console.log("Show Global Analytics using: " + this.props.allMentorData)
        if (this.state.showMentorAnalyticsViewer === false) {
            this.setState({
                showProtegeAnalyticsViewer: false,
                showMentorAnalyticsViewer: false,
                showGlobalAnalyticsViewer: true
            })
        } else {
            this.setState({
                showGlobalAnalyticsViewer: true
            })
        }
    }

    ////////////////////////////////////////////////////////////////////////
    ///////////////////////Protege Data Gathering //////////////////////////
    ////////////////////////////////////////////////////////////////////////

    viewProtegeData = () => {

        if (this.state.activeProtegeDataPopulated === true) {
            this.setState({
                activeProtegeDataPopulated: false,
                activeProtegeData: "",
                appointments: "",
                contactData: "",
                dialData: "",
                BCAppts: 0,
                BCContacts: 0,
                BCDials: 0,
                BNAppts: 0,
                BNContacts: 0,
                BNDials: 0,
                BPAppts: 0,
                BPContacts: 0,
                BPDials: 0,
                BRAppts: 0,
                BRContacts: 0,
                BRDials: 0,
                BSAppts: 0,
                BSContacts: 0,
                BSDials: 0,
                BTAppts: 0,
                BTContacts: 0,
                BTDials: 0,
                CCAppts: 0,
                CCContacts: 0,
                CCDials: 0,
                CNAppts: 0,
                CNContacts: 0,
                CNDials: 0,
                CPAppts: 0,
                CPContacts: 0,
                CPDials: 0,
                CRAppts: 0,
                CRContacts: 0,
                CRDials: 0,
                CSAppts: 0,
                CSContacts: 0,
                CSDials: 0,
                CTAppts: 0,
                CTContacts: 0,
                CTDials: 0
            })
        } else {
            console.log(this.state.protegeToView)
            API.getUserDataById(this.state.protegeToView)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        activeProtegeData: res.data[0],
                        activeProtegeDataPopulated: true,
                        dialData: res.data[0].dials,
                        protegeSelected: res.data[0]._id,
                        appointments: res.data[0].appointments
                    })
                },

                    this.getContactData(),
                    setTimeout(() => {
                        this.parseDials()
                        this.parseAppointments()
                    }, 500)
                )

        }
    }

    viewMentorsProtegeData = () => {
        if (this.state.activeMentorsProtegeDataPopulated === true) {
            this.setState({
                activeMentorsProtegeDataPopulated: false,
                activeMentorProtegeData: "",
                appointments: "",
                contactData: "",
                dialData: "",
                BCAppts: 0,
                BCContacts: 0,
                BCDials: 0,
                BNAppts: 0,
                BNContacts: 0,
                BNDials: 0,
                BPAppts: 0,
                BPContacts: 0,
                BPDials: 0,
                BRAppts: 0,
                BRContacts: 0,
                BRDials: 0,
                BSAppts: 0,
                BSContacts: 0,
                BSDials: 0,
                BTAppts: 0,
                BTContacts: 0,
                BTDials: 0,
                CCAppts: 0,
                CCContacts: 0,
                CCDials: 0,
                CNAppts: 0,
                CNContacts: 0,
                CNDials: 0,
                CPAppts: 0,
                CPContacts: 0,
                CPDials: 0,
                CRAppts: 0,
                CRContacts: 0,
                CRDials: 0,
                CSAppts: 0,
                CSContacts: 0,
                CSDials: 0,
                CTAppts: 0,
                CTContacts: 0,
                CTDials: 0
            })
        } else {
            console.log(this.state.mentorsProtegeToView)
            API.getUserDataById(this.state.mentorsProtegeToView)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        activeMentorsProtegeData: res.data[0],
                        activeMentorsProtegeDataPopulated: true,
                        dialData: res.data[0].dials,
                        protegeSelected: res.data[0]._id,
                        appointments: res.data[0].appointments
                    })
                },

                    this.getMContactData(),
                    setTimeout(() => {
                        this.parseDials()
                        this.parseAppointments()
                    }, 500)

                )
        }
    }

    ////////////////////////////////////////////////////////////////////////
    ///////////////////////Data Parsing ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    getContactData = () => {
        setTimeout(() => {
            console.log("Searching contacts using: " + this.state.activeProtegeData._id)
            API.getContacts(this.state.activeProtegeData._id)
                .then(res =>
                    this.setState({
                        contactData: res.data
                    }),
                    setTimeout(() => { this.parseContacts() }, 500)
                )
        }, 1000)

    }

    getMContactData = () => {
        setTimeout(() => {
            console.log("Searching contacts using: " + this.state.activeMentorsProtegeData._id)
            API.getContacts(this.state.activeMentorsProtegeData._id)
                .then(res =>
                    this.setState({
                        contactData: res.data
                    }),
                    setTimeout(() => { this.parseContacts() }, 500)
                )
        }, 1000)

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





    viewMentorData = () => {
        console.log(this.state.mentorToView)
        if (this.state.activeMentorDataPopulated === false) {
            API.getMentorById(this.state.mentorToView)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        activeMentorData: res.data[0],
                        activeMentorDataPopulated: true
                    })
                })

        } else {
            this.setState({
                activeMentorDataPopulated: false,
                activeMentorData: "",
                appointments: "",
                contactData: "",
                dialData: "",
                BCAppts: 0,
                BCContacts: 0,
                BCDials: 0,
                BNAppts: 0,
                BNContacts: 0,
                BNDials: 0,
                BPAppts: 0,
                BPContacts: 0,
                BPDials: 0,
                BRAppts: 0,
                BRContacts: 0,
                BRDials: 0,
                BSAppts: 0,
                BSContacts: 0,
                BSDials: 0,
                BTAppts: 0,
                BTContacts: 0,
                BTDials: 0,
                CCAppts: 0,
                CCContacts: 0,
                CCDials: 0,
                CNAppts: 0,
                CNContacts: 0,
                CNDials: 0,
                CPAppts: 0,
                CPContacts: 0,
                CPDials: 0,
                CRAppts: 0,
                CRContacts: 0,
                CRDials: 0,
                CSAppts: 0,
                CSContacts: 0,
                CSDials: 0,
                CTAppts: 0,
                CTContacts: 0,
                CTDials: 0
            })
        }
    }

    viewProtegeCallData = () => {
        if (this.state.viewProtegeCallData === true) {
            this.setState({
                viewProtegeCallData: false
            })
        } else {
            this.setState({
                viewProtegeCallData: true,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeSchedule = () => {
        if (this.state.viewProtegeSchedule === true) {
            this.setState({
                viewProtegeSchedule: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: true,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeAppointments = () => {
        if (this.state.viewProtegeAppointments === true) {
            this.setState({
                viewProtegeAppointments: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: true,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeSales = () => {
        if (this.state.viewProtegeSales === true) {
            this.setState({
                viewProtegeSales: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: true,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeNotes = () => {
        if (this.state.viewProtegeNotes === true) {
            this.setState({
                viewProtegeNotes: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: true,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeProfile = () => {
        if (this.state.viewProtegeProfile === true) {
            this.setState({
                viewProtegeProfile: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: true,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeWeeklyReport = () => {
        if (this.state.viewProtegeWeeklyReport === true) {
            this.setState({
                viewProtegeWeeklyReport: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: true,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeMonthlyReport = () => {
        if (this.state.viewProtegeMonthlyReport === true) {
            this.setState({
                viewProtegeMonthlyReport: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: true,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewProtegeBenchmarkReport = () => {
        if (this.state.viewProtegeBenchmarkReport === true) {
            this.setState({
                viewProtegeBenchmarkReport: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: true,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorsProtegeStatistics = () => {
        if (this.state.viewMentorsProtegeStatistics === true) {
            this.setState({
                viewMentorsProtegeStatistics: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: true,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorSchedule = () => {
        if (this.state.viewMentorSchedule === true) {
            this.setState({
                viewMentorSchedule: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: true,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorAppointments = () => {
        if (this.state.viewMentorAppointments === true) {
            this.setState({
                viewMentorAppointments: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: true,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorSales = () => {
        if (this.state.viewMentorSales === true) {
            this.setState({
                viewMentorSales: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: true,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorWeeklyReport = () => {
        if (this.state.viewMentorWeeklyReport === true) {
            this.setState({
                viewMentorWeeklyReport: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: true,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorMonthlyReport = () => {
        if (this.state.viewMentorMonthlyReport === true) {
            this.setState({
                viewMentorMonthlyReport: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: true,
                viewMentorBenchmarkReport: false
            })
        }
    }

    viewMentorBenchmarkReport = () => {
        if (this.state.viewMentorBenchmarkReport === true) {
            this.setState({
                viewMentorBenchmarkReport: false
            })
        } else {
            this.setState({
                viewProtegeCallData: false,
                viewProtegeSchedule: false,
                viewProtegeAppointments: false,
                viewProtegeSales: false,
                viewProtegeNotes: false,
                viewProtegeProfile: false,
                viewProtegeWeeklyReport: false,
                viewProtegeMonthlyReport: false,
                viewProtegeBenchmarkReport: false,
                viewMentorsProtegeStatistics: false,
                viewMentorSchedule: false,
                viewMentorAppointments: false,
                viewMentorSales: false,
                viewMentorWeeklyReport: false,
                viewMentorMonthlyReport: false,
                viewMentorBenchmarkReport: true
            })
        }
    }


    showDataOption = (e) => {
        e.preventDefault()
        switch (this.state.dataOption) {
            case "genDials":
                this.viewDialChart()
                break;
            case "genContacts":
                this.viewContactChart()
                break;
            case "genAppts":
                this.viewApptChart()
                break;
            case "cfDials":
                this.viewCFDialChart()
                break;
            case "cfContacts":
                this.viewCFContactChart()
                break;
            case "cfAppts":
                this.viewCFApptChart()
                break;
            case "boDials":
                this.viewBODialChart()
                break;
            case "boContacts":
                this.viewBOContactChart()
                break;
            case "boAppts":
                this.viewBOApptChart()
                break;
            default:
                console.log("No option selected")
                break;
        }

    }

    showCategoryOption = (e) => {
        e.preventDefault()

        switch (this.state.categoryOption) {
            case "pData":
                this.viewProspectPerformance()
                break;
            case "cData":
                this.viewClientPerformance()
                break;
            case "sData":
                this.viewSuspectPerformance()
            case "nData":
                this.viewNaturalPerformance()
                break;
            case "rData":
                this.viewReferralPerformance()
                break;
            case "tData":
                this.viewTargetPerformance()
                break;
            default:
                console.log("No proper selection made")
                break;
        }
    }


    viewDialChart = () => {
        if (this.state.showDialChart === true) {
            this.setState({
                showDialChart: false
            })
        } else {
            this.setState({
                showDialChart: true,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewContactChart = () => {
        if (this.state.showContactChart === true) {
            this.setState({
                showContactChart: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: true,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewApptChart = () => {
        if (this.state.showApptChart === true) {
            this.setState({
                showApptChart: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: true,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewCFDialChart = () => {
        if (this.state.showCashflowDials === true) {
            this.setState({
                showCashflowDials: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: true,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewCFContactChart = () => {
        if (this.state.showCashflowContacts === true) {
            this.setState({
                showCashflowContacts: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: true,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewCFApptChart = () => {
        if (this.state.showCashflowAppts === true) {
            this.setState({
                showCashflowAppts: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: true,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewBODialChart = () => {
        if (this.state.showBusinessDials === true) {
            this.setState({
                showBusinessDials: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: true,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewBOContactChart = () => {
        if (this.state.showBusinessContacts === true) {
            this.setState({
                showBusinessContacts: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: true,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewBOApptChart = () => {
        if (this.state.showBusinessAppts === true) {
            this.setState({
                showBusinessAppts: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: true,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewProspectPerformance = () => {
        if (this.state.showProspectPerformance === true) {
            this.setState({
                showProspectPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: true,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewClientPerformance = () => {
        if (this.state.showClientPerformance === true) {
            this.setState({
                showClientPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: true,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewNaturalPerformance = () => {
        if (this.state.showNaturalPerformance === true) {
            this.setState({
                showNaturalPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: true,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewSuspectPerformance = () => {
        if (this.state.showSuspectPerformance === true) {
            this.setState({
                showSuspectPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: true,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewReferralPerformance = () => {
        if (this.state.showReferralPerformance === true) {
            this.setState({
                showReferralPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: true,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewTargetPerformance = () => {
        if (this.state.showTargetPerformance === true) {
            this.setState({
                showTargetPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: true,
                showSourcePerformance: false,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewSourcePerformance = () => {
        if (this.state.showSourcePerformance === true) {
            this.setState({
                showSourcePerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: true,
                showSelectedTargetPerformance: false
            })
        }
    }

    viewSelectedTargetPerformance = () => {
        if (this.state.showSelectedTargetPerformance === true) {
            this.setState({
                showSelectedTargetPerformance: false
            })
        } else {
            this.setState({
                showDialChart: false,
                showContactChart: false,
                showApptChart: false,
                showCashflowDials: false,
                showCashflowContacts: false,
                showCashflowAppts: false,
                showBusinessDials: false,
                showBusinessContacts: false,
                showBusinessAppts: false,
                showProspectPerformance: false,
                showClientPerformance: false,
                showNaturalPerformance: false,
                showSuspectPerformance: false,
                showReferralPerformance: false,
                showTargetPerformance: false,
                showSourcePerformance: false,
                showSelectedTargetPerformance: true
            })
        }
    }


    gatherSourceData = (event) => {
        event.preventDefault()
        console.log("Gathering data on source: " + this.state.leadSource)
        // var parsedDials = []
        var parsedSourceData = {
            parsedDials: [],
            parsedContacts: [],
            parsedAppts: []
        }
        for (var i = 0; i < this.state.dialData.length; i++) {
            if (this.state.dialData[i].source === this.state.leadSource) {
                parsedSourceData.parsedDials.push(this.state.dialData[i])
            }
        }

        for (var j = 0; j < this.state.contactData.length; j++) {
            if (this.state.contactData[j].source === this.state.leadSource) {
                parsedSourceData.parsedContacts.push(this.state.contactData[j])
            }
        }

        for (var k = 0; k < this.state.appointments.length; k++) {
            if (this.state.appointments[k].source === this.state.leadSource) {
                parsedSourceData.parsedAppts.push(this.state.appointments[k])
            }
        }

        setTimeout(() => {

            this.setState({
                sourceDialData: parsedSourceData.parsedDials,
                sourceContactData: parsedSourceData.parsedContacts,
                sourceApptData: parsedSourceData.parsedAppts
            })
            setTimeout(() => {
                this.parseSourceAppts()
                this.parseSourceContacts()
                this.parseSourceDials()

                setTimeout(() => { this.viewSourcePerformance() }, 500)
            }, 500)

        }, 500)

    }

    parseSourceDials = () => {
        console.log("Parsing: " + this.state.sourceDialData)
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
        var SDials = 0;
        for (var i = 0; i < this.state.sourceDialData.length; i++) {
            // console.log(this.state.dialData[i])
            switch (this.state.sourceDialData[i].type) {
                case "CPD":
                    CPD++
                    SDials++
                    break;
                case "BPD":
                    BPD++
                    SDials++
                    break;
                case "CCD":
                    CCD++
                    SDials++
                    break;
                case "BCD":
                    BCD++
                    SDials++
                    break;
                case "CND":
                    CND++
                    SDials++
                    break;
                case "BND":
                    BND++
                    SDials++
                    break;
                case "CSD":
                    CSD++
                    SDials++
                    break;
                case "BSD":
                    BSD++
                    SDials++
                    break;
                case "CRD":
                    CRD++
                    SDials++
                    break;
                case "BRD":
                    BRD++
                    SDials++
                    break;
                case "CTD":
                    CTD++
                    SDials++
                    break;
                case "BTD":
                    BTD++
                    SDials++
                    break;
                default:
                    SDials++
                    break;
            }
        }
        this.setState({
            SCPDials: CPD,
            SBPDials: BPD,
            SCCDials: CCD,
            SBCDials: BCD,
            SCNDials: CND,
            SBNDials: BND,
            SCSDials: CSD,
            SBSDials: BSD,
            SCRDials: CRD,
            SBRDials: BRD,
            SCTDials: CTD,
            SBTDials: BTD,
            SourceDials: SDials
        })
    }


    parseSourceContacts = () => {
        console.log("Parsing: " + this.state.sourceContactData)
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
        var SContacts = 0;
        for (var i = 0; i < this.state.sourceContactData.length; i++) {
            switch (this.state.sourceContactData[i].type) {
                case "CPD":
                    CPC++
                    SContacts++
                    break;
                case "BPD":
                    BPC++
                    SContacts++
                    break;
                case "CCD":
                    CCC++
                    SContacts++
                    break;
                case "BCD":
                    BCC++
                    SContacts++
                    break;
                case "CND":
                    CNC++
                    SContacts++
                    break;
                case "BND":
                    BNC++
                    SContacts++
                    break;
                case "CSD":
                    CSC++
                    SContacts++
                    break;
                case "BSD":
                    BSC++
                    SContacts++
                    break;
                case "CRD":
                    CRC++
                    SContacts++
                    break;
                case "BRD":
                    BRC++
                    SContacts++
                    break;
                case "CTD":
                    SContacts++
                    CTC++
                    break;
                case "BTD":
                    SContacts++
                    BTC++
                    break;
                default:
                    SContacts++
                    break;
            }
        }
        this.setState({
            SCPContacts: CPC,
            SBPContacts: BPC,
            SCCContacts: CCC,
            SBCContacts: BCC,
            SCNContacts: CNC,
            SBNContacts: BNC,
            SCSContacts: CSC,
            SBSContacts: BSC,
            SCRContacts: CRC,
            SBRContacts: BRC,
            SCTContacts: CTC,
            SBTContacts: BTC,
            SourceContacts: SContacts
        })
    }

    parseSourceAppts = () => {
        console.log("Parsing: " + this.state.sourceApptData)
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
        var SAppts = 0;
        for (var i = 0; i < this.state.sourceApptData.length; i++) {
            console.log(this.state.sourceApptData[i])
            switch (this.state.sourceApptData[i].type) {
                case "CPD":
                    CPA++
                    SAppts++
                    break;
                case "BPD":
                    BPA++
                    SAppts++
                    break;
                case "CCD":
                    CCA++
                    SAppts++
                    break;
                case "BCD":
                    BCA++
                    SAppts++
                    break;
                case "CND":
                    CNA++
                    SAppts++
                    break;
                case "BND":
                    BNA++
                    SAppts++
                    break;
                case "CSD":
                    CSA++
                    SAppts++
                    break;
                case "BSD":
                    BSA++
                    SAppts++
                    break;
                case "CRD":
                    CRA++
                    SAppts++
                    break;
                case "BRD":
                    BRA++
                    SAppts++
                    break;
                case "CTD":
                    CTA++
                    SAppts++
                    break;
                case "BTD":
                    BTA++
                    SAppts++
                    break;
                default:
                    SAppts++
                    break;
            }
        }
        this.setState({
            SCPAppts: CPA,
            SBPAppts: BPA,
            SCCAppts: CCA,
            SBCAppts: BCA,
            SCNAppts: CNA,
            SBNAppts: BNA,
            SCSAppts: CSA,
            SBSAppts: BSA,
            SCRAppts: CRA,
            SBRAppts: BRA,
            SCTAppts: CTA,
            SBTAppts: BTA,
            SourceAppts: SAppts
        })
    }




    render() {
        return (
            <div className="container" id="mentor-analytics">
                <h1 style={{ textAlign: 'center', color: 'whitesmoke' }}><u>Analytics</u></h1>

                <div className="row">
                    <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                        <h4>Review Proteges <button className="btn btn-outline-light" onClick={this.showProtegeAnalytics}>Show/Hide</button></h4>
                        <h4>Review Mentors <button className="btn btn-outline-light" onClick={this.showMentorAnalytics}>Show/Hide</button></h4>
                        <h4>Review Global <button className="btn btn-outline-light" onClick={this.showGlobalAnalytics}>Show/Hide</button></h4>
                    </div>

                    <br />

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* /////////////////////////////// PROTEGE DATA VIEWER TOOLS AND OPTS////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    {this.state.showProtegeAnalyticsViewer ?
                        <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                            <h4 style={{ textAlign: 'center' }}>Select a Protege</h4>
                            {this.props.allProtegeData ?
                                <div>
                                    <select id="mentorsDropDownMenu" value={this.state.protegeToView} onChange={this.handleInputChange} name="protegeToView">
                                        <option value="none">--Select a Protege--</option>
                                        {this.props.allProtegeData.map(protege => (<option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>))}
                                    </select>
                                    {/* <button>Placeholder</button> */}
                                    <button onClick={this.viewProtegeData} className="btn btn-outline-light btn-sm">View/Change</button>
                                    {/* <button onClick={this.removeMentorFromProtege} className="btn btn-outline-danger btn-sm">Remove Mentor</button> */}
                                </div>
                                : null}
                        </div>
                        : null}
                    <br />
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {this.state.activeProtegeDataPopulated ?
                        <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                            <h4 style={{ textAlign: 'center' }}>Select what you'd like to view</h4>

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeCallData}>View Call Data</button>
                            {this.state.viewProtegeCallData ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Call Data:</h4>

                                    {/* Type of Call Breakdown */}

                                    <form>
                                        <div>
                                            <select id="sourceDropMenu" className="customDropDownMentor" value={this.state.dataOption} onChange={this.handleInputChange} name="dataOption">
                                                <option value={"none"}>--Choose a Type of Call--</option>
                                                <option value={"genDials"}>Dial Data</option>
                                                <option value={"genContacts"}>Contact Data</option>
                                                <option value={"genAppts"}>Appointment Data</option>
                                                <option value={"cfDials"}>Cashflow Dial Data</option>
                                                <option value={"cfContacts"}>Cashflow Contact Data</option>
                                                <option value={"cfAppts"}>Cashflow Appointment Data</option>
                                                <option value={"boDials"}>Businessowner Dial Data</option>
                                                <option value={"boContacts"}>Businessowner Contact Data</option>
                                                <option value={"boAppts"}>Businessowner Appointment Data</option>
                                            </select>
                                            <button className="btn-outline-light btn-sm btn" onClick={this.showDataOption}>Get Performance Data</button>
                                        </div>
                                    </form>

                                    {/* Category of Call Breakdown */}

                                    <form>
                                        <div>
                                            <select id="sourceDropMenu" className="customDropDownMentor" value={this.state.categoryOption} onChange={this.handleInputChange} name="categoryOption">
                                                <option value={"none"}>--Choose a Category--</option>
                                                <option value={"pData"}>Prospects Call Data</option>
                                                <option value={"cData"}>Clients Call Data</option>
                                                <option value={"nData"}>Natural Market Call Data</option>
                                                <option value={"sData"}>Suspect Call Data</option>
                                                <option value={"rData"}>Referral Call Data</option>
                                                <option value={"tData"}>Target Market Call Data</option>
                                            </select>
                                            <button className="btn-outline-light btn-sm btn" onClick={this.showCategoryOption}>Get Performance Data</button>
                                        </div>
                                    </form>

                                    <form>
                                        {this.state.activeProtegeData.sources ?
                                            <div>
                                                <select id="sourceDropMenu" className="customDropDownMentor" value={this.state.leadSource} onChange={this.handleInputChange} name="leadSource">
                                                    <option value={"none"}>No Lead Source Selected</option>
                                                    {this.state.activeProtegeData.sources.map(source => (
                                                        <option value={source}>{source}</option>
                                                    ))}
                                                </select>
                                                <button className="btn-outline-light btn-sm btn" onClick={this.gatherSourceData}>Get Lead Source Data</button>
                                            </div>
                                        : null}
                                    </form>

                                    <form>
                                        {this.state.activeProtegeData.targetMarkets ?
                                            <div>
                                                <select id="sourceDropMenu" value={this.state.targetMarket} className="customDropDownMentor" onChange={this.handleInputChange} name="targetMarket">
                                                    <option value={"none"}>No Target Market Selected</option>
                                                    {this.state.activeProtegeData.targetMarkets.map(target => (
                                                        <option value={target}>{target}</option>
                                                    ))}
                                                </select> <button className="btn-outline-light btn-sm btn" onClick={this.gatherTargetData}>Get Target Market Data</button>
                                            </div> 
                                        : null}
                                    </form>



                                    {this.state.showDialChart ?
                                        <div style={{ color: 'whitesmoke' }}>
                                            <div className="">
                                                <div className="" style={{ textAlign: 'center' }}>
                                                    <h3><u>Protege: {this.state.activeProtegeData.firstName} {this.state.activeProtegeData.lastName} </u></h3>
                                                    <hr />
                                                    <h4>Total Dials: {this.state.dialData.length}</h4>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="card col-lg-6" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Dials",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.CPDials + this.state.BPDials,
                                                                this.state.CCDials + this.state.BCDials,
                                                                this.state.CNDials + this.state.BNDials,
                                                                this.state.CSDials + this.state.BSDials,
                                                                this.state.CRDials + this.state.BRDials,
                                                                this.state.CTDials + this.state.BTDials],
                                                        }]
                                                    }}
                                                    // options={{
                                                    //     legend: {
                                                    //         display: false
                                                    //     }}}
                                                    />
                                                </div>
                                                <div className="card col-lg-6" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Cashflow Prospect",
                                                            "Business Prospect",
                                                            "Cashflow Client",
                                                            "Business Client",
                                                            "Cashflow Natural Market",
                                                            "Business Natural Market",
                                                            "Cashflow Suspect",
                                                            "Business Suspect",
                                                            "Cashflow Referral",
                                                            "Business Referral",
                                                            "Cashflow Target Market",
                                                            "Business Target Market"],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPDials,
                                                                this.state.BPDials,
                                                                this.state.CCDials,
                                                                this.state.BCDials,
                                                                this.state.CNDials,
                                                                this.state.BNDials,
                                                                this.state.CSDials,
                                                                this.state.BSDials,
                                                                this.state.CRDials,
                                                                this.state.BRDials,
                                                                this.state.CTDials,
                                                                this.state.BTDials
                                                            ],
                                                            backgroundColor: [
                                                                "#3ac178",
                                                                "#443959",
                                                                "#f99b17",
                                                                "#a2e505",
                                                                "#c9917f",
                                                                "#8d044b",
                                                                "#d2d93b",
                                                                "#dd4417",
                                                                "#5191d9",
                                                                "#483d28",
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }} options={{
                                                        legend: {
                                                            position: 'left',
                                                            labels: {
                                                                boxWidth: 10
                                                            }
                                                        }
                                                    }} /> 
                                                </div> 
                                            </div> 
                                        </div> 
                                    : null}

                                    {this.state.showContactChart ?
                                        <div>
                                            <div className="row">
                                                <div className="col" style={{ textAlign: 'center' }}>
                                                    <hr />
                                                    <h4 style={{ color: 'whitesmoke' }}>Total Contacts: {this.state.contactData.length}</h4>
                                                </div>
                                            </div>
                                            {/* <ul>
                    <li>Cashflow Prospect Contacts: {this.props.CPContacts}</li>
                    <li>Business Prospect Contacts: {this.props.BPContacts}</li>
                    <li>Cashflow Client Contacts: {this.props.CCContacts}</li>
                    <li>Business Client Contacts: {this.props.BCContacts}</li>
                    <li>Cashflow Natural Mkt Contacts: {this.props.CNContacts}</li>
                    <li>Business Natural Mkt Contacts: {this.props.BNContacts}</li>
                </ul> */}

                                            <div className="row">
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Contacts",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.CPContacts + this.state.BPContacts,
                                                                this.state.CCContacts + this.state.BCContacts,
                                                                this.state.CNContacts + this.state.BNContacts,
                                                                this.state.CSContacts + this.state.BSContacts,
                                                                this.state.CRContacts + this.state.BRContacts,
                                                                this.state.CTContacts + this.state.BTContacts],
                                                        }]
                                                    }} />
                                                </div>
                                                <div className="col-lg-6" card style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Cashflow Prospect",
                                                            "Business Prospect",
                                                            "Cashflow Client",
                                                            "Business Client",
                                                            "Cashflow Natural Market",
                                                            "Business Natural Market",
                                                            "Cashflow Suspect",
                                                            "Business Suspect",
                                                            "Cashflow Referral",
                                                            "Business Referral",
                                                            "Cashflow Target Market",
                                                            "Business Target Market"],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPContacts,
                                                                this.state.BPContacts,
                                                                this.state.CCContacts,
                                                                this.state.BCContacts,
                                                                this.state.CNContacts,
                                                                this.state.BNContacts,
                                                                this.state.CSContacts,
                                                                this.state.BSContacts,
                                                                this.state.CRContacts,
                                                                this.state.BRContacts,
                                                                this.state.CTContacts,
                                                                this.state.BTContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#3ac178",
                                                                "#443959",
                                                                "#f99b17",
                                                                "#a2e505",
                                                                "#c9917f",
                                                                "#8d044b",
                                                                "#d2d93b",
                                                                "#dd4417",
                                                                "#5191d9",
                                                                "#483d28",
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                position: 'left',
                                                                labels: {
                                                                    boxWidth: 10
                                                                }
                                                            }
                                                        }}
                                                    /> </div>

                                            </div> 
                                        </div> 
                                    : null}


                                    {this.state.showApptChart ?
                                            <div>
                                                <div className="row">
                                                    <div className="col" style={{ textAlign: 'center' }}>
                                                        <hr />
                                                        <h4 style={{ color: 'whitesmoke' }}>Total Appointments: {this.state.appointments.length} </h4>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                        <Bar data={{
                                                            labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                            datasets: [{
                                                                label: "Appointments",
                                                                backgroundColor: 'rgb(255, 99, 132)',
                                                                borderColor: 'rgb(255, 99, 132)',
                                                                data: [
                                                                    this.state.CPAppts + this.state.BPAppts,
                                                                    this.state.CCAppts + this.state.BCAppts,
                                                                    this.state.CNAppts + this.state.BNAppts,
                                                                    this.state.CSAppts + this.state.BSAppts,
                                                                    this.state.CRAppts + this.state.BRAppts,
                                                                    this.state.CTAppts + this.state.BTAppts],
                                                            }]
                                                        }} />
                                                    </div>
                                                    <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                        <Pie data={{
                                                            labels: [
                                                                "Cashflow Prospect",
                                                                "Business Prospect",
                                                                "Cashflow Client",
                                                                "Business Client",
                                                                "Cashflow Natural Market",
                                                                "Business Natural Market",
                                                                "Cashflow Suspect",
                                                                "Business Suspect",
                                                                "Cashflow Referral",
                                                                "Business Referral",
                                                                "Cashflow Target Market",
                                                                "Business Target Market"],
                                                            datasets: [{
                                                                data: [
                                                                    this.state.CPAppts,
                                                                    this.state.BPAppts,
                                                                    this.state.CCAppts,
                                                                    this.state.BCAppts,
                                                                    this.state.CNAppts,
                                                                    this.state.BNAppts,
                                                                    this.state.CSAppts,
                                                                    this.state.BSAppts,
                                                                    this.state.CRAppts,
                                                                    this.state.BRAppts,
                                                                    this.state.CTAppts,
                                                                    this.state.BTAppts
                                                                ],
                                                                backgroundColor: [
                                                                    "#3ac178",
                                                                    "#443959",
                                                                    "#f99b17",
                                                                    "#a2e505",
                                                                    "#c9917f",
                                                                    "#8d044b",
                                                                    "#d2d93b",
                                                                    "#dd4417",
                                                                    "#5191d9",
                                                                    "#483d28",
                                                                    "#51aef7",
                                                                    "#25517b"
                                                                ]
                                                            }]
                                                        }}
                                                            options={{
                                                                legend: {
                                                                    position: 'left',
                                                                    labels: {
                                                                        boxWidth: 10
                                                                    }
                                                                }
                                                            }} />
                                                    </div> 
                                                </div> 
                                            </div> 
                                        : null
                                    }

                                    <hr />

                                    {/* //////////////////////////////////////////////////
                /////////////////////////////////////////////////
                ///////////////////////////////////////////////////// */}

                                    {this.state.showCashflowDials ?
                                        <div>
                                            <div className="row">
                                                <div className="col" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                                                    <hr />
                                                    <h4>Cashflow Dials Data:</h4>
                                                </div>
                                            </div>

                                            <div className="row">


                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Dials",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.CPDials,
                                                                this.state.CCDials,
                                                                this.state.CNDials,
                                                                this.state.CSDials,
                                                                this.state.CRDials,
                                                                this.state.CTDials
                                                            ],
                                                        }]
                                                    }} />
                                                </div>
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Cashflow Prospect",
                                                            "Cashflow Client",
                                                            "Cashflow Natural Market",
                                                            "Cashflow Suspect",
                                                            "Cashflow Referral",
                                                            "Cashflow Target Market",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPDials,
                                                                this.state.CCDials,
                                                                this.state.CNDials,
                                                                this.state.CSDials,
                                                                this.state.CRDials,
                                                                this.state.CTDials
                                                            ],
                                                            backgroundColor: [
                                                                "#3ac178",
                                                                "#443959",
                                                                "#f99b17",
                                                                "#a2e505",
                                                                "#c9917f",
                                                                "#8d044b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                position: 'left',
                                                                labels: {
                                                                    boxWidth: 10
                                                                }
                                                            }
                                                        }} /> </div>
                                            </div>   
                                        </div> 
                                    : null}

                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                                    {this.state.showCashflowContacts ?
                                        <div>
                                            <div className="row" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                                                <div className="col">
                                                    <h4>Contact Data:</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Contacts",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.CPContacts,
                                                                this.state.CCContacts,
                                                                this.state.CNContacts,
                                                                this.state.CSContacts,
                                                                this.state.CRContacts,
                                                                this.state.CTContacts
                                                            ],
                                                        }]
                                                    }} />
                                                </div>
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Cashflow Prospect",
                                                            "Cashflow Client",
                                                            "Cashflow Natural Market",
                                                            "Cashflow Suspect",
                                                            "Cashflow Referral",
                                                            "Cashflow Target Market",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPContacts,
                                                                this.state.CCContacts,
                                                                this.state.CNContacts,
                                                                this.state.CSContacts,
                                                                this.state.CRContacts,
                                                                this.state.CTContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#3ac178",
                                                                "#443959",
                                                                "#f99b17",
                                                                "#a2e505",
                                                                "#c9917f",
                                                                "#8d044b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                position: 'left',
                                                                labels: {
                                                                    boxWidth: 10
                                                                }
                                                            }
                                                        }} />
                                                </div>
                                            </div>
                                        </div> 
                                    : null}


                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    <br />
                                    {this.state.showCashflowAppts ?
                                        <div>
                                            <div className="row" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                                                <div className="col">
                                                    <h4>Appointment Data:</h4>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Appointments",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.CPAppts,
                                                                this.state.CCAppts,
                                                                this.state.CNAppts,
                                                                this.state.CSAppts,
                                                                this.state.CRAppts,
                                                                this.state.CTAppts
                                                            ],
                                                        }]
                                                    }} />
                                                </div>
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Cashflow Prospect",
                                                            "Cashflow Client",
                                                            "Cashflow Natural Market",
                                                            "Cashflow Suspect",
                                                            "Cashflow Referral",
                                                            "Cashflow Target Market",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPAppts,
                                                                this.state.CCAppts,
                                                                this.state.CNAppts,
                                                                this.state.CSAppts,
                                                                this.state.CRAppts,
                                                                this.state.CTAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#3ac178",
                                                                "#443959",
                                                                "#f99b17",
                                                                "#a2e505",
                                                                "#c9917f",
                                                                "#8d044b"
                                                            ]
                                                        }]
                                                    }} options={{
                                                        legend: {
                                                            position: 'left',
                                                            labels: {
                                                                boxWidth: 10
                                                            }
                                                        }
                                                    }} /> 
                                                </div> 
                                            </div>
                                        </div> 
                                    : null}


                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showBusinessDials ?
                                        <div>
                                            <div className="row" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                                                <div className="col">
                                                    <h4>Dial Data:</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Dials",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.BPDials,
                                                                this.state.BCDials,
                                                                this.state.BNDials,
                                                                this.state.BSDials,
                                                                this.state.BRDials,
                                                                this.state.BTDials],
                                                        }]
                                                    }} />
                                                </div>
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Business Prospect",
                                                            "Business Client",
                                                            "Business Natural Market",
                                                            "Business Suspect",
                                                            "Business Referral",
                                                            "Business Target Market"],
                                                        datasets: [{
                                                            data: [
                                                                this.state.BPDials,
                                                                this.state.BCDials,
                                                                this.state.BNDials,
                                                                this.state.BSDials,
                                                                this.state.BRDials,
                                                                this.state.BTDials
                                                            ],
                                                            backgroundColor: [
                                                                "#d2d93b",
                                                                "#dd4417",
                                                                "#5191d9",
                                                                "#483d28",
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }} options={{
                                                        legend: {
                                                            position: 'left',
                                                            labels: {
                                                                boxWidth: 10
                                                            }
                                                        }
                                                    }} />
                                                </div> 
                                            </div> 
                                        </div> 
                                    : null}


                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showBusinessContacts ?
                                        <div>
                                            <div className="row">
                                                <div className="col" style={{ color: 'whitesmoke' }}>
                                                    <h4>Contact Data:</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Contacts",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.BPContacts,
                                                                this.state.BCContacts,
                                                                this.state.BNContacts,
                                                                this.state.BSContacts,
                                                                this.state.BRContacts,
                                                                this.state.BTContacts],
                                                        }]
                                                    }}
                                                    />
                                                </div>
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Business Prospect",
                                                            "Business Client",
                                                            "Business Natural Market",
                                                            "Business Suspect",
                                                            "Business Referral",
                                                            "Business Target Market"],
                                                        datasets: [{
                                                            data: [
                                                                this.state.BPContacts,
                                                                this.state.BCContacts,
                                                                this.state.BNContacts,
                                                                this.state.BSContacts,
                                                                this.state.BRContacts,
                                                                this.state.BTContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#d2d93b",
                                                                "#dd4417",
                                                                "#5191d9",
                                                                "#483d28",
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                position: 'left',
                                                                labels: {
                                                                    boxWidth: 10
                                                                }
                                                            }
                                                        }}
                                                    /> 
                                                </div> 
                                            </div> 
                                        </div> 
                                    : null}



                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showBusinessAppts ?
                                        <div>
                                            <div className="row">
                                                <div className="col">
                                                    <h3 style={{ color: 'whitesmoke', textAlign: 'center' }}><u>Businessowner Appointments Data</u></h3>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Bar data={{
                                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                                        datasets: [{
                                                            label: "Appointments",
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgb(255, 99, 132)',
                                                            data: [
                                                                this.state.BPAppts,
                                                                this.state.BCAppts,
                                                                this.state.BNAppts,
                                                                this.state.BSAppts,
                                                                this.state.BRAppts,
                                                                this.state.BTAppts],
                                                        }]
                                                    }} /> </div>
                                                <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                                                    <Pie data={{
                                                        labels: [
                                                            "Business Prospect",
                                                            "Business Client",
                                                            "Business Natural Market",
                                                            "Business Suspect",
                                                            "Business Referral",
                                                            "Business Target Market"],
                                                        datasets: [{
                                                            data: [
                                                                this.state.BPAppts,
                                                                this.state.BCAppts,
                                                                this.state.BNAppts,
                                                                this.state.BSAppts,
                                                                this.state.BRAppts,
                                                                this.state.BTAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#d2d93b",
                                                                "#dd4417",
                                                                "#5191d9",
                                                                "#483d28",
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                position: 'left',
                                                                labels: {
                                                                    boxWidth: 10
                                                                }
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div> 
                                    : null}



                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showProspectPerformance ?
                                        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                                            <h3>Prospect Calling Performance:</h3>
                                            <div className="row" style={{ textAlign: 'center' }}>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Contact Ratio</h6>
                                                    <h6>Total Prospect Dials: {this.state.CPDials + this.state.BPDials}</h6>
                                                    <h6>Contact Ratio: {Math.round((this.state.CPContacts + this.state.BPContacts) / (this.state.CPDials + this.state.BPDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Prospect Dials without contacts",
                                                            "Prospect Contacts",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPDials + this.state.BPDials - this.state.CPContacts - this.state.BPContacts,
                                                                this.state.CPContacts + this.state.BPContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Contacts to Appointment Ratio</h6>
                                                    <h6>Total Prospect Contacts: {this.state.CPContacts + this.state.BPContacts}</h6>
                                                    <h6>Appointment per Contact Ratio: {Math.round((this.state.CPAppts + this.state.BPAppts) / (this.state.CPContacts + this.state.BPContacts) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Prospect Contacts without appointments",
                                                            "Prospect Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPContacts + this.state.BPContacts - this.state.CPAppts - this.state.BPAppts,
                                                                this.state.CPAppts + this.state.BPAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Appointment Ratio</h6>
                                                    <h6>Total Prospect Dials: {this.state.CPDials + this.state.BPDials}</h6>
                                                    <h6>Appointment per Dial Ratio: {Math.round((this.state.CPAppts + this.state.BPAppts) / (this.state.CPDials + this.state.BPDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Prospect Dials without appointments",
                                                            "Prospect Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CPDials + this.state.BPDials - this.state.CPAppts - this.state.BPAppts,
                                                                this.state.CPAppts + this.state.BPAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>


                                            </div>

                                        </div>
                                    : null}

                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showClientPerformance ?
                                        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                                            <h3>Client Calling Performance:</h3>
                                            <div className="row" style={{ textAlign: 'center' }}>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Contact Ratio</h6>
                                                    <h6>Total Client Dials: {this.state.CCDials + this.state.BCDials}</h6>
                                                    <h6>Contact Ratio: {Math.round((this.state.CCContacts + this.state.BCContacts) / (this.state.CCDials + this.state.BCDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Client Dials without contacts",
                                                            "Client Contacts",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CCDials + this.state.BCDials - this.state.CCContacts - this.state.BCContacts,
                                                                this.state.CCContacts + this.state.BCContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Contacts to Appointment Ratio</h6>
                                                    <h6>Total Client Contacts: {this.state.CCContacts + this.state.BCContacts}</h6>
                                                    <h6>Appointment per Contact Ratio: {Math.round((this.state.CCAppts + this.state.BCAppts) / (this.state.CCContacts + this.state.BCContacts) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Client Contacts without appointment",
                                                            "Client Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CCContacts + this.state.BCContacts - this.state.CCAppts - this.state.BCAppts,
                                                                this.state.CCAppts + this.state.BCAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Appointment Ratio</h6>
                                                    <h6>Total Client Dials: {this.state.CCDials + this.state.BCDials}</h6>
                                                    <h6>Appointment per Dial Ratio: {Math.round((this.state.CCAppts + this.state.BCAppts) / (this.state.CCDials + this.state.BCDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Client Dials without appointment",
                                                            "Client Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CCDials + this.state.BCDials - this.state.CCAppts - this.state.BCAppts,
                                                                this.state.CCAppts + this.state.BCAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>


                                            </div>

                                        </div>
                                    : null}


                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showNaturalPerformance ?
                                        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                                            <h3>Natural Market Calling Performance:</h3>
                                            <div className="row" style={{ textAlign: 'center' }}>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Contact Ratio</h6>
                                                    <h6>Total Natural Market Dials: {this.state.CNDials + this.state.BNDials}</h6>
                                                    <h6>Contact Ratio: {Math.round((this.state.CNContacts + this.state.BNContacts) / (this.state.CNDials + this.state.BNDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Natural Market Dials without contact",
                                                            "Natural Market Contacts",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CNDials + this.state.BNDials - this.state.CNContacts - this.state.BNContacts,
                                                                this.state.CNContacts + this.state.BNContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Contacts to Appointment Ratio</h6>
                                                    <h6>Total Natural Market Contacts: {this.state.CNContacts + this.state.BNContacts}</h6>
                                                    <h6>Appointment per Contact Ratio: {Math.round((this.state.CNAppts + this.state.BNAppts) / (this.state.CNContacts + this.state.BNContacts) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Natural Market Contacts without appointment",
                                                            "Natural Market Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CNContacts + this.state.BNContacts - this.state.CNAppts - this.state.BNAppts,
                                                                this.state.CNAppts + this.state.BNAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Appointment Ratio</h6>
                                                    <h6>Total Natural Market Dials: {this.state.CNDials + this.state.BNDials}</h6>
                                                    <h6>Appointment per Dial Ratio: {Math.round((this.state.CNAppts + this.state.BNAppts) / (this.state.CNDials + this.state.BNDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Natural Market Dials without appointment",
                                                            "Natuarl Market Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CNDials + this.state.BNDials - this.state.CNAppts - this.state.BNAppts,
                                                                this.state.CNAppts + this.state.BNAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>


                                            </div>

                                        </div>
                                    : null}

                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showSuspectPerformance ?
                                        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                                            <h3>Suspect Calling Performance:</h3>
                                            <div className="row" style={{ textAlign: 'center' }}>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Contact Ratio</h6>
                                                    <h6>Total Suspect Dials: {this.state.CSDials + this.state.BSDials}</h6>
                                                    <h6>Contact Ratio: {Math.round((this.state.CSContacts + this.state.BSContacts) / (this.state.CSDials + this.state.BSDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Suspect Dials without contact",
                                                            "Suspect Contacts",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CSDials + this.state.BSDials - this.state.CSContacts - this.state.BSContacts,
                                                                this.state.CSContacts + this.state.BSContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Contacts to Appointment Ratio</h6>
                                                    <h6>Total Suspect Contacts: {this.state.CSContacts + this.state.BSContacts}</h6>
                                                    <h6>Appointment per Contact Ratio: {Math.round((this.state.CSAppts + this.state.BSAppts) / (this.state.CSContacts + this.state.BSContacts) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Suspect Contacts without appointment",
                                                            "Suspect Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CSContacts + this.state.BSContacts - this.state.CSAppts - this.state.BSAppts,
                                                                this.state.CSAppts + this.state.BSAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Appointment Ratio</h6>
                                                    <h6>Total Suspect Dials: {this.state.CSDials + this.state.BSDials}</h6>
                                                    <h6>Appointment per Dial Ratio: {Math.round((this.state.CSAppts + this.state.BSAppts) / (this.state.CSDials + this.state.BSDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Suspect Dials without appointment",
                                                            "Suspect Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CSDials + this.state.BSDials - this.state.CSAppts - this.state.BSAppts,
                                                                this.state.CSAppts + this.state.BSAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>


                                            </div>

                                        </div>
                                    : null}

                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showReferralPerformance ?
                                        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                                            <h3>Referral Calling Performance:</h3>
                                            <div className="row" style={{ textAlign: 'center' }}>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Contact Ratio</h6>
                                                    <h6>Total Referral Dials: {this.state.CRDials + this.state.BRDials}</h6>
                                                    <h6>Contact Ratio: {Math.round((this.state.CRContacts + this.state.BRContacts) / (this.state.CRDials + this.state.BRDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Referral Dials without contact",
                                                            "Referral Contacts",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CRDials + this.state.BRDials - this.state.CRContacts - this.state.BRContacts,
                                                                this.state.CRContacts + this.state.BRContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Contacts to Appointment Ratio</h6>
                                                    <h6>Total Referral Contacts: {this.state.CRContacts + this.state.BRContacts}</h6>
                                                    <h6>Appointment per Contact Ratio: {Math.round((this.state.CRAppts + this.state.BRAppts) / (this.state.CRContacts + this.state.BRContacts) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Referral Contacts without appointment",
                                                            "Referral Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CRContacts + this.state.BRContacts - this.state.CRAppts - this.state.BRAppts,
                                                                this.state.CRAppts + this.state.BRAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Appointment Ratio</h6>
                                                    <h6>Total Referral Dials: {this.state.CRDials + this.state.BRDials}</h6>
                                                    <h6>Appointment per Dial Ratio: {Math.round((this.state.CRAppts + this.state.BRAppts) / (this.props.CRDials + this.props.BRDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Referral Dials without appointment",
                                                            "Referral Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CRDials + this.state.BRDials - this.state.CRAppts - this.state.BRAppts,
                                                                this.state.CRAppts + this.state.BRAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }}
                                                    />
                                                </div>


                                            </div>

                                        </div>
                                    : null}

                                    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                    {this.state.showTargetPerformance ?
                                        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                                            <h3>Target Market Calling Performance:</h3>
                                            <div className="row" style={{ textAlign: 'center' }}>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Contact Ratio</h6>
                                                    <h6>Total Target Market Dials: {this.state.CTDials + this.state.BTDials}</h6>
                                                    <h6>Contact Ratio: {Math.round((this.state.CTContacts + this.state.BTContacts) / (this.state.CTDials + this.state.BTDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Target Market Dials without contact",
                                                            "Target Market Contacts",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CTDials + this.state.BTDials - this.state.CTContacts - this.state.BTContacts,
                                                                this.state.CTContacts + this.state.BTContacts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }} />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Contacts to Appointment Ratio</h6>
                                                    <h6>Total Target Market Contacts: {this.state.CTContacts + this.state.BTContacts}</h6>
                                                    <h6>Appointment per Contact Ratio: {Math.round((this.state.CTAppts + this.state.BTAppts) / (this.state.CTContacts + this.state.BTContacts) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Target Market Contacts without appointment",
                                                            "Target Market Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CTContacts + this.state.BTContacts - this.state.CTAppts - this.state.BTAppts,
                                                                this.state.CTAppts + this.state.BTAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }} />
                                                </div>

                                                <div className="col-lg-4">
                                                    <h6>Dials to Appointment Ratio</h6>
                                                    <h6>Total Target Market Dials: {this.state.CTDials + this.state.BTDials}</h6>
                                                    <h6>Appointment per Dial Ratio: {Math.round((this.state.CTAppts + this.state.BTAppts) / (this.state.CTDials + this.state.BTDials) * 100)}%</h6>
                                                    <Pie data={{
                                                        labels: [
                                                            "Target Market Dials without scheduling",
                                                            "Target Market Scheduled Appointments",
                                                        ],
                                                        datasets: [{
                                                            data: [
                                                                this.state.CTDials + this.state.BTDials - this.state.CTAppts - this.state.BTAppts,
                                                                this.state.CTAppts + this.state.BTAppts
                                                            ],
                                                            backgroundColor: [
                                                                "#51aef7",
                                                                "#25517b"
                                                            ]
                                                        }]
                                                    }}
                                                        options={{
                                                            legend: {
                                                                display: false
                                                            }
                                                        }} />
                                                </div>
                                            </div>
                                        </div>
                                    : null}


                                 {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showSourcePerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <div style={{ color: 'whitesmoke' }}>
                            <h3><u>{this.state.leadSource} Types of Calls</u></h3>
                            <p>Dials: {this.state.sourceDialData.length}</p>
                            {/* <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Dials",
                                    backgroundColor: 'rgb(255, 99, 132)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: [
                                        this.state.SCPDials + this.state.SBPDials,
                                        this.state.SCCDials + this.state.SBCDials,
                                        this.state.SCNDials + this.state.SBNDials,
                                        this.state.SCSDials + this.state.SBSDials,
                                        this.state.SCRDials + this.state.SBRDials,
                                        this.state.SCTDials + this.state.SBTDials],
                                }]
                            }} /> */}
                            <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                                <Pie data={{
                                    labels: [
                                        "Cashflow Prospect",
                                        "Business Prospect",
                                        "Cashflow Client",
                                        "Business Client",
                                        "Cashflow Natural Market",
                                        "Business Natural Market",
                                        "Cashflow Suspect",
                                        "Business Suspect",
                                        "Cashflow Referral",
                                        "Business Referral",
                                        "Cashflow Target Market",
                                        "Business Target Market"],
                                    datasets: [{
                                        data: [
                                            this.state.SCPDials,
                                            this.state.SBPDials,
                                            this.state.SCCDials,
                                            this.state.SBCDials,
                                            this.state.SCNDials,
                                            this.state.SBNDials,
                                            this.state.SCSDials,
                                            this.state.SBSDials,
                                            this.state.SCRDials,
                                            this.state.SBRDials,
                                            this.state.SCTDials,
                                            this.state.SBTDials
                                        ],
                                        backgroundColor: [
                                            "#3ac178",
                                            "#443959",
                                            "#f99b17",
                                            "#a2e505",
                                            "#c9917f",
                                            "#8d044b",
                                            "#d2d93b",
                                            "#dd4417",
                                            "#5191d9",
                                            "#483d28",
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }}
                                    options={{
                                        legend: {
                                            position: 'left',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }}
                                /> </div>
                        </div>
                        <br />
                        {/* /////////////////////////////////////////
                        ////////////////////////////////////////////
                        /////// SOURCE PIE CHARTS BELOW ////////////
                        ///////////////////////////////////////////
                        /////////////////////////////////////////// */}
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%'}}>
                            <h3>{this.state.leadSource} Lead Performance:</h3>
                            <div className="row" style={{ textAlign: 'center' }}>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Contacts/Dial Ratio</h5>
                                    <h6>Total Dials: {this.state.SourceDials}</h6>
                                    <h6>Contact Ratio: {Math.round((this.state.SourceContacts / this.state.SourceDials) * 100)}%</h6>
                                    <Pie data={{
                                        labels: [
                                            `${this.state.leadSource} Lead Missed Calls`,
                                            `${this.state.leadSource} Lead Contacts`,
                                        ],
                                        datasets: [{
                                            data: [
                                                this.state.SourceDials - this.state.SourceContacts,
                                                this.state.SourceContacts
                                            ],
                                            backgroundColor: [
                                                "#51aef7",
                                                "#25517b"
                                            ]
                                        }]
                                    }}
                                        options={{
                                            legend: {
                                                position: 'bottom',
                                                labels: {
                                                    boxWidth: 10
                                                }
                                            }
                                        }}
                                    />
                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Contact Ratio</h5>
                                    <h6>Total Contacts: {this.state.SourceContacts}</h6>
                                    <h6>Appointment Ratio: {Math.round((this.state.SourceAppts / this.state.SourceContacts) * 100)}%</h6>
                                    <Pie data={{
                                        labels: [
                                            `${this.state.leadSource} Lead Contacts without Scheduling`,
                                            `${this.state.leadSource} Lead Appointments`,
                                        ],
                                        datasets: [{
                                            data: [
                                                this.state.SourceContacts - this.state.SourceAppts,
                                                this.state.SourceAppts
                                            ],
                                            backgroundColor: [
                                                "#51aef7",
                                                "#25517b"
                                            ]
                                        }]
                                    }}
                                        options={{
                                            legend: {
                                                position: 'bottom',
                                                labels: {
                                                    boxWidth: 10
                                                }
                                            }
                                        }}
                                    />
                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Dial Ratio</h5>
                                    <h6>Total Appointments: {this.state.SourceAppts}</h6>
                                    <h6>Appointment Ratio: {Math.round((this.state.SourceAppts / this.state.SourceDials) * 100)}%</h6>
                                    <Pie data={{
                                        labels: [
                                            `${this.state.leadSource} Lead Calls without Scheduling`,
                                            `${this.state.leadSource} Lead Calls Scheduled`,
                                        ],
                                        datasets: [{
                                            data: [
                                                this.state.SourceDials - this.state.SourceAppts,
                                                this.state.SourceAppts
                                            ],
                                            backgroundColor: [
                                                "#51aef7",
                                                "#25517b"
                                            ]
                                        }]
                                    }}
                                        options={{
                                            legend: {
                                                position: 'bottom',
                                                labels: {
                                                    boxWidth: 10
                                                }
                                            }
                                        }}
                                    />
                                </div>


                            </div>
                        </div>

                    </div>
                    : null}



                                </div>
                            : null}

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeSchedule}>View Schedule</button>
                            {this.state.viewProtegeSchedule ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Schedule:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeAppointments}>View Appointments</button>
                            {this.state.viewProtegeAppointments ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Appointments:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeSales}>View Sales</button>
                            {this.state.viewProtegeSales ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Sales:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeNotes}>View Notes</button>
                            {this.state.viewProtegeNotes ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Notes:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeProfile}>View Profile</button>
                            {this.state.viewProtegeProfile ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Profile:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeWeeklyReport}>View Weekly Report</button>
                            {this.state.viewProtegeWeeklyReport ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Weekly Report:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeMonthlyReport}>View Monthly Report</button>
                            {this.state.viewProtegeMonthlyReport ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Monthly Report:</h4>
                                </div>
                                : null}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <button className="btn btn-info" onClick={this.viewProtegeBenchmarkReport}>View Benchmark Report</button>
                            {this.state.viewProtegeBenchmarkReport ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Benchmark Report:</h4>
                                </div>
                                : null}
                        </div>
                        : null}
                    <br />




                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* /////////////////////////////// MENTOR DATA VIEWER TOOLS AND OPTS/////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    {this.state.showMentorAnalyticsViewer ?
                        <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                            <h4 style={{ textAlign: 'center' }}>Select a Mentor</h4>
                            {this.props.allMentorData ?
                                <div>
                                    <select id="mentorsDropDownMenu" value={this.state.mentorToView} onChange={this.handleInputChange} name="mentorToView">
                                        <option value="none">--Select a Mentor--</option>
                                        {this.props.allMentorData.map(mentor => (<option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>))}
                                    </select>
                                    {/* <button>Placeholder</button> */}
                                    <button onClick={this.viewMentorData} className="btn btn-outline-light btn-sm">View/Change</button>
                                    {/* <button onClick={this.removeMentorFromProtege} className="btn btn-outline-danger btn-sm">Remove Mentor</button> */}
                                </div>
                                : null}
                        </div>
                        : null}
                    <br />

                    {this.state.activeMentorDataPopulated ?

                        <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }} >
                            <h4 style={{ textAlign: 'center' }}>Choose Your Option:</h4>

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorsProtegeStatistics}>View Protege Statistics</button>

                            {this.state.viewMentorsProtegeStatistics ?
                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Protege Statistics:</h4>
                                    {this.state.activeMentorDataPopulated ?
                                        <div>
                                            <select id="mentorsDropDownMenu" value={this.state.mentorsProtegeToView} onChange={this.handleInputChange} name="mentorsProtegeToView">
                                                <option value="none">--Select a Protege--</option>
                                                {this.state.activeMentorData.proteges.map(protege => (<option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>))}
                                            </select>
                                            {/* <button>Placeholder</button> */}
                                            <button onClick={this.viewMentorsProtegeData} className="btn btn-outline-light btn-sm">View Data</button>
                                            {/* <button onClick={this.removeMentorFromProtege} className="btn btn-outline-danger btn-sm">Remove Mentor</button> */}
                                        </div>
                                        : null}

                                    <ul>
                                        <li>Dials:</li>
                                        <li>Contacts:</li>
                                        <li>Appointments:</li>
                                        <li>Sales:</li>
                                        <li>Sources</li>
                                        <li>Target Markets</li>
                                    </ul>
                                    <ul>
                                        <li>Types of Leads (Pie Chart)</li>
                                        <li>Types of Appointments (Pie Chart)</li>
                                    </ul>
                                    <ul>
                                        <li>Contact to Call Ratio</li>
                                        <li>Appointment to Contact Ratio</li>
                                        <li>Sales to Appointments Ratio</li>
                                    </ul>
                                </div>
                                : null}



                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorSchedule}>View Mentor Schedule</button>
                            {this.state.viewMentorSchedule ?

                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Mentor Schedule:</h4>
                                </div>

                                : null}

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorAppointments}>View Mentor Appointments</button>
                            {this.state.viewMentorAppointments ?

                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Mentor Appointments:</h4>
                                </div>

                                : null}

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorSales}>View Mentor Sales</button>
                            {this.state.viewMentorSales ?

                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Mentor Sales:</h4>
                                </div>

                                : null}

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorWeeklyReport}>View Mentor Weekly Report</button>
                            {this.state.viewMentorWeeklyReport ?

                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Mentor Weekly Report:</h4>
                                </div>

                                : null}

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorMonthlyReport}>View Mentor Monthly Report</button>
                            {this.state.viewMentorMonthlyReport ?

                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Mentor Monthly Report:</h4>
                                </div>

                                : null}

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <button className="btn btn-info" onClick={this.viewMentorBenchmarkReport}>View Mentor Benchmark Report</button>
                            {this.state.viewMentorBenchmarkReport ?

                                <div className="col-12 card bg-primary" style={{ color: 'whitesmoke' }}>
                                    <h4 style={{ textAlign: 'center' }}>Mentor Benchmark Report:</h4>
                                </div>

                                : null}




                        </div>
                        : null}




                </div>

            </div >
        )
    }

}

export default ManagerDataViewer
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
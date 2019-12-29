import React, { Component } from 'react';
// import API from "../../utils/API";
import { Bar, Pie } from 'react-chartjs-2';
import "./style.css"

class MainDataViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numContacts: 0,
            numScheduled: 0,
            date: "",
            parsedDials: "",
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
            leadSource: "none",
            targetMarket: "none",
            sourceDialData: "",
            sourceContactData: "",
            sourceApptData: "",
            showSourcePerformance: false,
            showSelectedTargetPerformance: false
        }
    }

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.getContacts(this.props.userID)
        // }, 1300)
        // this.getContacts()

    }


    // getContacts = (id) => {
    //     // var userID = this.props.userID

    //     API.getContacts(id)
    //         .then(res => {
    //             console.log(res.data.length)
    //             this.setState({
    //                 numContacts: res.data.length
    //             })
    //         })
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getNumContacts = () => {
        var localNumContacts = 0
        for (var i = 0; i < this.props.dialData.length; i++) {
            if (this.props.dialData[i].contact === true) {
                localNumContacts++
            }
        }

        console.log(localNumContacts)
        this.updateContacts(localNumContacts)
    }



    updateContacts = num => {
        this.setState({
            numContacts: num
        })
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
        for (var i = 0; i < this.props.dialData.length; i++) {
            if (this.props.dialData[i].source === this.state.leadSource) {
                parsedSourceData.parsedDials.push(this.props.dialData[i])
            }
        }

        for (var j = 0; j < this.props.contactData.length; j++) {
            if (this.props.contactData[j].source === this.state.leadSource) {
                parsedSourceData.parsedContacts.push(this.props.contactData[j])
            }
        }

        for (var k = 0; k < this.props.apptData.length; k++) {
            if (this.props.apptData[k].source === this.state.leadSource) {
                parsedSourceData.parsedAppts.push(this.props.apptData[k])
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



    gatherTargetData = (event) => {
        event.preventDefault()
        console.log("Gathering data on source: " + this.state.targetMarket)
        // var parsedDials = []
        var parsedTargetData = {
            parsedDials: [],
            parsedContacts: [],
            parsedAppts: []
        }
        for (var i = 0; i < this.props.dialData.length; i++) {
            if (this.props.dialData[i].targetMarket === this.state.targetMarket) {
                parsedTargetData.parsedDials.push(this.props.dialData[i])
            }
        }

        for (var j = 0; j < this.props.contactData.length; j++) {
            if (this.props.contactData[j].targetMarket === this.state.targetMarket) {
                parsedTargetData.parsedContacts.push(this.props.contactData[j])
            }
        }

        for (var k = 0; k < this.props.apptData.length; k++) {
            if (this.props.apptData[k].targetMarket === this.state.targetMarket) {
                parsedTargetData.parsedAppts.push(this.props.apptData[k])
            }
        }

        setTimeout(() => {

            this.setState({
                targetDialData: parsedTargetData.parsedDials,
                targetContactData: parsedTargetData.parsedContacts,
                targetApptData: parsedTargetData.parsedAppts
            })
            setTimeout(() => {
                this.parseTargetAppts()
                this.parseTargetContacts()
                this.parseTargetDials()

                setTimeout(() => { this.viewSelectedTargetPerformance() }, 500)
            }, 500)

        }, 500)

    }

    parseTargetDials = () => {
        console.log("Parsing: " + this.state.targetDialData)
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
        var TDials = 0;
        for (var i = 0; i < this.state.targetDialData.length; i++) {
            // console.log(this.state.dialData[i])
            switch (this.state.targetDialData[i].type) {
                case "CPD":
                    CPD++
                    TDials++
                    break;
                case "BPD":
                    BPD++
                    TDials++
                    break;
                case "CCD":
                    CCD++
                    TDials++
                    break;
                case "BCD":
                    BCD++
                    TDials++
                    break;
                case "CND":
                    CND++
                    TDials++
                    break;
                case "BND":
                    BND++
                    TDials++
                    break;
                case "CSD":
                    CSD++
                    TDials++
                    break;
                case "BSD":
                    BSD++
                    TDials++
                    break;
                case "CRD":
                    CRD++
                    TDials++
                    break;
                case "BRD":
                    BRD++
                    TDials++
                    break;
                case "CTD":
                    CTD++
                    TDials++
                    break;
                case "BTD":
                    BTD++
                    TDials++
                    break;
                default:
                    TDials++
                    break;
            }
        }
        this.setState({
            TCPDials: CPD,
            TBPDials: BPD,
            TCCDials: CCD,
            TBCDials: BCD,
            TCNDials: CND,
            TBNDials: BND,
            TCSDials: CSD,
            TBSDials: BSD,
            TCRDials: CRD,
            TBRDials: BRD,
            TCTDials: CTD,
            TBTDials: BTD,
            TargetDials: TDials
        })
    }

    parseTargetContacts = () => {
        console.log("Parsing: " + this.state.targetContactData)
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
        var TContacts = 0;
        for (var i = 0; i < this.state.targetContactData.length; i++) {
            switch (this.state.targetContactData[i].type) {
                case "CPD":
                    CPC++
                    TContacts++
                    break;
                case "BPD":
                    BPC++
                    TContacts++
                    break;
                case "CCD":
                    CCC++
                    TContacts++
                    break;
                case "BCD":
                    BCC++
                    TContacts++
                    break;
                case "CND":
                    CNC++
                    TContacts++
                    break;
                case "BND":
                    BNC++
                    TContacts++
                    break;
                case "CSD":
                    CSC++
                    TContacts++
                    break;
                case "BSD":
                    BSC++
                    TContacts++
                    break;
                case "CRD":
                    CRC++
                    TContacts++
                    break;
                case "BRD":
                    BRC++
                    TContacts++
                    break;
                case "CTD":
                    TContacts++
                    CTC++
                    break;
                case "BTD":
                    TContacts++
                    BTC++
                    break;
                default:
                    TContacts++
                    break;
            }
        }
        this.setState({
            TCPContacts: CPC,
            TBPContacts: BPC,
            TCCContacts: CCC,
            TBCContacts: BCC,
            TCNContacts: CNC,
            TBNContacts: BNC,
            TCSContacts: CSC,
            TBSContacts: BSC,
            TCRContacts: CRC,
            TBRContacts: BRC,
            TCTContacts: CTC,
            TBTContacts: BTC,
            TargetContacts: TContacts
        })
    }


    parseTargetAppts = () => {
        console.log("Parsing: " + this.state.targetApptData)
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
        var TAppts = 0;
        for (var i = 0; i < this.state.targetApptData.length; i++) {
            console.log(this.state.targetApptData[i])
            switch (this.state.targetApptData[i].type) {
                case "CPD":
                    CPA++
                    TAppts++
                    break;
                case "BPD":
                    BPA++
                    TAppts++
                    break;
                case "CCD":
                    CCA++
                    TAppts++
                    break;
                case "BCD":
                    BCA++
                    TAppts++
                    break;
                case "CND":
                    CNA++
                    TAppts++
                    break;
                case "BND":
                    BNA++
                    TAppts++
                    break;
                case "CSD":
                    CSA++
                    TAppts++
                    break;
                case "BSD":
                    BSA++
                    TAppts++
                    break;
                case "CRD":
                    CRA++
                    TAppts++
                    break;
                case "BRD":
                    BRA++
                    TAppts++
                    break;
                case "CTD":
                    CTA++
                    TAppts++
                    break;
                case "BTD":
                    BTA++
                    TAppts++
                    break;
                default:
                    TAppts++
                    break;
            }
        }
        this.setState({
            TCPAppts: CPA,
            TBPAppts: BPA,
            TCCAppts: CCA,
            TBCAppts: BCA,
            TCNAppts: CNA,
            TBNAppts: BNA,
            TCSAppts: CSA,
            TBSAppts: BSA,
            TCRAppts: CRA,
            TBRAppts: BRA,
            TCTAppts: CTA,
            TBTAppts: BTA,
            TargetAppts: TAppts
        })
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


    render() {
        return (
            <div className="card" id="main-analytics">
                <h1 style={{ textAlign: 'center', color: 'whitesmoke' }}><u>Analytics</u></h1>
                {/* <button style={{ width: '30%', float: 'left' }} className="btn btn-success" onClick={this.viewDialChart}>Dials: {this.props.dialData.length}</button>
                <button style={{ width: '30%', float: 'left' }} className="btn btn-success" onClick={this.viewContactChart}>Contacts: {this.props.contactData.length}</button>
                <button style={{ width: '30%', float: 'left' }} className="btn btn-success" onClick={this.viewApptChart}>Appointments: {this.props.apptData.length}</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewCFDialChart}>Cashflow Dials Only</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewCFContactChart}>Cashflow Contacts Only</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewCFApptChart}>Cashflow Appts Only</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewBODialChart}>Businessowner Dials Only</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewBOContactChart}>Businessowner Appts Only</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewBOApptChart}>Businessowner Appts Only</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewProspectPerformance}>Prospect Call Performance</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewClientPerformance}>Existing Client Call Performance</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewNaturalPerformance}>Natural Market Call Performance</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewSuspectPerformance}>Suspect Call Performance</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewReferralPerformance}>Referral Call Performance</button>
                <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewTargetPerformance}>Target Market Call Performance</button> */}

                <form>
                    <div>
                        <select id="sourceDropMenu" className="customDropDown" value={this.state.dataOption} onChange={this.handleInputChange} name="dataOption">
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

                <form>
                    <div>
                        <select id="sourceDropMenu" className="customDropDown" value={this.state.categoryOption} onChange={this.handleInputChange} name="categoryOption">
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

                {/* Target Market and Lead Source Selectors */}
                <form>
                    {this.props.userData.sources ?
                        <div>
                            <select id="sourceDropMenu" className="customDropDown" value={this.state.leadSource} onChange={this.handleInputChange} name="leadSource">
                                <option value={"none"}>--Choose a Lead Source--</option>
                                {this.props.userData.sources.map(source => (
                                    <option key={source} value={source}>{source}</option>
                                ))}
                            </select>
                            <button className="btn-outline-light btn-sm btn" onClick={this.gatherSourceData}>Get Lead Source Data</button>
                        </div>
                        : null}
                </form>

                <form>
                    {this.props.userData.targetMarkets ?
                        <div>
                            <select id="sourceDropMenu" className="customDropDown" value={this.state.targetMarket} onChange={this.handleInputChange} name="targetMarket">
                                <option value={"none"}>--Choose a Target Market--</option>
                                {this.props.userData.targetMarkets.map(target => (
                                    <option key={target} value={target}>{target}</option>
                                ))}
                            </select> <button className="btn-outline-light btn-sm btn" onClick={this.gatherTargetData}>Get Target Market Data</button>
                        </div> : null}
                </form>


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showDialChart ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Dial Data:</u></h3>
                        <p>Total Dials: {this.props.dialData.length}</p>
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Dials",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.CPDials + this.props.BPDials,
                                        this.props.CCDials + this.props.BCDials,
                                        this.props.CNDials + this.props.BNDials,
                                        this.props.CSDials + this.props.BSDials,
                                        this.props.CRDials + this.props.BRDials,
                                        this.props.CTDials + this.props.BTDials],
                                }]
                            }} />
                        </div>
                        <br />
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
                                        this.props.CPDials,
                                        this.props.BPDials,
                                        this.props.CCDials,
                                        this.props.BCDials,
                                        this.props.CNDials,
                                        this.props.BNDials,
                                        this.props.CSDials,
                                        this.props.BSDials,
                                        this.props.CRDials,
                                        this.props.BRDials,
                                        this.props.CTDials,
                                        this.props.BTDials
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
                            }} /> </div>
                    </div>
                    : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



                {this.state.showContactChart ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Contact Data: </u></h3>
                        <p>Weekly Contacts: {this.props.contactData.length}</p>
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Contacts",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.CPContacts + this.props.BPContacts,
                                        this.props.CCContacts + this.props.BCContacts,
                                        this.props.CNContacts + this.props.BNContacts,
                                        this.props.CSContacts + this.props.BSContacts,
                                        this.props.CRContacts + this.props.BRContacts,
                                        this.props.CTContacts + this.props.BTContacts],
                                }]
                            }} /> </div>
                        <br />
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
                                        this.props.CPContacts,
                                        this.props.BPContacts,
                                        this.props.CCContacts,
                                        this.props.BCContacts,
                                        this.props.CNContacts,
                                        this.props.BNContacts,
                                        this.props.CSContacts,
                                        this.props.BSContacts,
                                        this.props.CRContacts,
                                        this.props.BRContacts,
                                        this.props.CTContacts,
                                        this.props.BTContacts
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
                            }} /> </div>

                    </div> : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                {this.state.showApptChart ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Appointment Data:</u></h3>
                        <p>Weekly Appointments: {this.props.apptData.length}</p>

                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Appointments",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.CPAppts + this.props.BPAppts,
                                        this.props.CCAppts + this.props.BCAppts,
                                        this.props.CNAppts + this.props.BNAppts,
                                        this.props.CSAppts + this.props.BSAppts,
                                        this.props.CRAppts + this.props.BRAppts,
                                        this.props.CTAppts + this.props.BTAppts],
                                }]
                            }} /> </div>
                        <br />
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
                                        this.props.CPAppts,
                                        this.props.BPAppts,
                                        this.props.CCAppts,
                                        this.props.BCAppts,
                                        this.props.CNAppts,
                                        this.props.BNAppts,
                                        this.props.CSAppts,
                                        this.props.BSAppts,
                                        this.props.CRAppts,
                                        this.props.BRAppts,
                                        this.props.CTAppts,
                                        this.props.BTAppts
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
                            }} /> </div>
                    </div> : null}

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {this.state.showCashflowDials ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Cashflow Dials Data:</u></h3>

                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Dials",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.CPDials,
                                        this.props.CCDials,
                                        this.props.CNDials,
                                        this.props.CSDials,
                                        this.props.CRDials,
                                        this.props.CTDials
                                    ],
                                }]
                            }} /> </div>
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                        this.props.CPDials,
                                        this.props.CCDials,
                                        this.props.CNDials,
                                        this.props.CSDials,
                                        this.props.CRDials,
                                        this.props.CTDials
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
                            }} /> </div> </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                {this.state.showCashflowContacts ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Contact Data: </u></h3>
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Contacts",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.CPContacts,
                                        this.props.CCContacts,
                                        this.props.CNContacts,
                                        this.props.CSContacts,
                                        this.props.CRContacts,
                                        this.props.CTContacts
                                    ],
                                }]
                            }} />
                        </div>
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                        this.props.CPContacts,
                                        this.props.CCContacts,
                                        this.props.CNContacts,
                                        this.props.CSContacts,
                                        this.props.CRContacts,
                                        this.props.CTContacts
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
                            }} /> </div>

                    </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <br />
                {this.state.showCashflowAppts ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Appointment Data:</u></h3>

                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Appointments",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.CPAppts,
                                        this.props.CCAppts,
                                        this.props.CNAppts,
                                        this.props.CSAppts,
                                        this.props.CRAppts,
                                        this.props.CTAppts
                                    ],
                                }]
                            }} /> </div>
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                        this.props.CPAppts,
                                        this.props.CCAppts,
                                        this.props.CNAppts,
                                        this.props.CSAppts,
                                        this.props.CRAppts,
                                        this.props.CTAppts
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
                            }} /> </div>
                    </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessDials ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Dial Data:</u></h3>
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Dials",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.BPDials,
                                        this.props.BCDials,
                                        this.props.BNDials,
                                        this.props.BSDials,
                                        this.props.BRDials,
                                        this.props.BTDials],
                                }]
                            }} /> </div>
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                        this.props.BPDials,
                                        this.props.BCDials,
                                        this.props.BNDials,
                                        this.props.BSDials,
                                        this.props.BRDials,
                                        this.props.BTDials
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
                            }} /> </div> </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessContacts ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Contact Data:</u></h3>
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Contacts",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.BPContacts,
                                        this.props.BCContacts,
                                        this.props.BNContacts,
                                        this.props.BSContacts,
                                        this.props.BRContacts,
                                        this.props.BTContacts],
                                }]
                            }} /> </div>
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                        this.props.BPContacts,
                                        this.props.BCContacts,
                                        this.props.BNContacts,
                                        this.props.BSContacts,
                                        this.props.BRContacts,
                                        this.props.BTContacts
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
                            }} /> </div> </div> : null}



                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessAppts ?
                    <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <h3><u>Appointment Data:</u></h3>
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Appointments",
                                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                                    borderColor: 'rgb(255, 255, 255)',
                                    data: [
                                        this.props.BPAppts,
                                        this.props.BCAppts,
                                        this.props.BNAppts,
                                        this.props.BSAppts,
                                        this.props.BRAppts,
                                        this.props.BTAppts],
                                }]
                            }} /> </div>
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                        this.props.BPAppts,
                                        this.props.BCAppts,
                                        this.props.BNAppts,
                                        this.props.BSAppts,
                                        this.props.BRAppts,
                                        this.props.BTAppts
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
                            }} /> </div> </div> : null}



                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showProspectPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <h3>Prospect Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <h6>Total Prospect Dials: {this.props.CPDials + this.props.BPDials}</h6>
                                <h6>Contact Ratio: {Math.round((this.props.CPContacts + this.props.BPContacts) / (this.props.CPDials + this.props.BPDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Prospect Dials without contacts",
                                        "Prospect Contacts",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CPDials + this.props.BPDials - this.props.CPContacts - this.props.BPContacts,
                                            this.props.CPContacts + this.props.BPContacts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <h6>Total Prospect Contacts: {this.props.CPContacts + this.props.BPContacts}</h6>
                                <h6>Appointment per Contact Ratio: {Math.round((this.props.CPAppts + this.props.BPAppts) / (this.props.CPContacts + this.props.BPContacts) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Prospect Contacts without appointments",
                                        "Prospect Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CPContacts + this.props.BPContacts - this.props.CPAppts - this.props.BPAppts,
                                            this.props.CPAppts + this.props.BPAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <h6>Total Prospect Dials: {this.props.CPDials + this.props.BPDials}</h6>
                                <h6>Appointment per Dial Ratio: {Math.round((this.props.CPAppts + this.props.BPAppts) / (this.props.CPDials + this.props.BPDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Prospect Dials without appointments",
                                        "Prospect Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CPDials + this.props.BPDials - this.props.CPAppts - this.props.BPAppts,
                                            this.props.CPAppts + this.props.BPAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showClientPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <h3>Client Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <h6>Total Client Dials: {this.props.CCDials + this.props.BCDials}</h6>
                                <h6>Contact Ratio: {Math.round((this.props.CCContacts + this.props.BCContacts) / (this.props.CCDials + this.props.BCDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Client Dials without contacts",
                                        "Client Contacts",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CCDials + this.props.BCDials - this.props.CCContacts - this.props.BCContacts,
                                            this.props.CCContacts + this.props.BCContacts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <h6>Total Client Contacts: {this.props.CCContacts + this.props.BCContacts}</h6>
                                <h6>Appointment per Contact Ratio: {Math.round((this.props.CCAppts + this.props.BCAppts) / (this.props.CCContacts + this.props.BCContacts) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Client Contacts without appointment",
                                        "Client Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CCContacts + this.props.BCContacts - this.props.CCAppts - this.props.BCAppts,
                                            this.props.CCAppts + this.props.BCAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <h6>Total Client Dials: {this.props.CCDials + this.props.BCDials}</h6>
                                <h6>Appointment per Dial Ratio: {Math.round((this.props.CCAppts + this.props.BCAppts) / (this.props.CCDials + this.props.BCDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Client Dials without appointment",
                                        "Client Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CCDials + this.props.BCDials - this.props.CCAppts - this.props.BCAppts,
                                            this.props.CCAppts + this.props.BCAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>


                        </div>

                    </div>
                    : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showNaturalPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <h3>Natural Market Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <h6>Total Natural Market Dials: {this.props.CNDials + this.props.BNDials}</h6>
                                <h6>Contact Ratio: {Math.round((this.props.CNContacts + this.props.BNContacts) / (this.props.CNDials + this.props.BNDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Natural Market Dials without contact",
                                        "Natural Market Contacts",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CNDials + this.props.BNDials - this.props.CNContacts - this.props.BNContacts,
                                            this.props.CNContacts + this.props.BNContacts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <h6>Total Natural Market Contacts: {this.props.CNContacts + this.props.BNContacts}</h6>
                                <h6>Appointment per Contact Ratio: {Math.round((this.props.CNAppts + this.props.BNAppts) / (this.props.CNContacts + this.props.BNContacts) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Natural Market Contacts without appointment",
                                        "Natural Market Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CNContacts + this.props.BNContacts - this.props.CNAppts - this.props.BNAppts,
                                            this.props.CNAppts + this.props.BNAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <h6>Total Natural Market Dials: {this.props.CNDials + this.props.BNDials}</h6>
                                <h6>Appointment per Dial Ratio: {Math.round((this.props.CNAppts + this.props.BNAppts) / (this.props.CNDials + this.props.BNDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Natural Market Dials without appointment",
                                        "Natuarl Market Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CNDials + this.props.BNDials - this.props.CNAppts - this.props.BNAppts,
                                            this.props.CNAppts + this.props.BNAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showSuspectPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <h3>Suspect Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <h6>Total Suspect Dials: {this.props.CSDials + this.props.BSDials}</h6>
                                <h6>Contact Ratio: {Math.round((this.props.CSContacts + this.props.BSContacts) / (this.props.CSDials + this.props.BSDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Suspect Dials without contact",
                                        "Suspect Contacts",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CSDials + this.props.BSDials - this.props.CSContacts - this.props.BSContacts,
                                            this.props.CSContacts + this.props.BSContacts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <h6>Total Suspect Contacts: {this.props.CSContacts + this.props.BSContacts}</h6>
                                <h6>Appointment per Contact Ratio: {Math.round((this.props.CSAppts + this.props.BSAppts) / (this.props.CSContacts + this.props.BSContacts) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Suspect Contacts without appointment",
                                        "Suspect Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CSContacts + this.props.BSContacts - this.props.CSAppts - this.props.BSAppts,
                                            this.props.CSAppts + this.props.BSAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <h6>Total Suspect Dials: {this.props.CSDials + this.props.BSDials}</h6>
                                <h6>Appointment per Dial Ratio: {Math.round((this.props.CSAppts + this.props.BSAppts) / (this.props.CSDials + this.props.BSDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Suspect Dials without appointment",
                                        "Suspect Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CSDials + this.props.BSDials - this.props.CSAppts - this.props.BSAppts,
                                            this.props.CSAppts + this.props.BSAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showReferralPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <h3>Referral Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <h6>Total Referral Dials: {this.props.CRDials + this.props.BRDials}</h6>
                                <h6>Contact Ratio: {Math.round((this.props.CRContacts + this.props.BRContacts) / (this.props.CRDials + this.props.BRDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Referral Dials without contact",
                                        "Referral Contacts",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CRDials + this.props.BRDials - this.props.CRContacts - this.props.BRContacts,
                                            this.props.CRContacts + this.props.BRContacts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <h6>Total Referral Contacts: {this.props.CRContacts + this.props.BRContacts}</h6>
                                <h6>Appointment per Contact Ratio: {Math.round((this.props.CRAppts + this.props.BRAppts) / (this.props.CRContacts + this.props.BRContacts) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Referral Contacts without appointment",
                                        "Referral Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CRContacts + this.props.BRContacts - this.props.CRAppts - this.props.BRAppts,
                                            this.props.CRAppts + this.props.BRAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <h6>Total Referral Dials: {this.props.CRDials + this.props.BRDials}</h6>
                                <h6>Appointment per Dial Ratio: {Math.round((this.props.CRAppts + this.props.BRAppts) / (this.props.CRDials + this.props.BRDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Referral Dials without appointment",
                                        "Referral Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CRDials + this.props.BRDials - this.props.CRAppts - this.props.BRAppts,
                                            this.props.CRAppts + this.props.BRAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showTargetPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <h3>Target Market Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <h6>Total Target Market Dials: {this.props.CTDials + this.props.BTDials}</h6>
                                <h6>Contact Ratio: {Math.round((this.props.CTContacts + this.props.BTContacts) / (this.props.CTDials + this.props.BTDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Target Market Dials without contact",
                                        "Target Market Contacts",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CTDials + this.props.BTDials - this.props.CTContacts - this.props.BTContacts,
                                            this.props.CTContacts + this.props.BTContacts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <h6>Total Target Market Contacts: {this.props.CTContacts + this.props.BTContacts}</h6>
                                <h6>Appointment per Contact Ratio: {Math.round((this.props.CTAppts + this.props.BTAppts) / (this.props.CTContacts + this.props.BTContacts) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Target Market Contacts without appointment",
                                        "Target Market Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CTContacts + this.props.BTContacts - this.props.CTAppts - this.props.BTAppts,
                                            this.props.CTAppts + this.props.BTAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
                                }} />
                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <h6>Total Target Market Dials: {this.props.CTDials + this.props.BTDials}</h6>
                                <h6>Appointment per Dial Ratio: {Math.round((this.props.CTAppts + this.props.BTAppts) / (this.props.CTDials + this.props.BTDials) * 100)}%</h6>
                                <Pie data={{
                                    labels: [
                                        "Target Market Dials without scheduling",
                                        "Target Market Scheduled Appointments",
                                    ],
                                    datasets: [{
                                        data: [
                                            this.props.CTDials + this.props.BTDials - this.props.CTAppts - this.props.BTAppts,
                                            this.props.CTAppts + this.props.BTAppts
                                        ],
                                        backgroundColor: [
                                            "#51aef7",
                                            "#25517b"
                                        ]
                                    }]
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

                        <div>
                            <h3><u> {this.state.leadSource} Types of Calls</u></h3>
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
                                }} options={{
                                    legend: {
                                        position: 'left',
                                        labels: {
                                            boxWidth: 10
                                        }
                                    }
                                }} /> </div> </div>

                        {/* /////////////////////////////////////////
                        ////////////////////////////////////////////
                        /////// SOURCE PIE CHARTS BELOW ////////////
                        ///////////////////////////////////////////
                        /////////////////////////////////////////// */}
                        <br />
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
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
                                    }} options={{
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} />
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
                                    }} options={{
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} />
                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Dial Ratio</h5>
                                    <h6>Total Appointments: {this.state.sourceAppts}</h6>
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
                                    }} options={{
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} />
                                </div>


                            </div>

                        </div> </div>
                    : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showSelectedTargetPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <div>
                                <h3><u>{this.state.targetMarket} Types of Calls</u></h3>
                                <p>Total Dials: {this.state.targetDialData.length}</p>
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
                                            this.state.TCPDials,
                                            this.state.TBPDials,
                                            this.state.TCCDials,
                                            this.state.TBCDials,
                                            this.state.TCNDials,
                                            this.state.TBNDials,
                                            this.state.TCSDials,
                                            this.state.TBSDials,
                                            this.state.TCRDials,
                                            this.state.TBRDials,
                                            this.state.TCTDials,
                                            this.state.TBTDials
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
                                }} /> </div> </div>

                        <br />
                        {/* /////////////////////////////////////////
                        ////////////////////////////////////////////
                        /////// SOURCE PIE CHARTS BELOW ////////////
                        ///////////////////////////////////////////
                        /////////////////////////////////////////// */}
                        <div className="card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '5%' }}>
                            <h3>{this.state.targetMarket} Calls Performance:</h3>
                            <div className="row" style={{ textAlign: 'center' }}>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Contact / Dial Ratio</h5>
                                    <h6>Total Dials: {this.state.TargetDials}</h6>
                                    <h6>Contact Ratio: {Math.round((this.state.TargetContacts / this.state.TargetDials) * 100)}%</h6>
                                    <Pie data={{
                                        labels: [
                                            `${this.state.targetMarket} Missed Calls`,
                                            `${this.state.targetMarket} Contacts`,
                                        ],
                                        datasets: [{
                                            data: [
                                                this.state.TargetDials - this.state.TargetContacts,
                                                this.state.TargetContacts
                                            ],
                                            backgroundColor: [
                                                "#51aef7",
                                                "#25517b"
                                            ]
                                        }]
                                    }} options={{
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} />
                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Contact Ratio</h5>
                                    <h6>Total {this.state.targetMarket} Contacts: {this.state.TargetContacts}</h6>
                                    <h6>Appointment Ratio: {Math.round((this.state.TargetAppts / this.state.TargetContacts) * 100)}%</h6>
                                    <Pie data={{
                                        labels: [
                                            `${this.state.targetMarket} calls without Scheduling`,
                                            `${this.state.targetMarket} calls Scheduled`,
                                        ],
                                        datasets: [{
                                            data: [
                                                this.state.TargetContacts - this.state.TargetAppts,
                                                this.state.TargetAppts
                                            ],
                                            backgroundColor: [
                                                "#51aef7",
                                                "#25517b"
                                            ]
                                        }]
                                    }} options={{
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} />
                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Dials Ratio</h5>
                                    <h6>Total Appointments {this.state.targetAppts}</h6>
                                    <h6>Appointment Ratio: {Math.round((this.state.TargetAppts / this.state.TargetDials) * 100)}%</h6>
                                    <Pie data={{
                                        labels: [
                                            `${this.state.targetMarket} calls without Scheduling`,
                                            `${this.state.targetMarket} calls Scheduled`,
                                        ],
                                        datasets: [{
                                            data: [
                                                this.state.TargetDials - this.state.TargetAppts,
                                                this.state.TargetAppts
                                            ],
                                            backgroundColor: [
                                                "#51aef7",
                                                "#25517b"
                                            ]
                                        }]
                                    }} options={{
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} />
                                </div>


                            </div>

                        </div> </div>
                    : null}
                <hr />


                <ul>

                </ul>
            </div>

        )
    }

}

export default MainDataViewer;
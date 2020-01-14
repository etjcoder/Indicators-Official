import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import "./style.css"

class MentorDataViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numContacts: 0,
            numScheduled: 0,
            date: "",
            parsedDials: "",
            showDialChart: true,
            showContactChart: true,
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

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
            // <div className="container" id="mentor-analytics">
            <div className="container" style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '5%', borderRadius: '30px' }}>
                <h1 style={{ textAlign: 'center', color: 'black' }}>A N A L Y T I C S</h1>
                <hr />

                <div className="row">
                    <div className="col-lg-6">
                        <form>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ textAlign: 'center' }}>View Types of Calls Made</p>
                                <select id="sourceDropMenu" className="" value={this.state.dataOption} onChange={this.handleInputChange} name="dataOption">
                                    <option value={"none"}>------------------------</option>
                                    <option value={"genDials"}>Dial Data</option>
                                    <option value={"genContacts"}>Contact Data</option>
                                    <option value={"genAppts"}>Appointment Data</option>
                                    <option value={"cfDials"}>Standard/Cashflow Dial Data</option>
                                    <option value={"cfContacts"}>Standard/Cashflow Contact Data</option>
                                    <option value={"cfAppts"}>Standard/Cashflow Appointment Data</option>
                                    <option value={"boDials"}>Tier-1/Businessowner Dial Data</option>
                                    <option value={"boContacts"}>Tier-1/Businessowner Contact Data</option>
                                    <option value={"boAppts"}>Tier-1/Businessowner Appointment Data</option>
                                </select>
                                <button className="btn-outline-dark btn-sm btn" onClick={this.showDataOption}>Generate</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <form>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ textAlign: 'center' }}>View Performance by Type</p>
                                <select id="sourceDropMenu" className="" value={this.state.categoryOption} onChange={this.handleInputChange} name="categoryOption">
                                    <option value={"none"}>-------------------------------</option>
                                    <option value={"pData"}>Warm Leads / Prospects</option>
                                    <option value={"cData"}>Delegated Clients</option>
                                    <option value={"nData"}>Natural Market</option>
                                    <option value={"sData"}>Verticals / Orphans</option>
                                    <option value={"rData"}>New Referrals</option>
                                    <option value={"tData"}>Target Industries</option>
                                </select>
                                <button className="btn-outline-dark btn-sm btn" onClick={this.showCategoryOption}>Generate</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <form>
                            {this.props.protegeData.sources ?
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ textAlign: 'center' }}>View Performance by Referral Source</p>
                                    <select id="sourceDropMenu" className="" value={this.state.leadSource} onChange={this.handleInputChange} name="leadSource">
                                        <option value={"none"}>----------------------------------</option>
                                        {this.props.protegeData.sources.map(source => (
                                            <option value={source}>{source}</option>
                                        ))}
                                    </select>
                                    <button className="btn-outline-dark btn-sm btn" onClick={this.gatherSourceData}>Generate</button>
                                </div>
                                : null}
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <form>
                            {this.props.protegeData.targetMarkets ?
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ textAlign: 'center' }}>View Performance by Target Industry</p>
                                    <select id="sourceDropMenu" value={this.state.targetMarket} className="" onChange={this.handleInputChange} name="targetMarket">
                                        <option value={"none"}>---------------------------------</option>
                                        {this.props.protegeData.targetMarkets.map(target => (
                                            <option value={target}>{target}</option>
                                        ))}
                                    </select> <button className="btn-outline-dark btn-sm btn" onClick={this.gatherTargetData}>Generate</button>
                                </div> : null}
                        </form>
                    </div>
                    {/* <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewReferralPerformance}>Referral Call Performance</button>
                        <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewTargetPerformance}>Target Market Call Performance</button> */}


                </div>

                <div className="" style={{ textAlign: 'center' }}>
                    <h3><u>Protege: {this.props.protegeData.firstName} {this.props.protegeData.lastName} </u></h3>
                    <hr />
                </div>
                {this.state.showDialChart ?
                    <div style={{ color: 'center', color: 'black' }}>
                        <p style={{ textAlign: 'center' }}>Total Dials: {this.props.dialData.length}</p>

                        <div className="row">
                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                            <div className="card col-lg-8" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Dials",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.CPDials + this.props.BPDials,
                                            this.props.CCDials + this.props.BCDials,
                                            this.props.CNDials + this.props.BNDials,
                                            this.props.CSDials + this.props.BSDials,
                                            this.props.CRDials + this.props.BRDials,
                                            this.props.CTDials + this.props.BTDials],
                                    }]
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>
                            <div className="card col-lg-8" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Pie data={{
                                    labels: [
                                        "Prospects",
                                        "Delegated Client",
                                        "Natural Market",
                                        "Suspects/Orphans",
                                        "Referrals",
                                        "Target Markets"],
                                    datasets: [{
                                        data: [
                                            this.props.CPDials + this.props.BPDials,
                                            this.props.CCDials + this.props.BCDials,
                                            this.props.CNDials + this.props.BNDials,
                                            this.props.CSDials + this.props.BSDials,
                                            this.props.CRDials + this.props.BRDials,
                                            this.props.CTDials + this.props.BTDials
                                        ],
                                        backgroundColor: [
                                            "#3ac178",
                                            "#f99b17",
                                            "#5191d9",
                                            "#483d28",
                                            "#51aef7",
                                            "#25517b"
                                        ],
                                        borderColor: [
                                            "#3ac178",
                                            "#f99b17",
                                            "#5191d9",
                                            "#483d28",
                                            "#51aef7",
                                            "#25517b"
                                        ],
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
                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>


                        </div>
                    </div>
                    : null
                }

                {this.state.showContactChart ?
                    <div>

                        <hr />
                        <div className="row">
                            <div className="col" style={{ textAlign: 'center' }}>
                                <hr />
                                <p style={{textAlign: 'center', color: 'black' }}>Total Contacts: {this.props.contactData.length}</p>
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
                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                            <div className="card col-lg-8" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Contacts",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.CPContacts + this.props.BPContacts,
                                            this.props.CCContacts + this.props.BCContacts,
                                            this.props.CNContacts + this.props.BNContacts,
                                            this.props.CSContacts + this.props.BSContacts,
                                            this.props.CRContacts + this.props.BRContacts,
                                            this.props.CTContacts + this.props.BTContacts],
                                    }]
                                }} />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                            <div className="card col-lg-8" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Pie data={{
                                    labels: [
                                        "Warm Lead/Prospect",
                                        "Delegated Client",
                                        "Natural Market",
                                        "Vertical / Orphan",
                                        "New Referral",
                                        "Targeted Industry"],
                                    datasets: [{
                                        data: [
                                            this.props.CPContacts + this.props.BPContacts,
                                            this.props.CCContacts + this.props.BCContacts,
                                            this.props.CNContacts + this.props.BNContacts,
                                            this.props.CSContacts + this.props.BSContacts,
                                            this.props.CRContacts + this.props.BRContacts,
                                            this.props.CTContacts + this.props.BTContacts
                                        ],
                                        backgroundColor: [
                                            "#3ac178",
                                            "#f99b17",
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
                            <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>



                        </div> </div> : null
                }


                {
                    this.state.showApptChart ?
                        <div>

                            <hr />
                            <div className="row">
                                <div className="col" style={{ textAlign: 'center' }}>
                                    <p style={{ color: 'black', textAlign: 'center' }}>Total Appointments: {this.props.apptData.length} </p>
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                                <div className="card col-lg-8" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                    <Bar data={{
                                        labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                        datasets: [{
                                            label: "Appointments",
                                            backgroundColor: 'rgb(255, 99, 132)',
                                            borderColor: 'rgb(255, 99, 132)',
                                            data: [
                                                this.props.CPAppts + this.props.BPAppts,
                                                this.props.CCAppts + this.props.BCAppts,
                                                this.props.CNAppts + this.props.BNAppts,
                                                this.props.CSAppts + this.props.BSAppts,
                                                this.props.CRAppts + this.props.BRAppts,
                                                this.props.CTAppts + this.props.BTAppts],
                                        }]
                                    }} />
                                </div>
                                <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                                <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>

                                <div className="card col-lg-8" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                    <Pie data={{
                                        labels: [
                                            "Warm Lead/Prospect",
                                            "Delegated Client",
                                            "Natural Market",
                                            "Vertical / Orphan",
                                            "New Referral",
                                            "Targeted Industry"],
                                        datasets: [{
                                            data: [
                                                this.props.CPAppts + this.props.BPAppts,
                                                this.props.CCAppts + this.props.BCAppts,
                                                this.props.CNAppts + this.props.BNAppts,
                                                this.props.CSAppts + this.props.BSAppts,
                                                this.props.CRAppts + this.props.BRAppts,
                                                this.props.CTAppts + this.props.BTAppts
                                            ],
                                            backgroundColor: [
                                                "#3ac178",
                                                "#f99b17",
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
                                </div><div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card col-lg-2"></div>
                            </div> </div> : null
                }

                <hr />

                {/* //////////////////////////////////////////////////
                /////////////////////////////////////////////////
                ///////////////////////////////////////////////////// */}

                {this.state.showCashflowDials ?
                    <div>
                        <div className="row">
                            <div className="col" style={{ textAlign: 'center', color: 'black' }}>
                                <hr />
                                <h4>Cashflow Dials made:
                                {this.props.CPDials +
                                        this.props.CCDials +
                                        this.props.CNDials +
                                        this.props.CRDials +
                                        this.props.CSDials +
                                        this.props.CTDials}
                                </h4>
                            </div>
                        </div>

                        <div className="row">


                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Dials",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.CPDials,
                                            this.props.CCDials,
                                            this.props.CNDials,
                                            this.props.CSDials,
                                            this.props.CRDials,
                                            this.props.CTDials
                                        ],
                                    }]
                                }} />
                            </div>
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
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
                                }}
                                    options={{
                                        legend: {
                                            position: 'left',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }} /> </div>
                        </div>   </div> : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                {this.state.showCashflowContacts ?
                    <div>
                        <div className="row" style={{ textAlign: 'center', color: 'black' }}>
                            <div className="col">
                                <h4>Cashflow Contacts made:
                                {this.props.CPContacts +
                                        this.props.CCContacts +
                                        this.props.CNContacts +
                                        this.props.CRContacts +
                                        this.props.CSContacts +
                                        this.props.CTContacts}
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Contacts",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
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
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
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
                    </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <br />
                {this.state.showCashflowAppts ?
                    <div>
                        <div className="row" style={{ textAlign: 'center', color: 'black' }}>
                            <div className="col">
                                <h4>Cashflow Appointments made:
                                {this.props.CPAppts +
                                        this.props.CCAppts +
                                        this.props.CNAppts +
                                        this.props.CRAppts +
                                        this.props.CSAppts +
                                        this.props.CTAppts}
                                </h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Appointments",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.CPAppts,
                                            this.props.CCAppts,
                                            this.props.CNAppts,
                                            this.props.CSAppts,
                                            this.props.CRAppts,
                                            this.props.CTAppts
                                        ],
                                    }]
                                }} />
                            </div>
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
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
                                }} /> </div> </div>
                    </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessDials ?
                    <div>
                        <div className="row" style={{ textAlign: 'center', color: 'black' }}>
                            <div className="col">
                                <h4>Tier-1/Businessowner Dials made:
                                {this.props.BPDials +
                                        this.props.BCDials +
                                        this.props.BNDials +
                                        this.props.BRDials +
                                        this.props.BSDials +
                                        this.props.BTDials}
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Dials",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.BPDials,
                                            this.props.BCDials,
                                            this.props.BNDials,
                                            this.props.BSDials,
                                            this.props.BRDials,
                                            this.props.BTDials],
                                    }]
                                }} />
                            </div>
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
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
                                }} /> </div> </div> </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessContacts ?
                    <div>
                        <div className="row" style={{ textAlign: 'center', color: 'black' }}>
                            <div className="col">
                                <h4>Tier-1/Businessowner Contacts made:
                                {this.props.BPContacts +
                                        this.props.BCContacts +
                                        this.props.BNContacts +
                                        this.props.BRContacts +
                                        this.props.BSContacts +
                                        this.props.BTContacts}
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Contacts",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.BPContacts,
                                            this.props.BCContacts,
                                            this.props.BNContacts,
                                            this.props.BSContacts,
                                            this.props.BRContacts,
                                            this.props.BTContacts],
                                    }]
                                }}
                                />
                            </div>
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
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
                                }}
                                    options={{
                                        legend: {
                                            position: 'left',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }}
                                /> </div> </div> </div> : null}



                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessAppts ?
                    <div>
                        <div className="row" style={{ textAlign: 'center', color: 'black' }}>
                            <div className="col">
                                <h4 style={{ color: 'black' }}>Tier-1/Businessowner Appointments made:
                            {this.props.BPAppts +
                                        this.props.BCAppts +
                                        this.props.BNAppts +
                                        this.props.BRAppts +
                                        this.props.BSAppts +
                                        this.props.BTAppts}</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
                                <Bar data={{
                                    labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                    datasets: [{
                                        label: "Appointments",
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        data: [
                                            this.props.BPAppts,
                                            this.props.BCAppts,
                                            this.props.BNAppts,
                                            this.props.BSAppts,
                                            this.props.BRAppts,
                                            this.props.BTAppts],
                                    }]
                                }} /> </div>
                            <div className="card col-lg-6" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px', margin: 0 }}>
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
                                }}
                                    options={{
                                        legend: {
                                            position: 'left',
                                            labels: {
                                                boxWidth: 10
                                            }
                                        }
                                    }}
                                /> </div> </div> </div> : null}



                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showProspectPerformance ?
                    <div className="card" style={{ textAlign: 'center', color: 'black' }}>

                        <h3>Prospect Calling Analytics:</h3>
                        <hr />
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Contacted a Prospect on</h6>
                                <h6> {Math.round((this.props.CPContacts + this.props.BPContacts) / (this.props.CPDials + this.props.BPDials) * 100)}% of dials</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />

                                <h6>Scheduled an appointment on:</h6>
                                <h6>{Math.round((this.props.CPAppts + this.props.BPAppts) / (this.props.CPContacts + this.props.BPContacts) * 100)}% of contacts</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Scheduled an appointment on:</h6>
                                <h6> {Math.round((this.props.CPAppts + this.props.BPAppts) / (this.props.CPDials + this.props.BPDials) * 100)}% of dials</h6>

                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showClientPerformance ?
                    <div className="card" style={{ textAlign: 'center', color: 'black' }}>

                        <h3>Delegated Client Calling Analytics:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />

                                <h6>Made contact on :</h6>
                                <h6>{Math.round((this.props.CCContacts + this.props.BCContacts) / (this.props.CCDials + this.props.BCDials) * 100)}% of dials</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />

                                <h6>Scheduled an appointment on:</h6>
                                <h6>{Math.round((this.props.CCAppts + this.props.BCAppts) / (this.props.CCContacts + this.props.BCContacts) * 100)}% of contacts</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Scheduled an appointment on: </h6>
                                <h6>{Math.round((this.props.CCAppts + this.props.BCAppts) / (this.props.CCDials + this.props.BCDials) * 100)}% of dials</h6>

                            </div>


                        </div>

                    </div>
                    : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showNaturalPerformance ?
                    <div className="card" style={{ textAlign: 'center', color: 'black' }}>

                        <h3>Natural Market Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <h6>Made contact on:</h6>
                                <h6> {Math.round((this.props.CNContacts + this.props.BNContacts) / (this.props.CNDials + this.props.BNDials) * 100)}% of dials</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <h6>Scheduled an appointment on: </h6>
                                <h6>{Math.round((this.props.CNAppts + this.props.BNAppts) / (this.props.CNContacts + this.props.BNContacts) * 100)}% of contacts</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <h6>Scheduled an appointment on: </h6>
                                <h6>{Math.round((this.props.CNAppts + this.props.BNAppts) / (this.props.CNDials + this.props.BNDials) * 100)}% of your dials</h6>

                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showSuspectPerformance ?
                    <div className="card" style={{ textAlign: 'center', color: 'black' }}>

                        <h3>Suspect Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Made contact on </h6>
                                <h6>{Math.round((this.props.CSContacts + this.props.BSContacts) / (this.props.CSDials + this.props.BSDials) * 100)}% of dials</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Scheduled an appointment on: </h6>
                                <h6>{Math.round((this.props.CSAppts + this.props.BSAppts) / (this.props.CSContacts + this.props.BSContacts) * 100)}% of contacts</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Scheduled an appointment on:</h6>
                                <h6>{Math.round((this.props.CSAppts + this.props.BSAppts) / (this.props.CSDials + this.props.BSDials) * 100)}% of dials</h6>

                            </div>
                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showReferralPerformance ?
                    <div className="card" style={{ textAlign: 'center', color: 'black' }}>

                        <h3>Referral Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Made Contact on:</h6>
                                <h6>{Math.round((this.props.CRContacts + this.props.BRContacts) / (this.props.CRDials + this.props.BRDials) * 100)}% of dials</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Made appointments on: </h6>
                                <h6>{Math.round((this.props.CRAppts + this.props.BRAppts) / (this.props.CRContacts + this.props.BRContacts) * 100)}% of contacts</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }}
                                />
                                <br />
                                <h6>Scheduled appointments on: </h6>
                                <h6>{Math.round((this.props.CRAppts + this.props.BRAppts) / (this.props.CRDials + this.props.BRDials) * 100)}% of dials</h6>

                            </div>


                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showTargetPerformance ?
                    <div className="card" style={{ textAlign: 'center', color: 'black' }}>

                        <h3>Target Market Calling Performance:</h3>
                        <div className="row" style={{ textAlign: 'center' }}>

                            <div className="col-lg-4">
                                <h6>Dials to Contact Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }} />
                                <br />
                                <h6>Made Contact on: </h6>
                                <h6>{Math.round((this.props.CTContacts + this.props.BTContacts) / (this.props.CTDials + this.props.BTDials) * 100)}% of dials</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Contacts to Appointment Ratio</h6>
                                <br />
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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }} />
                                <br />
                                <h6>Made appointments on: </h6>
                                <h6>{Math.round((this.props.CTAppts + this.props.BTAppts) / (this.props.CTContacts + this.props.BTContacts) * 100)}% of contacts</h6>

                            </div>

                            <div className="col-lg-4">
                                <h6>Dials to Appointment Ratio</h6>
                                <br />

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
                                }}
                                    options={{
                                        legend: {
                                            display: false
                                        }
                                    }} />
                                <br />
                                <h6>Made appointments on: </h6>
                                <h6>{Math.round((this.props.CTAppts + this.props.BTAppts) / (this.props.CTDials + this.props.BTDials) * 100)}% of dials</h6>

                            </div>

                        </div>

                    </div>
                    : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showSourcePerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <div style={{ color: 'black' }}>
                            <h3><u>{this.state.leadSource} Types of Calls</u></h3>

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
                            <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '5%' }}>
                                <h4 style={{ textAlign: 'center' }}>Dials: {this.state.sourceDialData.length}</h4>
                                <Pie data={{
                                    labels: [
                                        "Standard/Cashflow",
                                        "Tier-1/Businessowner"],
                                    datasets: [{
                                        data: [
                                            this.state.SCPDials +
                                            this.state.SCCDials +
                                            this.state.SCNDials +
                                            this.state.SCSDials +
                                            this.state.SCRDials +
                                            this.state.SCTDials,
                                            this.state.SBTDials +
                                            this.state.SBPDials +
                                            this.state.SBCDials +
                                            this.state.SBNDials +
                                            this.state.SBSDials +
                                            this.state.SBRDials
                                        ],
                                        backgroundColor: [
                                            "#3ac178",
                                            "#483d28"

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
                        <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '5%' }}>
                            <h3>{this.state.leadSource} Lead Performance:</h3>
                            <div className="row" style={{ textAlign: 'center' }}>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Contacts/Dial Ratio</h5>
                                    <h6>Total Dials: {this.state.SourceDials}</h6>
                                    <Pie data={{
                                        labels: [
                                            `Missed Calls`,
                                            `Contacts`,
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
                                                display: false
                                            }
                                        }}
                                    />
                                    <br />
                                    <h6>Made Contact on:</h6>
                                    <h6> {Math.round((this.state.SourceContacts / this.state.SourceDials) * 100)}% of dials</h6>
                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Contact Ratio</h5>
                                    <h6>Total Contacts: {this.state.SourceContacts}</h6>
                                    <Pie data={{
                                        labels: [
                                            `Contacts without Scheduling`,
                                            `Scheduled`,
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
                                                display: false
                                            }
                                        }}

                                    />
                                    <h6>Scheduled Appointments on:</h6>
                                    <h6> {Math.round((this.state.SourceAppts / this.state.SourceContacts) * 100)}% of contacts</h6>

                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Dial Ratio</h5>
                                    <h6>Total Appointments: {this.state.SourceAppts}</h6>
                                    <Pie data={{
                                        labels: [
                                            `Dials without Scheduling`,
                                            `Dials Scheduled`,
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
                                                display: false
                                            }
                                        }}
                                    />
                                    <h6>Scheduled Appointments on:</h6>
                                    <h6>{Math.round((this.state.SourceAppts / this.state.SourceDials) * 100)}% of dials</h6>

                                </div>


                            </div>
                        </div>

                    </div>
                    : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showSelectedTargetPerformance ?
                    <div style={{ textAlign: 'center' }}>

                        <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '5%' }}>
                            <div>
                                <h3><u>{this.state.targetMarket} Market</u></h3>
                                <p style={{ textAlign: 'center' }}>Total Dials: {this.state.targetDialData.length}</p>
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
                                        "Standard/Cashflow",
                                        "Tier-1/Businessowner"],
                                    datasets: [{
                                        data: [
                                            this.state.TCPDials +
                                            this.state.TCCDials +
                                            this.state.TCNDials +
                                            this.state.TCSDials +
                                            this.state.TCRDials +
                                            this.state.TCTDials,

                                            this.state.TBTDials +
                                            this.state.TBPDials +
                                            this.state.TBCDials +
                                            this.state.TBNDials +
                                            this.state.TBSDials +
                                            this.state.TBRDials
                                        ],
                                        backgroundColor: [
                                            "#3ac178",
                                            "#483d28"
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
                        <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '5%' }}>
                            <h3>{this.state.targetMarket} Market Dialing Performance:</h3>
                            <div className="row" style={{ textAlign: 'center' }}>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Contact / Dial Ratio</h5>
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
                                    }}
                                        options={{
                                            legend: {
                                                display: false
                                            }
                                        }}
                                    />
                                    <h6>Made contact on: </h6>
                                    <h6>{Math.round((this.state.TargetContacts / this.state.TargetDials) * 100)}% of dials </h6>

                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Contact Ratio</h5>
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
                                    }}
                                        options={{
                                            legend: {
                                                display: false
                                            }
                                        }}
                                    />
                                    <h6>Scheduled appointment on: </h6>
                                    <h6>{Math.round((this.state.TargetAppts / this.state.TargetContacts) * 100)}% of contacts</h6>

                                </div>

                                <div className="col-lg-4">
                                    <hr />
                                    <h5>Appointment / Dials Ratio</h5>
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
                                    }}
                                        options={{
                                            legend: {
                                                display: false
                                            }
                                        }}
                                    />
                                    <h6>Scheduled an appointment on: </h6>
                                    <h6>{Math.round((this.state.TargetAppts / this.state.TargetDials) * 100)}% of dials</h6>

                                </div>


                            </div>
                        </div>
                    </div>
                    : null}


            </div >
        )
    }

}

export default MentorDataViewer
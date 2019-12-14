import React, { Component } from 'react';
import API from '../../utils/API';
import { Bar, Pie } from 'react-chartjs-2';

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
            leadSource: "",
            targetMarket: "",
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

    render() {
        return (
            <div className="card">
                <div className="row" style={{ height: '100%', width: '100%' }}>
                    <div className="col-2">
                        <button style={{ marginLeft: "auto", marginRight: 'auto' }} className="btn btn-success" onClick={this.viewDialChart}>Dials: {this.props.dialData.length}</button>
                    </div>

                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewContactChart}>Contacts: {this.props.contactData.length}</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewApptChart}>Appointments: {this.props.apptData.length}</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewCFDialChart}>Cashflow Dials Only</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewCFContactChart}>Cashflow Contacts Only</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewCFApptChart}>Cashflow Appts Only</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewBODialChart}>Businessowner Dials Only</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewBOContactChart}>Businessowner Appts Only</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewBOApptChart}>Businessowner Appts Only</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewProspectPerformance}>Prospect Call Performance</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewClientPerformance}>Existing Client Call Performance</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewNaturalPerformance}>Natural Market Call Performance</button>
                    </div>
                    <div className="col-2">
                        <button style={{ marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewSuspectPerformance}>Suspect Call Performance</button>
                    </div>
                    {/* <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewReferralPerformance}>Referral Call Performance</button>
                        <button style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }} className="btn btn-success" onClick={this.viewTargetPerformance}>Target Market Call Performance</button> */}

                </div>
                <div className="row">
                    <div className="col" style={{ textAlign: 'center' }}>
                        <h3><u>Protege: {this.props.protegeData.firstName} {this.props.protegeData.lastName} </u></h3>
                        <hr />
                        <h4>Dials: {this.props.dialData.length}</h4>
                    </div>
                </div>

                {
                    this.state.showDialChart ?
                        <div className="row">
                            <div className="col-lg-6">
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
                                }} />
                            </div>
                            <div className="col-lg-6">
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
                                }} /> </div> </div> : null
                }


                <div className="row">
                    <div className="col" style={{ textAlign: 'center' }}>
                        <hr />
                        <h4>Contacts: {this.props.contactData.length}</h4>
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
                {
                    this.state.showContactChart ?
                        <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                                }} /> </div>

                        </div> : null
                }


                {
                    this.state.showApptChart ?
                        <div>
                            <div className="row">
                                <div className="col" style={{ textAlign: 'center' }}>
                                    <hr />
                                    <h4>Appointments: {this.props.apptData.length} </h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
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
                                <div className="col-lg-6">
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
                                    }} />
                                </div> </div> </div> : null
                }

                <hr />

                {/* //////////////////////////////////////////////////
                /////////////////////////////////////////////////
                ///////////////////////////////////////////////////// */}

                {this.state.showCashflowDials ?
                    <div>
                        <div className="row">
                            <div className="col" style={{ textAlign: 'center' }}>
                                <hr />
                                <h4>Cashflow Dials Data:</h4>
                            </div>
                        </div>

                        <div className="row">


                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                                }} /> </div>
                        </div>   </div> : null}

                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                {this.state.showCashflowContacts ?
                    <div>
                        <div className="row" style={{ textAlign: 'center' }}>
                            <div className="col">
                                <h4>Contact Data:</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                        <div className="row" style={{ textAlign: 'center' }}>
                            <div className="col">
                                <h4>Appointment Data:</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                                }} /> </div> </div>
                    </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessDials ?
                    <div>
                        <div className="row" style={{ textAlign: 'center' }}>
                            <div className="col">
                                <h4>Dial Data:</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
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
                        <div className="col-lg-6">
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
                            }} /> </div> </div> </div> : null}


                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessContacts ?
                    <div>
                        <div className="row">
                            <div className="col">
                                <h4>Contact Data:</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
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
                                }} />
                            </div>
                            <div className="col-lg-6">
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
                                }} /> </div> </div> </div> : null}



                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {this.state.showBusinessAppts ?
                    <div>
                        <div className="row">
                            <div className="col"></div>
                            <h3><u>Appointment Data:</u></h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                                }} /> </div> </div> </div> : null}



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

                }
            </div >
        )
    }

}

export default MentorDataViewer
import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

class DialDataSide extends Component {
    constructor(props) {
        super(props);
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
            showBusinessAppts: false
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
                showBusinessAppts: false
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
                showBusinessAppts: false
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
                showBusinessAppts: false
            })
        }
    }

    render() {
        return (
            <div className="container card" style={{backgroundColor: 'rgba(0,0,0,0.5)', color: 'whitesmoke'}}>
                <div className="row">
                    <div className="col" style={{ textAlign: 'center'}}>
                        <h5>Weekly Stats:</h5>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <button style={{width: '100%'}} className="btn btn-success" onClick={this.viewDialChart}>Dials: {this.props.dialData.length}</button>
                    </div>
                    <div className="col-12">
                        <button style={{width: '100%'}} className="btn btn-success" onClick={this.viewContactChart}>Contacts: {this.props.contactData.length}</button>
                    </div>
                    <div className="col-12">
                        <button style={{width: '100%'}} className="btn btn-success" onClick={this.viewApptChart}>Appts: {this.props.apptData.length}</button>
                    </div>
                </div> */}
                {this.state.showDialChart ?
                    <div>
                        <p>Weekly Dials: {this.props.dialData.length}</p>
                        {/* <Bar data={{
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
                        }} 
                        options={{
                            legend: {
                                display: false
                            }
                        }}/> </div> : null}
                {/* <ul>Dials:{this.props.dialData.length}</ul>
                <li>Cashflow Prospect Dials: {this.props.CPDials}</li>
                <li>Business Prospect Dials: {this.props.BPDials}</li>
                <li>Cashflow Client Dials: {this.props.CCDials}</li>
                <li>Business Client Dials: {this.props.BCDials}</li>
                <li>Cashflow Natural Mkt Dials: {this.props.CNDials}</li>
                <li>Business Natural Mkt Dials: {this.props.BNDials}</li>
                <li>Cashflow Suspect Dials: {this.props.CSDials}</li>
                <li>Business Suspect Dials: {this.props.BSDials}</li>
                <li>Cashflow Referral Dials: {this.props.CRDials}</li>
                <li>Business Referral Dials: {this.props.BRDials}</li>
                <li>Cashflow Target Mkt Dials: {this.props.CTDials}</li>
                <li>Business Target Mkt Dials: {this.props.BTDials}</li> */}

                <br />

                {this.state.showContactChart ?
                    <div>
                        <p>Weekly Contacts: {this.props.contactData.length}</p>
                        {/* <Bar data={{
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
                        }} 
                        options={{
                            legend: {
                                display: false
                            }
                        }}/>

                    </div> : null}

                {/*                 
                <li>Cashflow Prospect Contacts: {this.props.CPContacts}</li>
                <li>Business Prospect Contacts: {this.props.BPContacts}</li>
                <li>Cashflow Client Contacts: {this.props.CCContacts}</li>
                <li>Business Client Contacts: {this.props.BCContacts}</li>
                <li>Cashflow Natural Mkt Contacts: {this.props.CNContacts}</li>
                <li>Business Natural Mkt Contacts: {this.props.BNContacts}</li>
                <li>Cashflow Suspect Contacts: {this.props.CSContacts}</li>
                <li>Business Suspect Contacts: {this.props.BSContacts}</li>
                <li>Cashflow Referral Contacts: {this.props.CRContacts}</li>
                <li>Business Referral Contacts: {this.props.BRContacts}</li>
                <li>Cashflow Target Mkt Contacts: {this.props.CTContacts}</li>
                <li>Business Target Mkt Contacts: {this.props.BTContacts}</li> */}


                <br />
                {this.state.showApptChart ?
                    <div>
                        <p>Weekly Appointments: {this.props.apptData.length}</p>

                        {/* <Bar data={{
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
                        }} 
                        options={{
                            legend: {
                                display: false
                            }
                        }}/>
                    </div> : null}
                {/* <li>Cashflow Prospect Appts: {this.props.CPAppts}</li>
                <li>Business Prospect Appts: {this.props.BPAppts}</li>
                <li>Cashflow Client Appts: {this.props.CCAppts}</li>
                <li>Business Client Appts: {this.props.BCAppts}</li>
                <li>Cashflow Natural Mkt Appts: {this.props.CNAppts}</li>
                <li>Business Natural Mkt Appts: {this.props.BNAppts}</li>
                <li>Cashflow Suspect Appts: {this.props.CSAppts}</li>
                <li>Business Suspect Appts: {this.props.BSAppts}</li>
                <li>Cashflow Referral Appts: {this.props.CRAppts}</li>
                <li>Business Referral Appts: {this.props.BRAppts}</li>
                <li>Cashflow Target Mkt Appts: {this.props.CTAppts}</li>
                <li>Business Target Mkt Appts: {this.props.BTAppts}</li> */}
                <hr />

                {/* <h5 style={{ textAlign: 'center' }}><u>Broken down by Area</u></h5> */}
                <ul>

                </ul>
            </div>

        )
    }

}

export default DialDataSide;
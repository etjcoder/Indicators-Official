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

                {this.state.showDialChart ?
                    <div>
                        <p style={{width: '100%', fontSize: '16px'}}>Breakdown:</p>
                    
                        <Pie data={{
                            labels: [
                                "Standard / Cashflow",
                                "Tier-1 / Businessowner"
                                ],
                            datasets: [{
                                data: [
                                    this.props.CPDials + this.props.CCDials + this.props.CNDials + this.props.CSDials + this.props.CRDials + this.props.CTDials, 
                                    this.props.BTDials + this.props.BPDials + this.props.BCDials + this.props.BNDials + this.props.BSDials + this.props.BRDials
                                ],
                                backgroundColor: [
                                    "#3ac178",
                                    "#443959"
                                ]
                            }]
                        }} 
                        options={{
                            legend: {
                                display: false
                            }
                        }}/></div> : null}
                <br />
                
                {this.state.showDialChart ?
                    <div>
                        <p style={{width: '100%', fontSize: '16px'}}>Weekly Dials: {this.props.dialData.length}</p>
                    
                        <Pie data={{
                            labels: [
                                "Warm Lead / Prospect",
                                "Delegated Client",
                                "Natural Market",
                                "Vertical / Orphan",
                                "Referral",
                                "Target Market"],
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
                                display: false
                            }
                        }}/></div> : null}
                <br />

                {this.state.showContactChart ?
                    <div>
                        <p style={{width: '100%', fontSize: '16px'}}>Weekly Contacts: {this.props.contactData.length}</p>
                       
                        <Pie data={{
                            labels: [
                                "Warm Lead / Prospect",
                                "Delegated Client",
                                "Natural Market",
                                "Vertical / Orphan",
                                "Referral",
                                "Target Market"],
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
                                display: false
                            }
                        }}/>

                    </div> : null}



                <br />
                {this.state.showApptChart ?
                    <div>
                        <p style={{width: '100%', fontSize: '16px'}}>Weekly Appointments: {this.props.apptData.length}</p>

                      
                        <Pie data={{
                            labels: [
                                "Warm Lead / Prospect",
                                "Delegated Client",
                                "Natural Market",
                                "Vertical / Orphan",
                                "Referral",
                                "Target Market"],
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
                                display: false
                            }
                        }}/>
                    </div> : null}
                <hr />

                {/* <h5 style={{ textAlign: 'center' }}><u>Broken down by Area</u></h5> */}
                <ul>

                </ul>
            </div>

        )
    }

}

export default DialDataSide;
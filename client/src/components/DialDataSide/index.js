import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class DialDataSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialChart: true,
            showContactChart: true,
            showApptChart: true
        }
    }

    componentDidMount = () => {
    setInterval(() => { 
        this.parseWeeklyDials()
        this.parseWeeklyContacts()
        this.parseWeeklyAppts()
    }, 3000)
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
            for (var i = 0; i < this.props.dialData.length; i++) {
                // console.log(this.state.dialData[i])
                switch (this.props.dialData[i].type) {
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
        for (var i = 0; i < this.props.dialData.length; i++) {

            if (this.props.dialData[i].contact === true) {
                switch (this.props.dialData[i].type) {
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

    parseWeeklyAppts = () => {
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
        for (var i = 0; i < this.props.dialData.length; i++) {
            // console.log(this.state.appointments[i])
            if (this.props.dialData[i].scheduled === true) {
            switch (this.props.dialData[i].type) {
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
                                    this.state.CPDials + this.state.CCDials + this.state.CNDials + this.state.CSDials + this.state.CRDials + this.state.CTDials, 
                                    this.state.BTDials + this.state.BPDials + this.state.BCDials + this.state.BNDials + this.state.BSDials + this.state.BRDials
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
                                    this.state.CPDials + this.state.BPDials,
                                    this.state.CCDials + this.state.BCDials,
                                    this.state.CNDials + this.state.BNDials,
                                    this.state.CSDials + this.state.BSDials,
                                    this.state.CRDials + this.state.BRDials,
                                    this.state.CTDials + this.state.BTDials
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
                        <p style={{width: '100%', fontSize: '16px'}}>Weekly Contacts: 
                        {this.state.CPContacts + this.state.BPContacts +
                                    this.state.CCContacts + this.state.BCContacts +
                                    this.state.CNContacts + this.state.BNContacts +
                                    this.state.CSContacts + this.state.BSContacts +
                                    this.state.CRContacts + this.state.BRContacts +
                                    this.state.CTContacts + this.state.BTContacts}</p>
                       
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
                                    this.state.CPContacts + this.state.BPContacts,
                                    this.state.CCContacts + this.state.BCContacts,
                                    this.state.CNContacts + this.state.BNContacts,
                                    this.state.CSContacts + this.state.BSContacts,
                                    this.state.CRContacts + this.state.BRContacts,
                                    this.state.CTContacts + this.state.BTContacts
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
                        <p style={{width: '100%', fontSize: '16px'}}>Weekly Appointments: 
                        {this.state.CPAppts + this.state.BPAppts +
                                    this.state.CCAppts + this.state.BCAppts +
                                    this.state.CNAppts + this.state.BNAppts +
                                    this.state.CSAppts + this.state.BSAppts +
                                    this.state.CRAppts + this.state.BRAppts +
                                    this.state.CTAppts + this.state.BTAppts}</p>

                      
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
                                    this.state.CPAppts + this.state.BPAppts,
                                    this.state.CCAppts + this.state.BCAppts,
                                    this.state.CNAppts + this.state.BNAppts,
                                    this.state.CSAppts + this.state.BSAppts,
                                    this.state.CRAppts + this.state.BRAppts,
                                    this.state.CTAppts + this.state.BTAppts
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
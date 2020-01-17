import React, { Component } from 'react';
// import { Pie } from 'react-chartjs-2';
import "./style.css"
import API from "../../utils/API";

class ManagerDataViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount = () => {
        this.runRefresh()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    runRefresh = () => {
        this.interval = setInterval(() => this.props.rerender(), 5000);
    }

    componentWillUnmount = () => {

        clearInterval(this.interval)
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





    render() {
        return (

            <div className="card bg-dark" style={{ padding: '10%', borderRadius: '5px' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{color: 'white'}}>{this.props.protege.firstName} {this.props.protege.lastName}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                {/* <p></p> */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Dials:{this.props.protege.dials.length}</li>
                    <li className="list-group-item">Contacts: </li>
                    <li className="list-group-item">Appointments:{this.props.protege.appointments.length}</li>
                </ul>
            </div>

        )
    }

}

export default ManagerDataViewer
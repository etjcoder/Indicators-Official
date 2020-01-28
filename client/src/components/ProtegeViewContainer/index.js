import React, { Component } from 'react';
// import { Pie } from 'react-chartjs-2';
import "./style.css"
import API from "../../utils/API";

class ProtegeViewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeScope: "viewAll"
        }
    }

    componentDidMount = () => {
        this.runRefresh()
        this.getContactData()
        this.setState({
            allDials: this.props.protege.dials.length,
            allAppts: this.props.protege.appointments.length
        })
        // this.getWeeklyAppts()
        // this.getWeeklyDials()
        // this.getMonthlyDials()
        // this.getMonthlyAppts()
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    runRefresh = () => {
        this.interval = setInterval(() => {
            this.props.rerender()
            if (this.props.scope === "viewWeekly" && this.state.activeScope !== "viewWeekly") {
                this.getWeeklyAppts()
                this.getWeeklyDials()
                this.setState({
                    activeScope: "viewWeekly",
                    monthlyDials: "",
                    monthlyAppts: ""
                })
            } else if (this.props.scope === "viewMonthly" && this.state.activeScope !== "viewMonthly") {
                this.getMonthlyDials()
                this.getMonthlyAppts()
                this.setState({
                    activeScope: "viewMonthly",
                    weeklyDials: "",
                    weeklyAppts: ""
                })
            } else if (this.props.scope === "viewAll" && this.state.activeScope !== "viewAll") {
                this.setState({
                    allDials: this.props.protege.dials.length,
                    allAppts: this.props.protege.appointments.length,
                    activeScope: "viewAll",
                    weeklyAppts: "",
                    weeklyDials: "",
                    monthlyAppts: "",
                    monthlyDials: ""
                })
            } else {
                console.log("no change")
            }

        }, 5000);


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

    getWeeklyDials = () => {
        API.getWeeklyDials(this.props.protege._id)
            .then(res => {
                this.setState({
                    weeklyDials: res.data
                })
            })

        setTimeout(() => { this.parseWeeklyContacts() }, 500)
    }

    getWeeklyAppts = () => {
        API.getWeeklyAppts(this.props.protege._id)
            .then(res => {
                this.setState({
                    weeklyAppts: res.data
                })
            })
    }

    parseWeeklyContacts = () => {
        // console.log("Parsing Contacts: " + this.state.weeklyDials)
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
        if (this.state.weeklyDials) {
            for (var i = 0; i < this.state.weeklyDials.length; i++) {

                if (this.state.weeklyDials[i].contact === true) {
                    switch (this.state.weeklyDials[i].type) {
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
        }
        this.setState({
            weeklyContacts: wCPC + wBPC + wCCC + wBCC + wCNC + wCSC + wBSC + wCRC + wBRC + wCTC + wBTC
        })
    }


    getMonthlyDials = () => {
        API.getMonthlyDials(this.props.protege._id)
            .then(res => {
                this.setState({
                    monthlyDials: res.data
                })
            })

        setTimeout(() => { this.parseMonthlyContacts() }, 500)
    }

    getMonthlyAppts = () => {
        API.getMonthlyAppts(this.props.protege._id)
            .then(res => {
                this.setState({
                    monthlyAppts: res.data
                })
            })
    }

    parseMonthlyContacts = () => {
        // console.log("Parsing Contacts: " + this.state.weeklyDials)
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
        if (this.state.monthlyDials) {
            for (var i = 0; i < this.state.monthlyDials.length; i++) {

                if (this.state.monthlyDials[i].contact === true) {
                    switch (this.state.monthlyDials[i].type) {
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
        }
        this.setState({
            monthlyContacts: wCPC + wBPC + wCCC + wBCC + wCNC + wCSC + wBSC + wCRC + wBRC + wCTC + wBTC
        })
    }




    getContactData = () => {
        setTimeout(() => {
            // console.log("Searching contacts using: " + this.state.activeProtegeData._id)
            API.getContacts(this.props.protege._id)
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
        if (this.state.contactData) {
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
            BTContacts: BTC,
            totalContacts: CPC + BPC + CCC + BCC + CNC + CSC + BSC + CRC + BRC + CTC + BTC
        })
    }





    render() {
        return (

            <div>
                {this.props.protege.dials.length > 1 ?
                    <div className="card bg-light" style={{ padding: '', borderRadius: '5px', textAlign: 'center' }}>
                        <div className="card-body">
                            <div className="card-header">

                                {this.props.protege.imageURL ? <img class="rounded-circle z-depth-2" alt="100x100" src={this.props.protege.imageURL} style={{ width: '100px', height: '100px' }} />
                                    : <img class="rounded-circle z-depth-2" alt="100x100" src="https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image_preview" style={{ width: '100px', height: '100px' }} />
                                }

                                <br />

                                <h5 style={{ color: '' }}>{this.props.protege.firstName} {this.props.protege.lastName}</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {this.state.allDials ?
                                        <>



                                            <li className="list-group-item">Dials:<br /><h3>

                                                {this.state.activeScope === "viewAll" ? <span> {this.state.allDials}</span> : null}
                                                {this.state.activeScope === "viewWeekly" ? <> {this.state.weeklyDials ? <span> {this.state.weeklyDials.length}</span> : null} </> : null}
                                                {this.state.activeScope === "viewMonthly" ? <> {this.state.monthlyDials ? <span> {this.state.monthlyDials.length}</span> : null} </> : null}
                                            </h3></li>


                                        </>
                                        : null}
                                    <li className="list-group-item">Contacts:<br /> {this.state.CPContacts ?
                                        <div>
                                            <h3>

                                                {this.state.activeScope === "viewAll" ? <span> {this.state.totalContacts}</span> : null}
                                                {this.state.activeScope === "viewWeekly" ? <> {this.state.weeklyContacts > 0 ? <span> {this.state.weeklyContacts}</span> : 0} </> : null}
                                                {this.state.activeScope === "viewMonthly" ? <> {this.state.monthlyContacts > 0 ? <span> {this.state.monthlyContacts}</span> : 0} </> : null}
                                            </h3>
                                            <h6>Contact Ratio:  </h6>
                                            {this.state.activescope === "viewAll" ?

                                                <h5>{Math.trunc((this.state.totalContacts / this.state.allDials) * 100)}%</h5>

                                                : null}

                                            {this.state.activeScope === "viewWeekly" ?
                                                <>
                                                    {this.state.weeklyContacts ?
                                                        <h5>{Math.trunc((this.state.weeklyContacts / this.state.weeklyDials.length) * 100)}%</h5>
                                                        : null}
                                                </>
                                                : null}

                                            {this.state.activeScope === "viewMonthly" ?
                                                <>
                                                    {this.state.monthlyContacts ?
                                                        <h5>{Math.trunc((this.state.monthlyContacts / this.state.monthlyDials.length) * 100)}%</h5>
                                                        : null}
                                                </>
                                                : null}


                                        </div>

                                        : <h3>0</h3>}

                                    </li>
                                    {this.state.allAppts ?
                                        <li className="list-group-item">Appointments: <br /><h3>

                                            {this.state.activeScope === "viewAll" ? <span> {this.state.allAppts}</span> : null}
                                            {this.state.activeScope === "viewWeekly" ? <> {this.state.weeklyAppts ? <span> {this.state.weeklyAppts.length}</span> : null} </> : null}
                                            {this.state.activeScope === "viewMonthly" ? <> {this.state.monthlyAppts ? <span> {this.state.monthlyAppts.length}</span> : null}  </> : null}
                                        </h3>

                                            {this.state.totalContacts ?
                                                <div>
                                                    <h6>Appointment per Contact:</h6>


                                                    {this.state.activeScope === "viewAll" ? <span>
                                                        <h5>{Math.trunc((this.state.allAppts / this.state.totalContacts) * 100)}%</h5>


                                                    </span> : null}
                                                    {this.state.activeScope === "viewWeekly" ? <span>

                                                        {this.state.weeklyAppts ? <h5> {this.state.weeklyAppts.length > 0 ? <> {Math.trunc((this.state.weeklyAppts.length / this.state.weeklyContacts) * 100)}% </> : 0 }</h5> : null}

                                                    </span> : null}
                                                    {this.state.activeScope === "viewMonthly" ? <span>

                                                        {this.state.monthlyAppts ? <h5> {this.state.monthlyAppts.length > 0 ? <> {Math.trunc((this.state.monthlyAppts.length / this.state.monthlyContacts) * 100)}% </> : 0 }</h5> : null}

                                                    </span> : null}
                                                </div>
                                                : null}
                                        </li>
                                        : null}

                                </ul>
                            </div>

                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        {/* <p></p> */}

                    </div>
                    : null}
            </div>

        )
    }

}

export default ProtegeViewContainer
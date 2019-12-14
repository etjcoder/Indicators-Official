import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
import API from "../utils/API";
import MentorDataViewer from "../components/MentorDataViewer"
import NoteViewer from "../components/NoteViewer";
// import Header from "../components/Header";
// import TopBarMentor from "../components/TopBarMentor";
// import NoteViewer from "../components/NoteViewer";
// import NoteInput from "../components/NoteInput";
// import ProtegeProfileContainer from "../components/ProtegeProfileContainer";
//     import ProtegeProfile from "../component/ProtegeProfile"
// import MentorAnalytics from "../components/MentorAnalytics";
//     import AnalyticsMBasic from "../components/AnalyticsMB";
//     import AnalyticsMAdvanced from "../components/AnalyticsMAdvanced";
import NoteViewerMentor from "../components/NoteViewerMentor"
import NoteCreatorMentor from "../components/NoteCreatorMentor"
import SalesCreatorMentor from "../components/SalesCreatorMentor"
import SalesItemMentor from "../components/SalesItemMentor"
import AppointmentItem from "../components/AppointmentItem";
import AppointmentCreatorMentor from "../components/AppointmentCreatorMentor"

class MentorDash extends Component {

    state = {
        mentor: "",
        protegeData: "",
        dialData: "",
        appointments: "",
        contactData: "",
        numScheduled: 0,
        CPDials: 0,
        BPDials: 0,
        CCDials: 0,
        BCDials: 0,
        CNDials: 0,
        BNDials: 0,
        CPContacts: 0,
        BPContacts: 0,
        CCContacts: 0,
        BCContacts: 0,
        CNContacts: 0,
        BNContacts: 0,
        CPAppts: 0,
        BPAppts: 0,
        CCAppts: 0,
        BCAppts: 0,
        CNAppts: 0,
        BNAppts: 0,
        CSDials: 0,
        BSDials: 0,
        CSContacts: 0,
        BSContacts: 0,
        CSAppts: 0,
        BSAppts: 0,
        protegeSelected: "",
        taggedNotes: "",
        postedNotes: ""
    }

    componentDidMount() {
        console.log("Loaded Mentor Page")
        setTimeout(() => {
            this.getMentorData()
        }, 1200)
    }

    getMentorData = () => {
        console.log(this.props.user.uid)
        var userID = this.props.user.uid
        API.getMentor(userID)
            .then(res =>
                this.setState({
                    mentor: res.data[0]
                }),
                setTimeout(() => {
                    this.getProtegeData()
                    this.getMentorNoteData()
                    this.gatherMentorSales()
                    this.gatherMentorAppts()
                }, 500))
            .catch(err => {
                console.log(err)
            })
    }


    getMentorNoteData = () => {
        console.log(this.state.mentor._id)

        API.getMentorNotes(this.state.mentor._id)
            .then(res =>
                this.setState({
                    taggedNotes: res.data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    gatherMentorSales = () => {
        console.log(this.state.mentor._id)


        API.getMentorSales(this.state.mentor._id)
            .then(res =>
                this.setState({
                    salesData: res.data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    gatherMentorAppts = () => {
        console.log(this.state.mentor._id)
        API.getMentorAppts(this.state.mentor._id)
            .then(res => 
                this.setState({
                    mentorViewAppts: res.data
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getProtegeData = () => {
        console.log(this.state.mentor.proteges.length)
        var proteges = this.state.mentor.proteges
        var newestProtegeIndex = proteges.length - 1

        console.log("Looking for: " + proteges[newestProtegeIndex]._id)
        API.getUserDataById(proteges[newestProtegeIndex]._id)
            .then(res => {
                console.log(res)
                this.setState({
                    protegeData: res.data[0],
                    dialData: res.data[0].dials,
                    protegeSelected: res.data[0]._id
                })
            }
                , this.getContactData(),
                this.gatherAppointments(),
                setTimeout(() => { this.parseDials() }, 500)
            )
    }

    getContactData = () => {
        setTimeout(() => {
            console.log("Searching for contacts using: " + this.state.protegeData._id)
            API.getContacts(this.state.protegeData._id)
                .then(res =>
                    // console.log(res.data.length)
                    this.setState({
                        contactData: res.data
                    }),
                    setTimeout(() => { this.parseContacts() }, 500)
                )
        }, 1000)

    }


    gatherAppointments = () => {
        setTimeout(() => {
            console.log("Gathering appointemnts using ID: " + this.state.protegeData._id)
            API.getAppointments(this.state.protegeData._id)
                .then(res =>
                    this.setState({
                        appointments: res.data
                    }),
                    setTimeout(() => { this.parseAppointments() }, 500)
                )
        }, 1000)
    };

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

    handleProtegeChange = (event) => {
        event.preventDefault()
        console.log(this.state.protegeSelected)
        API.getUserDataById(this.state.protegeSelected)
            .then(res => {
                console.log(res)
                this.setState({
                    protegeData: res.data[0],
                    dialData: res.data[0].dials,
                    protegeSelected: res.data[0]._id
                })
            }
                , this.getContactData(),
                this.gatherAppointments(),
                setTimeout(() => { this.parseDials() }, 500)
            )
    }


    render() {
        return (
            <div className="container">
                <Nav />

                <div className="jumbotron" style={{ height: '500px' }}>
                    <h1>You're on the Mentor Dashboard!</h1>
                    {/* Mentor Header Here */}
                    {/* Top Reader 8/12 Left (Sortable by Proteges, including Past)
                        --Contacts / Dials
                        --Appointments / Sales
                        --Sales / Appointment  
                    */}
                    <form>
                        {this.state.mentor ?
                            <div>
                                <select id="protegeSelector" value={this.state.protegeSelected} onChange={this.handleInputChange} type="text" name="protegeSelected" className="form-control" placeholder="Choose your protege">
                                    {this.state.mentor.proteges.map(protege => (
                                        <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                    ))} </select>
                                <button onClick={this.handleProtegeChange} className="btn btn-success">Search</button>
                            </div> : null}
                    </form>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <MentorDataViewer
                            protegeData={this.state.protegeData}
                            contactData={this.state.contactData}
                            dialData={this.state.dialData}
                            apptData={this.state.appointments}
                            CPAppts={this.state.CPAppts}
                            BPAppts={this.state.BPAppts}
                            CCAppts={this.state.CCAppts}
                            BCAppts={this.state.BCAppts}
                            CNAppts={this.state.CNAppts}
                            BNAppts={this.state.BNAppts}
                            CPDials={this.state.CPDials}
                            BPDials={this.state.BPDials}
                            CCDials={this.state.CCDials}
                            BCDials={this.state.BCDials}
                            CNDials={this.state.CNDials}
                            BNDials={this.state.BNDials}
                            CPContacts={this.state.CPContacts}
                            BPContacts={this.state.BPContacts}
                            CCContacts={this.state.CCContacts}
                            BCContacts={this.state.BCContacts}
                            CNContacts={this.state.CNContacts}
                            BNContacts={this.state.BNContacts}
                            CSDials={this.state.CSDials}
                            BSDials={this.state.BSDials}
                            CSContacts={this.state.CSContacts}
                            BSContacts={this.state.BSContacts}
                            CSAppts={this.state.CSAppts}
                            BSAppts={this.state.BSAppts}
                            CRDials={this.state.CRDials}
                            BRDials={this.state.BRDials}
                            CRContacts={this.state.CRContacts}
                            BRContacts={this.state.BRContacts}
                            CRAppts={this.state.CRAppts}
                            BRAppts={this.state.BRAppts}
                            CTDials={this.state.CTDials}
                            BTDials={this.state.BTDials}
                            CTContacts={this.state.CTContacts}
                            BTContacts={this.state.BTContacts}
                            CTAppts={this.state.CTAppts}
                            BTAppts={this.state.BTAppts}
                        />
                    </div>

                    <div className="col-lg-4">
                    <h3>Mentor Appointments</h3>
                    <div className="card" style={{ textAlign: 'center'}}>
                        {this.state.mentorViewAppts ? <div>
                        {this.state.mentorViewAppts.map(appt => (
                            <AppointmentItem
                                key={appt._id}
                                id={appt._id}
                                apptname={appt.apptname}
                                type={appt.type}
                                held={appt.held}
                                sold={appt.sold}
                                dialer={appt.protege}
                                source={appt.source}
                                date={appt.date}
                                notes={appt.notes}
                                username={this.state.mentor.firstName + this.state.mentor.lastName}
                                rerender={this.gatherMentorAppts}
                                user={this.state.mentor}
                                targetMarket={appt.targetMarket}
                                mentors={this.state.mentor.proteges}
                                proteges={this.state.mentor.proteges}

                            />
                        ))} </div> : null }
                    </div>
                    <div className="card">
                        <AppointmentCreatorMentor 
                            userID ={this.state.mentor._id}
                            username={this.state.mentor.firstName + this.state.mentor.lastName} 
                            rerender={this.gatherMentorAppts} 
                            userData={this.state.mentor}
                            proteges={this.state.mentor.proteges}
                            protegeData={this.state.protegeData}
                            />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <NoteViewerMentor
                            tagNotes={this.state.taggedNotes}
                            postNotes={this.state.mentor.notes}
                        />
                        <NoteCreatorMentor
                            userData={this.state.mentor}
                        />
                    </div>
                    <div className="col-lg-6">
                        <SalesCreatorMentor
                            userID={this.state.mentor._id}
                            userData={this.state.mentor}
                            proteges={this.state.mentor.proteges}
                        />
                        <div className="card" style={{ textAlign: "center" }}>
                            <h4>Your Sales</h4>
                            {this.state.salesData ? <div>
                                {
                                    this.state.salesData.map(sale => (
                                        <SalesItemMentor
                                            key={sale._id}
                                            id={sale._id}
                                            saleType={sale.clientType}
                                            saleName={sale.saleName}
                                            saleSource={sale.leadSource}
                                            saleNotes={sale.saleNotes}
                                            saleDate={sale.saleDate}
                                            saleTargetMkt={sale.targetMarket}
                                            saleCommission={sale.commission}
                                            salePercentage={sale.percentageMentor}
                                            saleTaggedPercentage={sale.percentageProtege}
                                            saleProduct={sale.product}
                                            saleTagged={sale.protege}
                                            saleWriter={sale.mentor}
                                            proteges={this.state.mentor.proteges}
                                            userData={this.state.mentor}
                                        />
                                    ))
                                } </div>
                                : null}
                        </div>
                    </div>
                </div>
                {/* 
                        Note View 4/12 Right 
                            --Notes to Proteges
                            --Read?
                            --Completed?
                    */}
                {/* Thin Bar 12/12  --Input Notes / Tag Dialer*/}
                {/*  Middle Bar 
                        Protege Profiles
                            -Daily Activity
                            -Monthly Activity
                            -YTD Activity
                            -All Time Activity
                    */}
                {/* 
                        Lower Bar
                        Data Analytics Basic
                            --Search many types of analytics on Personal Team
                        Data Analytics Advanced
                            --Search analytics of firm overall statistics (anonymized) 
                    */}

            </div >

        )
    }
}

export default MentorDash
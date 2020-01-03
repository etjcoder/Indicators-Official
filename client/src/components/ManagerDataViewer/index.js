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
                showProtegeAnalyticsViewer: false
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
                showMentorAnalyticsViewer: false
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

    viewProtegeData = () => {
        console.log(this.state.protegeToView)
        API.getUserDataById(this.state.protegeToView)
            .then(res => {
                console.log(res.data)
                this.setState({
                    activeProtegeData: res.data[0],
                    activeProtegeDataPopulated: true
                })
            })
    }

    viewMentorsProtegeData = () => {
        console.log(this.state.mentorsProtegeToView)
        API.getUserDataById(this.state.mentorsProtegeToView)
            .then(res => {
                console.log(res.data)
                this.setState({
                    activeMentorsProtegeData: res.data[0],
                    activeMentorsProtegeDataPopulated: true
                })
            })
    }

    viewMentorData = () => {
        console.log(this.state.mentorToView)
        API.getMentorById(this.state.mentorToView)
            .then(res => {
                console.log(res.data)
                this.setState({
                    activeMentorData: res.data[0],
                    activeMentorDataPopulated: true
                })
            })
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
                        <h4>Review Proteges <button className="btn btn-outline-light" onClick={this.showProtegeAnalytics}>Show</button></h4>
                        <h4>Review Mentors <button className="btn btn-outline-light" onClick={this.showMentorAnalytics}>Show</button></h4>
                        <h4>Review Global <button className="btn btn-outline-light" onClick={this.showGlobalAnalytics}>Show</button></h4>
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
                                    <button onClick={this.viewProtegeData} className="btn btn-outline-light btn-sm">View Data</button>
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
                                    <button onClick={this.viewMentorData} className="btn btn-outline-light btn-sm">View Data</button>
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
import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerTargetPerformance extends Component {

    state = {

    }

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    ////////////////////////////////////////////////////////////
    ////////// MODAL FUNCTIONS ////////////////////////////////
    ///////////////////////////////////////////////////////////
    openEditModal = () => {
        this.setState({
            editModalIsOpen: true
        })
    }

    afterOpenEditModal = () => {

    }

    closeEditModal = () => {
        this.setState({
            editModalIsOpen: false
        })
    }

    render() {
        return (
            <div style={{ textAlign: 'center', color: '' }}>

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
                        }}
                            options={{
                                legend: {
                                    display: false
                                }
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
                        }}
                            options={{
                                legend: {
                                    display: false
                                }
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
                        }}
                            options={{
                                legend: {
                                    display: false
                                }
                            }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DataViewerTargetPerformance






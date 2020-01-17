import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Pie } from 'react-chartjs-2';



class DataViewerSuspectPerformance extends Component {

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
                        }}
                            options={{
                                legend: {
                                    display: false
                                }
                            }}
                        />
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
                        }}
                            options={{
                                legend: {
                                    display: false
                                }
                            }}
                        />
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
                        }}
                            options={{
                                legend: {
                                    display: false
                                }
                            }}
                        />
                    </div>


                </div>

            </div>
        )
    }
}

export default DataViewerSuspectPerformance






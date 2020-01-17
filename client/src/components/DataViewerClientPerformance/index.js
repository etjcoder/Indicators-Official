import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Pie } from 'react-chartjs-2';



class DataViewerClientPerformance extends Component {

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

export default DataViewerClientPerformance






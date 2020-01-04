import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerProspectPerformance extends Component {

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
            <div style={{ textAlign: 'center', color: 'whitesmoke' }}>

                <h3>Prospect Calling Performance:</h3>
                <div className="row" style={{ textAlign: 'center' }}>

                    <div className="col-lg-4">
                        <h6>Dials to Contact Ratio</h6>
                        <h6>Total Prospect Dials: {this.props.CPDials + this.props.BPDials}</h6>
                        <h6>Contact Ratio: {Math.round((this.props.CPContacts + this.props.BPContacts) / (this.props.CPDials + this.props.BPDials) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Prospect Dials without contacts",
                                "Prospect Contacts",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CPDials + this.props.BPDials - this.props.CPContacts - this.props.BPContacts,
                                    this.props.CPContacts + this.props.BPContacts
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
                        <h6>Total Prospect Contacts: {this.props.CPContacts + this.props.BPContacts}</h6>
                        <h6>Appointment per Contact Ratio: {Math.round((this.props.CPAppts + this.props.BPAppts) / (this.props.CPContacts + this.props.BPContacts) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Prospect Contacts without appointments",
                                "Prospect Appointments",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CPContacts + this.props.BPContacts - this.props.CPAppts - this.props.BPAppts,
                                    this.props.CPAppts + this.props.BPAppts
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
                        <h6>Total Prospect Dials: {this.props.CPDials + this.props.BPDials}</h6>
                        <h6>Appointment per Dial Ratio: {Math.round((this.props.CPAppts + this.props.BPAppts) / (this.props.CPDials + this.props.BPDials) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Prospect Dials without appointments",
                                "Prospect Appointments",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CPDials + this.props.BPDials - this.props.CPAppts - this.props.BPAppts,
                                    this.props.CPAppts + this.props.BPAppts
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

export default DataViewerProspectPerformance






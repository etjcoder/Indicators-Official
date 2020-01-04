import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerNaturalPerformance extends Component {

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

                <h3>Natural Market Calling Performance:</h3>
                <div className="row" style={{ textAlign: 'center' }}>

                    <div className="col-lg-4">
                        <h6>Dials to Contact Ratio</h6>
                        <h6>Total Natural Market Dials: {this.props.CNDials + this.props.BNDials}</h6>
                        <h6>Contact Ratio: {Math.round((this.props.CNContacts + this.props.BNContacts) / (this.props.CNDials + this.props.BNDials) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Natural Market Dials without contact",
                                "Natural Market Contacts",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CNDials + this.props.BNDials - this.props.CNContacts - this.props.BNContacts,
                                    this.props.CNContacts + this.props.BNContacts
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
                        <h6>Total Natural Market Contacts: {this.props.CNContacts + this.props.BNContacts}</h6>
                        <h6>Appointment per Contact Ratio: {Math.round((this.props.CNAppts + this.props.BNAppts) / (this.props.CNContacts + this.props.BNContacts) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Natural Market Contacts without appointment",
                                "Natural Market Appointments",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CNContacts + this.props.BNContacts - this.props.CNAppts - this.props.BNAppts,
                                    this.props.CNAppts + this.props.BNAppts
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
                        <h6>Total Natural Market Dials: {this.props.CNDials + this.props.BNDials}</h6>
                        <h6>Appointment per Dial Ratio: {Math.round((this.props.CNAppts + this.props.BNAppts) / (this.props.CNDials + this.props.BNDials) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Natural Market Dials without appointment",
                                "Natuarl Market Appointments",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CNDials + this.props.BNDials - this.props.CNAppts - this.props.BNAppts,
                                    this.props.CNAppts + this.props.BNAppts
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

export default DataViewerNaturalPerformance






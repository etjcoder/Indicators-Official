import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Pie } from 'react-chartjs-2';



class DataViewerReferralPerformance extends Component {

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

                <h3>Referral Calling Performance:</h3>
                <div className="row" style={{ textAlign: 'center' }}>

                    <div className="col-lg-4">
                        <h6>Dials to Contact Ratio</h6>
                        <h6>Total Referral Dials: {this.props.CRDials + this.props.BRDials}</h6>
                        <h6>Contact Ratio: {Math.round((this.props.CRContacts + this.props.BRContacts) / (this.props.CRDials + this.props.BRDials) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Referral Dials without contact",
                                "Referral Contacts",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CRDials + this.props.BRDials - this.props.CRContacts - this.props.BRContacts,
                                    this.props.CRContacts + this.props.BRContacts
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
                        <h6>Total Referral Contacts: {this.props.CRContacts + this.props.BRContacts}</h6>
                        <h6>Appointment per Contact Ratio: {Math.round((this.props.CRAppts + this.props.BRAppts) / (this.props.CRContacts + this.props.BRContacts) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Referral Contacts without appointment",
                                "Referral Appointments",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CRContacts + this.props.BRContacts - this.props.CRAppts - this.props.BRAppts,
                                    this.props.CRAppts + this.props.BRAppts
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
                        <h6>Total Referral Dials: {this.props.CRDials + this.props.BRDials}</h6>
                        <h6>Appointment per Dial Ratio: {Math.round((this.props.CRAppts + this.props.BRAppts) / (this.props.CRDials + this.props.BRDials) * 100)}%</h6>
                        <Pie data={{
                            labels: [
                                "Referral Dials without appointment",
                                "Referral Appointments",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CRDials + this.props.BRDials - this.props.CRAppts - this.props.BRAppts,
                                    this.props.CRAppts + this.props.BRAppts
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

export default DataViewerReferralPerformance






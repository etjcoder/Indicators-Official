import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerCFContactChart extends Component {

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
            <div>
                <div className="row" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                <div className="col-12 card" style={{ padding: '50px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                                     <h4>Contact Data:</h4>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 card" style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                                     <Bar data={{
                            labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                            datasets: [{
                                label: "Contacts",
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [
                                    this.props.CPContacts,
                                    this.props.CCContacts,
                                    this.props.CNContacts,
                                    this.props.CSContacts,
                                    this.props.CRContacts,
                                    this.props.CTContacts
                                ],
                            }]
                        }} />
                    </div>
                    <div className="col-12 card" style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                                    <Pie data={{
                            labels: [
                                "Cashflow Prospect",
                                "Cashflow Client",
                                "Cashflow Natural Market",
                                "Cashflow Suspect",
                                "Cashflow Referral",
                                "Cashflow Target Market",
                            ],
                            datasets: [{
                                data: [
                                    this.props.CPContacts,
                                    this.props.CCContacts,
                                    this.props.CNContacts,
                                    this.props.CSContacts,
                                    this.props.CRContacts,
                                    this.props.CTContacts
                                ],
                                backgroundColor: [
                                    "#3ac178",
                                    "#443959",
                                    "#f99b17",
                                    "#a2e505",
                                    "#c9917f",
                                    "#8d044b"
                                ]
                            }]
                        }}
                            options={{
                                legend: {
                                    position: 'left',
                                    labels: {
                                        boxWidth: 10
                                    }
                                }
                            }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DataViewerCFContactChart
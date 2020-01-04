import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerCFDialChart extends Component {

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
                <div className="row">
                    <div className="col" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                        <hr />
                        <h4>Cashflow Dials Data:</h4>
                    </div>
                </div>

                <div className="row">


                    <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                        <Bar data={{
                            labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                            datasets: [{
                                label: "Dials",
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [
                                    this.props.CPDials,
                                    this.props.CCDials,
                                    this.props.CNDials,
                                    this.props.CSDials,
                                    this.props.CRDials,
                                    this.props.CTDials
                                ],
                            }]
                        }} />
                    </div>
                    <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
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
                                    this.props.CPDials,
                                    this.props.CCDials,
                                    this.props.CNDials,
                                    this.props.CSDials,
                                    this.props.CRDials,
                                    this.props.CTDials
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
                            }} /> </div>
                </div>
            </div>
        )
    }
}

export default DataViewerCFDialChart
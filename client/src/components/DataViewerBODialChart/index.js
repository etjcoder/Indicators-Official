import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerBODialChart extends Component {

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
                    <div className="col">
                        <h4>Businessowner Dial Data:</h4>
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
                                    this.props.BPDials,
                                    this.props.BCDials,
                                    this.props.BNDials,
                                    this.props.BSDials,
                                    this.props.BRDials,
                                    this.props.BTDials],
                            }]
                        }} />
                    </div>
                    <div className="col-lg-6 card" style={{ backgroundColor: 'rgba(114,180,255,0.8)', padding: '0', margin: 0 }}>
                        <Pie data={{
                            labels: [
                                "Business Prospect",
                                "Business Client",
                                "Business Natural Market",
                                "Business Suspect",
                                "Business Referral",
                                "Business Target Market"],
                            datasets: [{
                                data: [
                                    this.props.BPDials,
                                    this.props.BCDials,
                                    this.props.BNDials,
                                    this.props.BSDials,
                                    this.props.BRDials,
                                    this.props.BTDials
                                ],
                                backgroundColor: [
                                    "#d2d93b",
                                    "#dd4417",
                                    "#5191d9",
                                    "#483d28",
                                    "#51aef7",
                                    "#25517b"
                                ]
                            }]
                        }} options={{
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

export default DataViewerBODialChart
import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerBOAppointmentChart extends Component {

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
                    <div className="col-12 card" style={{ padding: '50px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                        <h3 style={{ color: 'whitesmoke', textAlign: 'center' }}><u>Businessowner Appointments Data</u></h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 card" style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                        <Bar data={{
                            labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                            datasets: [{
                                label: "Appointments",
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [
                                    this.props.BPAppts,
                                    this.props.BCAppts,
                                    this.props.BNAppts,
                                    this.props.BSAppts,
                                    this.props.BRAppts,
                                    this.props.BTAppts],
                            }]
                        }} /> </div>
                    <div className="col-12 card" style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
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
                                    this.props.BPAppts,
                                    this.props.BCAppts,
                                    this.props.BNAppts,
                                    this.props.BSAppts,
                                    this.props.BRAppts,
                                    this.props.BTAppts
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
                        }}
                            options={{
                                legend: {
                                    position: 'left',
                                    labels: {
                                        boxWidth: 10
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DataViewerBOAppointmentChart






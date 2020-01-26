import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerAppointmentChart extends Component {

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
                <div className="col-12 card" style={{ textAlign: 'center', padding: '50px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                                    <hr />
                        <h4 style={{ color: 'black', textAlign: 'center' }}>Total Appointments: {this.props.appointments.length} </h4>
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
                                    this.props.CPAppts + this.props.BPAppts,
                                    this.props.CCAppts + this.props.BCAppts,
                                    this.props.CNAppts + this.props.BNAppts,
                                    this.props.CSAppts + this.props.BSAppts,
                                    this.props.CRAppts + this.props.BRAppts,
                                    this.props.CTAppts + this.props.BTAppts],
                            }]
                        }} />
                    </div>
                    <div className="col-12 card" style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                                    <Pie data={{
                            labels: [
                                "Cashflow Prospect",
                                "Business Prospect",
                                "Cashflow Client",
                                "Business Client",
                                "Cashflow Natural Market",
                                "Business Natural Market",
                                "Cashflow Suspect",
                                "Business Suspect",
                                "Cashflow Referral",
                                "Business Referral",
                                "Cashflow Target Market",
                                "Business Target Market"],
                            datasets: [{
                                data: [
                                    this.props.CPAppts,
                                    this.props.BPAppts,
                                    this.props.CCAppts,
                                    this.props.BCAppts,
                                    this.props.CNAppts,
                                    this.props.BNAppts,
                                    this.props.CSAppts,
                                    this.props.BSAppts,
                                    this.props.CRAppts,
                                    this.props.BRAppts,
                                    this.props.CTAppts,
                                    this.props.BTAppts
                                ],
                                backgroundColor: [
                                    "#3ac178",
                                    "#443959",
                                    "#f99b17",
                                    "#a2e505",
                                    "#c9917f",
                                    "#8d044b",
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
                            }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DataViewerAppointmentChart






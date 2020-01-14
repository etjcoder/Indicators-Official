import React, { Component } from "react";
// import API from "../../utils/API";
// import cogoToast from "cogo-toast";
// import Modal from "react-modal";
import { Bar, Pie } from 'react-chartjs-2';



class DataViewerDialChart extends Component {

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
                <div className="col-12 card" style={{ padding: '50px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                    <div className="">
                        <div className="" style={{ textAlign: 'center' }}>
                            <h3><u>Protege: {this.props.activeProtegeData.firstName} {this.props.activeProtegeData.lastName} </u></h3>
                            <hr />
                            <h4>Total Dials: {this.props.dialData.length}</h4>
                        </div>
                    </div>


                    <div className="row">
                    <div className="col-12 card" style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', textAlign: 'left' }}>
                                   <Bar data={{
                                labels: ["Prospects", "Delegated Clients", "Natural Market", "Suspects", "Referrals", "Target Market"],
                                datasets: [{
                                    label: "Dials",
                                    backgroundColor: 'rgb(255, 99, 132)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: [
                                        this.props.CPDials + this.props.BPDials,
                                        this.props.CCDials + this.props.BCDials,
                                        this.props.CNDials + this.props.BNDials,
                                        this.props.CSDials + this.props.BSDials,
                                        this.props.CRDials + this.props.BRDials,
                                        this.props.CTDials + this.props.BTDials],
                                }]
                            }}
                            // options={{
                            //     legend: {
                            //         display: false
                            //     }}}
                            />
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
                                        this.props.CPDials,
                                        this.props.BPDials,
                                        this.props.CCDials,
                                        this.props.BCDials,
                                        this.props.CNDials,
                                        this.props.BNDials,
                                        this.props.CSDials,
                                        this.props.BSDials,
                                        this.props.CRDials,
                                        this.props.BRDials,
                                        this.props.CTDials,
                                        this.props.BTDials
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
            </div>
        )
    }
}

export default DataViewerDialChart
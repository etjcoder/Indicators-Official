import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import Modal from "react-modal"



class SalesItemMentor extends Component {

    state = {
        editModalIsOpen: false,
        saleType: "",
        saleName: "",
        saleSource: "",
        saleNotes: "",
        saleDate: "",
        saleTargetMkt: "",
        saleTagged: "",
        saleCommission: 0,
        salePercentage: 0,
        saleTaggedPercentage: 0,
        saleProduct: ""
    }

    componentDidMount() {
        // console.log("Loaded Appt Item")
        // console.log(this.props)
        this.setState({
            saleType: this.props.saleType,
            saleName: this.props.saleName,
            saleSource: this.props.saleSource,
            saleNotes: this.props.saleNotes,
            saleDate: this.props.saleDate,
            saleTargetMkt: this.props.saleTargetMkt,
            saleCommission: this.props.saleCommission,
            salePercentage: this.props.salePercentage,
            saleTaggedPercentage: this.props.saleTaggedPercentage,
            saleProduct: this.props.saleProduct,
            saleWriter: this.props.protege,
            saleTagged: this.props.saleTagged
        })

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

    ///////////////////////////////////////////////////////////
    /////////// APPOINTMENT DATA INPUT ////////////////////////
    ///////////////////////////////////////////////////////////

    handleSaleUpdate = event => {
        event.preventDefault()

        var salesData = {
            clientType: this.state.saleType,
            saleName: this.state.saleName,
            leadSource: this.state.saleSource,
            saleNotes: this.state.saleNotes,
            saleDate: this.state.saleDate,
            targetMarket: this.state.saleTargetMkt,
            commission: this.state.saleCommission,
            percentageMentor: this.state.salePercentage,
            percentageProtege: this.state.saleTaggedPercentage,
            product: this.state.saleProduct,
            protege: this.props.saleTagged,
            mentor: this.state.saleWriter
        }

        console.log(salesData)

        this.setState({
            editModalIsOpen: false
        })

        API.updateSale(this.props.id, {
            clientType: this.state.saleType,
            saleName: this.state.saleName,
            leadSource: this.state.saleSource,
            saleNotes: this.state.saleNotes,
            saleDate: this.state.saleDate,
            targetMarket: this.state.saleTargetMkt,
            commission: this.state.saleCommission,
            percentageMentor: this.state.salePercentage,
            percentageProtege: this.state.saleTaggedPercentage,
            product: this.state.saleProduct,
            protege: this.props.saleTagged,
            mentor: this.state.saleWriter
        }).then(res =>
            cogoToast.info("Updated Sale!")
        ).catch(err => console.log(err))

    }

    prepEditModal = () => {
        this.setState({
            editModalIsOpen: true
        })
    }

    deleteSale = () => {
        API.deleteSale(this.props.id)
            .then(res => cogoToast.error("You deleted this sale"))
            .catch(err => console.log(err))

        setTimeout(() => {
            cogoToast.loading("Updating Appointments")
            // this.props.rerender()
        }, 500)
    }

    render() {
        return (
            <div>
                <div style={{ height: '300px', padding: '0 10% 0 10%', textAlign: 'left', backgroundColor: 'rgba(176,214,255,0.8)', overflow: 'auto', borderRadius: '5px' }}>
                    <hr></hr>
                    <h4 style={{ textAlign: 'center' }}><u>{this.props.saleName}:</u> <span>
                        <button value={this.props.id} onClick={this.prepEditModal} className="btn btn-info">Edit</button>
                        <button value={this.props.id} onClick={this.deleteSale} className="btn btn-danger">Delete</button>
                    </span></h4>
                    <p>Notes: {this.props.saleNotes}</p>
                    <p>Source: {this.props.saleSource}</p>
                    <p>Commissions: ${this.props.saleCommission}</p>
                    <p>Mentor (You) Percentage: {this.props.salePercentage * 100}% Payout: ${this.props.salePercentage * this.props.saleCommission}</p>
                    <p>Protege Percentage: {this.props.saleTaggedPercentage * 100}% Payout: ${this.props.saleTaggedPercentage * this.props.saleCommission}</p>
                    <hr></hr>
                </div>


                <div className="form-group" id="appt-holder ">
                    <Modal isOpen={this.state.editModalIsOpen} onAfterOpen={this.afterOpenEditModal} onRequestClose={this.closeEditModal} style={this.customStyles} contentLabel="Your Request Viewer">
                        {/* <div className="card"> */}
                        <h3>Sale Logger</h3>
                        <form className="form-group">
                            <label>Type of Sale</label>
                            <select className="custom-select my-1 mr-sm-2" value={this.state.saleType} onChange={this.handleInputChange} name="saleType" type="text" placeholder="Choose Client type">
                                <option value="CPD">Cashflow Prospect</option>
                                <option value="BPD">Businessowner Prospect</option>
                                <option value="CCD">Cashflow Client</option>
                                <option value="BCD">Businessowner Client</option>
                                <option value="CND">Cashflow Natural Mkt</option>
                                <option value="BND">Business Natural Mkt</option>
                            </select>

                            <label>Sale Name:</label>
                            <input id="apptname-input" className="form-control" value={this.state.saleName} onChange={this.handleInputChange} name="saleName" type="text" placeholder="Give your appointment a name!" />

                            <label>Product Sold:</label>
                            <input id="product-sold" className="form-control" value={this.state.saleProduct} onChange={this.handleInputChange} name="saleProduct" type="text" placeholder="Type of product sold" />

                            <label>Date of Sale:</label>
                            <input id="date-input" className="form-control" value={this.state.saleDate} onChange={this.handleInputChange} name="saleDate" type="date" placeholder="Enter date for your appointment" />

                            <label>Protege Tagged</label>
                            {this.props.proteges ? <select id="mentorDropMenu" value={this.props.saleTagged} onChange={this.handleInputChange} name="saleTagged">
                                <option value={"none"}>--Tag Protege--</option>
                                {this.props.proteges.map(protege => (
                                    <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                ))}
                            </select> : null}

                            <label>Sales Commission [only enter numbers]</label>
                            <input id="saleCommission" className="form-control" value={this.state.saleCommission} onChange={this.handleInputChange} name="saleCommission" />

                            <label>Your Percentage [only enter numbers]</label>
                            <input id="salePercentage" className="form-control" value={this.state.salePercentage} onChange={this.handleInputChange} name="salePercentage" />

                            <label>Mentor Percentage [only enter numbers]</label>
                            <input id="taggedPercentage" className="form-control" value={this.state.saleTaggedPercentage} onChange={this.handleInputChange} name="saleTaggedPercentage" />



                            <label>Sales Notes:</label>
                            <input id="note-input" className="form-control" value={this.state.saleNotes} onChange={this.handleInputChange} name="saleNotes" type="text" placeholder="Enter any notes here" />
                            <br />
                            <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleSaleUpdate}>Update Sale</button>

                        </form>
                        {/* </div> */}
                    </Modal>
                </div>

            </div>
        )
    }
}

export default SalesItemMentor
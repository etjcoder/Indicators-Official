import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import "./style.css"



class SalesCreatorMentor extends Component {

    state = {
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
        saleProduct: "",
        showSale: false
    }

    componentDidMount() {
        // console.log("Loaded Appt Item")
        // console.log(this.props)
        // this.setState({
        //     apptname: this.props.apptname,
        //     apptsource: this.props.source,
        //     apptnotes: this.props.notes,
        //     apptdate: this.props.date
        // })

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

    handleSaleSubmit = event => {
        event.preventDefault()
        console.log("Submitting sale under user ID: " + this.props.userID)

        console.log(this.state)

        var SaleData = {
            clientType: this.state.saleType,
            saleName: this.state.saleName,
            saleNotes: this.state.saleNotes,
            saleDate: this.state.saleDate,
            protege: this.state.saleTagged,
            mentor: this.props.userData._id,
            product: this.state.saleProduct,
            commission: parseInt(this.state.saleCommission),
            percentageMentor: parseInt(this.state.salePercentage) / 100,
            percentageProtege: parseInt(this.state.saleTaggedPercentage) / 100,
            leadSource: this.state.saleSource,
            targetMarket: this.state.saleTargetMkt
        }

        console.log(SaleData)


        API.saveSaleMentor({
            clientType: this.state.saleType,
            saleName: this.state.saleName,
            saleNotes: this.state.saleNotes,
            saleDate: this.state.saleDate,
            protege: this.state.saleTagged,
            mentor: this.props.userData._id,
            product: this.state.saleProduct,
            commission: parseInt(this.state.saleCommission),
            percentageMentor: parseInt(this.state.salePercentage) / 100,
            percentageProtege: parseInt(this.state.saleTaggedPercentage) / 100
        }).then(res =>
            cogoToast.info("Saved Sale!")
        ).catch(err => console.log(err))

        // setTimeout(() => {
        //     // cogoToast.loading("Re-loading appointments")
        //     this.props.rerender()
        // }, 1000)

    }

    showSaleForm = () => {
        if (this.state.showSale === false) {
            this.setState({
                showSale: true
            })
        } else {
            this.setState({
                showSale: false
            })
        }
    }





    render() {
        return (
            <div className="card" id="sale-creator-mentor" style={{ textAlign: 'left', backgroundColor: 'rgba(36, 138, 255, 0.8)', padding: '0' }}>
                <h4 style={{ textAlign: 'center', padding: '10%', backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', margin: '20px' }}>Create Sale
                <br />
                    <button className="btn btn-sm btn-outline-dark" onClick={this.showSaleForm}>Show</button></h4>
                <hr />

                {this.state.showSale ?
                    <div style={{ padding: '10px', height: '400px', overflow: 'auto' }}>
                        <form className="form-group">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}>
                                <label>Type:</label>
                                <select className="custom-select my-1 mr-sm-2" className="" value={this.state.saleType} onChange={this.handleInputChange} name="saleType" type="text" placeholder="Choose Client type">
                                    <option value="CPD">Cashflow Prospect</option>
                                    <option value="BPD">Businessowner Prospect</option>
                                    <option value="CCD">Cashflow Client</option>
                                    <option value="BCD">Businessowner Client</option>
                                    <option value="CND">Cashflow Natural Mkt</option>
                                    <option value="BND">Business Natural Mkt</option>
                                </select>
                                <hr />

                                <label>Sale Name:</label>
                                <input id="apptname-input" className="form-control" value={this.state.saleName} onChange={this.handleInputChange} name="saleName" type="text" placeholder="Give your appointment a name!" />

                                <hr />
                                <label>Product Sold:</label>
                                <input id="product-sold" className="form-control" value={this.state.saleProduct} onChange={this.handleInputChange} name="saleProduct" type="text" placeholder="Type of product sold" />

                                <hr />
                                <label>Date of Sale:</label>
                                <input id="date-input" className="form-control" value={this.state.saleDate} onChange={this.handleInputChange} name="saleDate" type="date" placeholder="Enter date for your appointment" />

                                <hr />
                                <label>Protege Tagged</label>
                                {this.props.proteges ? <select id="mentorDropMenu" className="" value={this.state.saleTagged} onChange={this.handleInputChange} name="saleTagged">
                                    <option value={"none"}>--Tag Mentor--</option>
                                    {this.props.proteges.map(protege => (
                                        <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                    ))}
                                </select> : null}

                                <hr />
                                <label>Sales Commission [only enter numbers]</label>
                                <input id="saleCommission" className="form-control" value={this.state.saleCommission} onChange={this.handleInputChange} name="saleCommission" />

                                <hr />
                                <label>Your Percentage [only enter numbers]</label>
                                <input id="salePercentage" className="form-control" value={this.state.salePercentage} onChange={this.handleInputChange} name="salePercentage" />

                                <hr />
                                <label>Mentor Percentage [only enter numbers]</label>
                                <input id="taggedPercentage" className="form-control" value={this.state.saleTaggedPercentage} onChange={this.handleInputChange} name="saleTaggedPercentage" />

                                <hr />
                                <label>Lead Source:</label>
                                {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                                {this.props.userData.sources ? <select id="sourceDropMenu" className="" value={this.state.saleSource} onChange={this.handleInputChange} name="saleSource">
                                    <option value={"none"}>No Lead Source Selected</option>
                                    {this.props.userData.sources.map(source => (
                                        <option value={source}>{source}</option>
                                    ))}
                                </select> : <p style={{ color: '' }}>"No lead sources created yet"</p>}

                                <hr />
                                <label>Target Market:</label>
                                {this.props.userData.targetMarkets ? <select id="sourceDropMenu" className="customDropMentor" value={this.state.saleTargetMkt} onChange={this.handleInputChange} name="saleTargetMkt">
                                    <option value={"none"}>No Target Market Selected</option>
                                    {this.props.userData.targetMarkets.map(target => (
                                        <option value={target}>{target}</option>
                                    ))}
                                </select> : <p style={{ color: '' }}>"No target markets created yet"</p>}

                                <hr />
                                <label>Sales Notes:</label>
                                <input id="note-input" className="form-control" value={this.state.saleNotes} onChange={this.handleInputChange} name="saleNotes" type="text" placeholder="Enter any notes here" />
                                <br />
                                <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleSaleSubmit}>Submit Sale</button>
                            </div>
                        </form>
                    </div>
                    : null}

            </div>
        )

    }
}

export default SalesCreatorMentor
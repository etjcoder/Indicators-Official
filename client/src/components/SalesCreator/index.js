import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import './style.css'



class SalesCreator extends Component {

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
            protege: this.props.userData._id,
            mentor: this.state.saleTagged,
            product: this.state.saleProduct,
            commission: parseInt(this.state.saleCommission),
            percentageProtege: parseInt(this.state.salePercentage) / 100,
            percentageMentor: parseInt(this.state.saleTaggedPercentage) / 100,
            leadSource: this.state.saleSource,
            targetMarket: this.state.saleTargetMkt
        }

        console.log(SaleData)


        API.saveSale({
            clientType: this.state.saleType,
            saleName: this.state.saleName,
            saleNotes: this.state.saleNotes,
            saleDate: this.state.saleDate,
            protege: this.props.userData._id,
            mentor: this.state.saleTagged,
            product: this.state.saleProduct,
            commission: parseInt(this.state.saleCommission),
            percentageProtege: parseInt(this.state.salePercentage) / 100,
            percentageMentor: parseInt(this.state.saleTaggedPercentage) / 100,
            leadSource: this.state.saleSource,
            targetMarket: this.state.saleTargetMkt
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
            <div className="card" id="sale-creator">
                <h4 style={{color: 'whitesmoke'}}>Create Sale <span><button className="btn btn-sm btn-outline-light" onClick={this.showSaleForm}>Show</button></span></h4>
                <hr />
                {this.state.showSale ? 
                <div>
                <form className="form-group">
                    <label><p style={{ color: 'whitesmoke' }}>Type of Sale</p></label>
                    <select className="custom-select my-1 mr-sm-2" value={this.state.saleType} className="customDrop" onChange={this.handleInputChange} name="saleType" type="text" placeholder="Choose Client type">
                        <option value="CPD">Cashflow Prospect</option>
                        <option value="BPD">Businessowner Prospect</option>
                        <option value="CCD">Cashflow Client</option>
                        <option value="BCD">Businessowner Client</option>
                        <option value="CND">Cashflow Natural Mkt</option>
                        <option value="BND">Business Natural Mkt</option>
                    </select>
                    <hr />

                    <label><p style={{ color: 'whitesmoke' }}>Sale Name:</p></label>
                    <input id="apptname-input" className="form-control sale-input" value={this.state.saleName} onChange={this.handleInputChange} name="saleName" type="text" placeholder="Give your Sale a name!" />

                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Product Sold:</p></label>
                    <input id="product-sold" className="form-control sale-input" value={this.state.saleProduct} onChange={this.handleInputChange} name="saleProduct" type="text" placeholder="Type of product sold" />
                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Date of Sale:</p></label>
                    <input id="date-input" className="form-control sale-input" value={this.state.saleDate} onChange={this.handleInputChange} name="saleDate" type="date" placeholder="Enter date for your appointment" />
                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Mentor Tagged</p></label>
                    {this.props.mentors ? <select id="mentorDropMenu" value={this.state.saleTagged} className="customDrop" onChange={this.handleInputChange} name="saleTagged">
                        <option value={"none"}>--Tag Mentor--</option>
                        {this.props.mentors.map(mentor => (
                            <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                        ))}
                    </select> : null}
                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Sales Commission [only enter numbers]</p></label>
                    <input id="saleCommission" className="form-control sale-input" value={this.state.saleCommission} onChange={this.handleInputChange} name="saleCommission" />
                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Your Percentage [only enter numbers]</p></label>
                    <input id="salePercentage" className="form-control sale-input" value={this.state.salePercentage} onChange={this.handleInputChange} name="salePercentage" />
                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Mentor Percentage [only enter numbers]</p></label>
                    <input id="taggedPercentage" className="form-control sale-input" value={this.state.saleTaggedPercentage} onChange={this.handleInputChange} name="saleTaggedPercentage" />

                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Lead Source:</p></label>
                    {/* <input id="source-input" className="form-control" value={this.state.apptsource} onChange={this.handleInputChange} name="apptsource" type="text" placeholder="Source of Lead" /> */}
                    {this.props.userData.sources ? <select id="sourceDropMenu" value={this.state.saleSource} className="customDrop" onChange={this.handleInputChange} name="saleSource">
                        <option value={"none"}>No Lead Source Selected</option>
                        {this.props.userData.sources.map(source => (
                            <option key={source} value={source}>{source}</option>
                        ))}
                    </select> : <p style={{ color: 'whitesmoke' }}>"No lead sources created yet"</p>}

                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Target Market:</p></label>
                    {/* <input id="targetmkt-input" className="form-control" value={this.state.apptTargetMkt} onChange={this.handleInputChange} name="appttargetmkt" type="text" placeholder="Target Market goes here" /> */}
                    {this.props.userData.targetMarkets ? <select id="sourceDropMenu" value={this.state.saleTargetMkt} className="customDrop" onChange={this.handleInputChange} name="saleTargetMkt">
                        <option value={"none"}>No Target Market Selected</option>
                        {this.props.userData.targetMarkets.map(target => (
                            <option key={target} value={target}>{target}</option>
                        ))}
                    </select> : <p style={{ color: 'whitesmoke' }}>"No target markets created yet"</p>}
                    <hr />
                    <label><p style={{ color: 'whitesmoke' }}>Sales Notes:</p></label>
                    <input id="note-input" className="form-control" value={this.state.saleNotes} onChange={this.handleInputChange} name="saleNotes" type="text" placeholder="Enter any notes here" />
                    <br />
                    <button id="appt-input-btn" className="btn-success form-control" onClick={this.handleSaleSubmit}>Submit Sale</button>

                </form>
                </div>
                : null}
            </div>
        )

    }
}

export default SalesCreator
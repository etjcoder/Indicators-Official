import React, { Component } from 'react';
import API from '../../utils/API';
// import API from "../../utils/API";

class DialDataSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numContacts: 0,
            numScheduled: 0,
            date: "",
            parsedDials: ""
        }
    }

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.getContacts(this.props.userID)
        // }, 1300)
        // this.getContacts()

    }


    // getContacts = (id) => {
    //     // var userID = this.props.userID

    //     API.getContacts(id)
    //         .then(res => {
    //             console.log(res.data.length)
    //             this.setState({
    //                 numContacts: res.data.length
    //             })
    //         })
    // }

    getNumContacts = () => {
        var localNumContacts = 0
        for (var i = 0; i < this.props.dialData.length; i++) {
            if (this.props.dialData[i].contact === true) {
                localNumContacts++
            }
        }

        console.log(localNumContacts)
        this.updateContacts(localNumContacts)
    }



    updateContacts = num => {
        this.setState({
            numContacts: num
        })
    }




    render() {
        return (
            <div className="card">
                <h4 style={{ textAlign: 'center' }}><u>Weekly Stats:</u></h4>
                <ul>Dials:{this.props.dialData.length}</ul>
                    <li>Cashflow Prospect Dials: {this.props.CPDials}</li>
                    <li>Business Prospect Dials: {this.props.BPDials}</li>
                    <li>Cashflow Client Dials: {this.props.CCDials}</li>
                    <li>Business Client Dials: {this.props.BCDials}</li>
                    <li>Cashflow Natural Mkt Dials: {this.props.CNDials}</li>
                    <li>Business Natural Mkt Dials: {this.props.BNDials}</li>
                    <li>Cashflow Suspect Dials: {this.props.CSDials}</li>
                    <li>Business Suspect Dials: {this.props.BSDials}</li>
                <br />
                <ul>Contacts: {this.props.contactData.length} </ul>
                    <li>Cashflow Prospect Contacts: {this.props.CPContacts}</li>
                    <li>Business Prospect Contacts: {this.props.BPContacts}</li>
                    <li>Cashflow Client Contacts: {this.props.CCContacts}</li>
                    <li>Business Client Contacts: {this.props.BCContacts}</li>
                    <li>Cashflow Natural Mkt Contacts: {this.props.CNContacts}</li>
                    <li>Business Natural Mkt Contacts: {this.props.BNContacts}</li>
                    <li>Cashflow Suspect Contacts: {this.props.CSContacts}</li>
                    <li>Business Suspect Contacts: {this.props.BSContacts}</li>
                <br />
                <ul>Scheduled: {this.props.apptData.length}</ul>
                    <li>Cashflow Prospect Appts: {this.props.CPAppts}</li>
                    <li>Business Prospect Appts: {this.props.BPAppts}</li>
                    <li>Cashflow Client Appts: {this.props.CCAppts}</li>
                    <li>Business Client Appts: {this.props.BCAppts}</li>
                    <li>Cashflow Natural Mkt Appts: {this.props.CNAppts}</li>
                    <li>Business Natural Mkt Appts: {this.props.BNAppts}</li>
                    <li>Cashflow Suspect Appts: {this.props.CSappts}</li>
                    <li>Business Suspect Appts: {this.props.BSAppts}</li>
                <hr />
                
                <h5 style={{ textAlign: 'cetner' }}><u>Broken down by Area</u></h5>
                <ul>

                </ul>
            </div>

        )
    }

}

export default DialDataSide;
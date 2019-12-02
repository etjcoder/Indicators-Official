import React, { Component } from 'react';
import API from '../../utils/API';

class MentorDataViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numContacts: 0,
            numScheduled: 0,
            date: "",
            parsedDials: ""
        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div className="card">
                <h3><u>Protege: {this.props.protegeData.firstName} {this.props.protegeData.lastName} </u></h3>
                <p>Dials: {this.props.dialData.length}</p>
                <ul>
                    <li>Cashflow Prospect Dials: {this.props.CPDials}</li>
                    <li>Business Prospect Dials: {this.props.BPDials}</li>
                    <li>Cashflow Client Dials: {this.props.CCDials}</li>
                    <li>Business Client Dials: {this.props.BCDials}</li>
                    <li>Cashflow Natural Mkt Dials: {this.props.CNDials}</li>
                    <li>Business Natural Mkt Dials: {this.props.BNDials}</li>
                </ul>
                <br />
                <p>Contacts: {this.props.contactData.length}</p>
                <ul>
                    <li>Cashflow Prospect Contacts: {this.props.CPContacts}</li>
                    <li>Business Prospect Contacts: {this.props.BPContacts}</li>
                    <li>Cashflow Client Contacts: {this.props.CCContacts}</li>
                    <li>Business Client Contacts: {this.props.BCContacts}</li>
                    <li>Cashflow Natural Mkt Contacts: {this.props.CNContacts}</li>
                    <li>Business Natural Mkt Contacts: {this.props.BNContacts}</li>
                </ul>
                <br />
                <p>Scheduled: {this.props.apptData.length}</p>
                <ul>
                <li>Cashflow Prospect Appts: {this.props.CPAppts}</li>
                <li>Business Prospect Appts: {this.props.BPAppts}</li>
                <li>Cashflow Client Appts: {this.props.CCAppts}</li>
                <li>Business Client Appts: {this.props.BCAppts}</li>
                <li>Cashflow Natural Mkt Appts: {this.props.CNAppts}</li>
                <li>Business Natural Mkt Appts: {this.props.BNAppts}</li>
                </ul>

                <hr />
            </div>
        )
    }


}

export default MentorDataViewer
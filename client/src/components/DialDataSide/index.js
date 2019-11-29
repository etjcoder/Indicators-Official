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
                <ul>Contacts: {this.props.contactData.length} </ul>
                <ul>Scheduled: {this.props.apptData.length}</ul>
            </div>
        )
    }

}

export default DialDataSide;
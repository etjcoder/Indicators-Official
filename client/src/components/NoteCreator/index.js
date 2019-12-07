import React, { Component } from 'react';
import API from "../../utils/API";
// import cogoToast from "cogo-toast";

class NoteCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: "",
            noteAuthor: "",
            noteTagged: ""
        }
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleNoteSubmit = event => {
        event.preventDefault()
        console.log("Submitting appointment under user ID: " + this.props.userID)

        var NoteData = {
            note: this.state.note,
            noteAuthor: this.props.userID,
            // noteTagged: this.state.apptnotes,
            completed: false,
        }

        console.log(NoteData)



        // API.saveAppointment(this.props.userID, {
        //     apptname: this.state.apptname,
        //     source: this.state.apptsource,
        //     notes: this.state.apptnotes,
        //     date: this.state.apptdate,
        //     dialer: this.props.userID,
        //     type: this.state.type,
        //     targetMarket: this.state.appttargetmkt
        // }).then(res =>
        //     cogoToast.info("Saved Appt!")
        // ).catch(err => console.log(err))

        // setTimeout(() => {
        //     // cogoToast.loading("Re-loading appointments")
        //     this.props.rerender()
        // }, 1000)

    }



    render() {
        return (
            <div className="note-form">
                <div id="note-welcome">
                    Create a Note.
      </div>
                <form>

                    <input value={this.state.email} onChange={this.handleInputChange} type="text" name="note" className="form-control" id="noteTextInput" aria-describedby="" placeholder="Enter note here" />
         
                    {/* <input value={this.state.protege} onChange={this.handleInputChange} type="text" name="proteges" className="form-control" placeholder="Protege" />
                    {this.props.proteges ? <select id="protegeDropMenu" value={this.state.protege} onChange={this.handleArrayChange} name="protege">
                        {this.props.proteges.map(protege => (
                            <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                        ))}
                    </select> : null} */}
              
                   
                    <button onClick={this.handleNoteSubmit} className="btn btn-outline-info">Create Note</button>
                    {/* <button onClick={this.logOut} style={{ marginTop: '5px', marginLeft: '25px' }} className="btn btn-danger">Logout</button> */}
                </form>
            </div>
        )
    }



}

export default NoteCreator;
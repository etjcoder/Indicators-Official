import React, { Component } from 'react';
import API from "../../utils/API";
import cogoToast from "cogo-toast";

class NoteCreatorMentor extends Component {
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
            noteText: this.state.noteText,
            noteAuthor: this.props.userData._id,
            noteTagged: this.state.noteTagged,
            completed: false,
        }

        console.log(NoteData)



        API.saveNoteMentor(this.props.userData._id, {
            noteText: this.state.noteText,
            noteAuthor: this.props.userData._id,
            noteTagged: this.state.noteTagged,
            noteAuthorName: this.props.userData.firstName + " " + this.props.userData.lastName,
            completed: false
        }).then(res =>
            cogoToast.info("Saved Note!")
        ).catch(err => console.log(err))

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

                    <input value={this.state.noteText} onChange={this.handleInputChange} type="text" name="noteText" className="form-control" id="noteTextInput" aria-describedby="" placeholder="Enter note here" />
         
                    {/* <input value={this.state.protege} onChange={this.handleInputChange} type="text" name="proteges" className="form-control" placeholder="Protege" />
                    {this.props.proteges ? <select id="protegeDropMenu" value={this.state.protege} onChange={this.handleArrayChange} name="protege">
                        {this.props.proteges.map(protege => (
                            <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                        ))}
                    </select> : null} */}
                    {/* <input value={this.state.noteTagged} onChange={this.handleInputChange} type="text" name="noteTagged" className="form-control" placeholder="Tag a Mentor" /> */}
                    {this.props.userData.proteges ? <select id="mentorDropMenu" value={this.state.noteTagged} onChange={this.handleInputChange} name="noteTagged">
                            <option value={"none"}>--Tag Mentor--</option>
                        {this.props.userData.proteges.map(protege => (
                            <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                        ))}    
                    </select> : null }
                    <br />
              
                   
                    <button onClick={this.handleNoteSubmit} className="btn btn-outline-info">Create Note</button>
                    {/* <button onClick={this.logOut} style={{ marginTop: '5px', marginLeft: '25px' }} className="btn btn-danger">Logout</button> */}
                </form>
            </div>
        )
    }



}

export default NoteCreatorMentor;
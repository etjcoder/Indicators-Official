import React, { Component } from 'react';
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import { FormSelect, FormTextarea, Button } from 'shards-react';
import "./style.css"

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
            noteText: this.state.noteText,
            noteAuthor: this.props.userID,
            noteTagged: this.state.noteTagged,
            completed: false,
        }

        console.log(NoteData)



        API.saveNote(this.props.userID, {
            noteText: this.state.noteText,
            noteAuthor: this.props.userID,
            noteAuthorName: this.props.userData.firstName + " " + this.props.userData.lastName,
            noteTagged: this.state.noteTagged,
            completed: false
        }).then(res => {
            cogoToast.info("Saved Note!")
            this.props.rerender();
        }
        ).catch(err => console.log(err))

        // setTimeout(() => {
        //     // cogoToast.loading("Re-loading appointments")
        //     this.props.rerender()
        // }, 1000)

    }



    render() {
        return (
            <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}>

                <div id="note-welcome">
                    <h4>Create a Note</h4>
                </div>
                <form>
                    {this.props.mentors ? <select id="" value={this.state.noteTagged} onChange={this.handleInputChange} name="noteTagged">
                        <option value={"none"}>--Tag Mentor--</option>
                        {this.props.mentors.map(mentor => (
                            <option key={mentor._id} value={mentor._id}>{mentor.firstName} {mentor.lastName}</option>
                        ))}
                    </select> : null}
                    <br />
                    <FormTextarea id="noteTextArea" value={this.state.noteText} onChange={this.handleInputChange} type="text" name="noteText" className="form-control" id="noteTextInput" aria-describedby="" placeholder="Enter note here" />

                    {/* <input value={this.state.protege} onChange={this.handleInputChange} type="text" name="proteges" className="form-control" placeholder="Protege" />
                    {this.props.proteges ? <select id="protegeDropMenu" value={this.state.protege} onChange={this.handleArrayChange} name="protege">
                        {this.props.proteges.map(protege => (
                            <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                        ))}
                    </select> : null} */}
                    {/* <input value={this.state.noteTagged} onChange={this.handleInputChange} type="text" name="noteTagged" className="form-control" placeholder="Tag a Mentor" /> */}



                    <button outline onClick={this.handleNoteSubmit} style={{ float: ' right' }} className="btn btn-outline-dark">Create Note</button>
                    {/* <button onClick={this.logOut} style={{ marginTop: '5px', marginLeft: '25px' }} className="btn btn-danger">Logout</button> */}
                </form>
            </div>
        )
    }



}

export default NoteCreator;
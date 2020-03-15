import React, { Component } from 'react';
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import { FormTextarea } from 'shards-react';

import "./style.css"

class NoteCreatorMentor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: "",
            noteAuthor: "",
            noteTagged: "",
            showNoteForm: true
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
    showNoteForm = () => {
        if (this.state.showNoteForm !== true) {
            this.setState({
                showNoteForm: true
            })
        } else {
            this.setState({
                showNoteForm: false
            })
        }
    }


    render() {
        return (
            // <div style={{backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px' }}>
            // <div className="col-12" style={{ textAlign: 'left', padding: '0' }}>
                <div className="card bg-light" style={{ color: 'black', width: '100%' }}>
                    <div className="card-header">
                        <h4
                            style={{ textAlign: 'center', padding: '10% 10% 0 10%', color: 'black', margin: '' }}
                        >Create Note
                        <br />
                            <span button className="btn btn-sm btn-outline-dark" onClick={this.showNoteForm}>Show</span>

                        </h4>
                    </div>

                    {this.state.showNoteForm ?

                        <div className="card-body" style={{ padding: '10px', overflow: 'auto' }}>

                            <form>
                                <div style={{ color: 'black', padding: '20px' }}>
                                    {this.props.userData.proteges ? <select id="" value={this.state.noteTagged} onChange={this.handleInputChange} name="noteTagged">
                                        <option value={"none"}>--Tag Protege--</option>
                                        {this.props.userData.proteges.map(protege => (
                                            <option key={protege._id} value={protege._id}>{protege.firstName} {protege.lastName}</option>
                                        ))}
                                    </select> : null}
                                    <br />

                                    <FormTextarea 
                                    id="noteTextArea" 
                                    value={this.state.noteText} 
                                    onChange={this.handleInputChange} 
                                    type="text" 
                                    name="noteText"
                                    className="form-control" 
                                    // id="noteTextInput" 
                                    aria-describedby="" 
                                    placeholder="Enter note here" 
                                    />

                                    <button outline onClick={this.handleNoteSubmit} style={{ float: 'right' }} className="btn btn-outline-dark">Create Note</button>
                                </div>
                            </form>

                        </div>

                        : null}
                </div>
            // </div>
        )
    }



}

export default NoteCreatorMentor;
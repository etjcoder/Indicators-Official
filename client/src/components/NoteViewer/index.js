import React, { Component } from 'react';
import API from "../../utils/API";
import cogoToast from "cogo-toast";

class NoteViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteChosen: "",
            noteToDelete: ""
        }
    }

    componentDidMount = () => {
        // console.log("Note Viewer:" + this.props.userData.notes)
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleNoteChange = event => {
        event.preventDefault()
        console.log("Submitting appointment under user ID: " + this.props.userID)

        var NoteData = {
            noteText: this.state.noteText,
            noteAuthor: this.props.userID,
            noteTagged: this.state.noteTagged,
            completed: false,
        }

        console.log(NoteData)



        API.updateNote(this.state.noteID, {
            noteText: this.state.noteText,
            noteAuthor: this.props.userID,
            noteTagged: this.state.noteTagged,
            completed: false
        }).then(res =>
            cogoToast.info("Saved Note!")
        ).catch(err => console.log(err))

        // setTimeout(() => {
        //     // cogoToast.loading("Re-loading appointments")
        //     this.props.rerender()
        // }, 1000)

    }

    completeNote = id => {
        // event.preventDefault()
        console.log("Marked note complete:" + id)

        API.completeNote(id, {
            completed: true
        }).then(res => 
            cogoToast.info("Checked Box")
            ).catch(err => console.log(err))
    }



    render() {
        return (
            <div className="note-card card">
                <div id="note-welcome" div className="card-title">
                    <h4><u>View your Notes</u></h4>
                </div>
                <div className="card-body">

                    {this.props.userData.notes ?
                        
                            this.props.userData.notes.map(note => (
                                <div>
                                    
                                    <p>Note: {note.noteText}</p>
                                    <p style={{fontSize: '8px'}}>Tagged to: {note.noteTagged} Completed: {JSON.stringify(note.completed)} <span> <button value={this.props.id} onClick={() => this.completeNote(note._id)} className="btn btn-success">√</button></span></p>

                                    <hr />
                                </div>
                            ))
                        
                        :  <p>No Notes Yet!</p> }
                </div>
            </div>
        )
    }



}

export default NoteViewer;
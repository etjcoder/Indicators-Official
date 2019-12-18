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

    uncompleteNote = id => {
        console.log("Marked note incomplete: " + id)
        API.uncompleteNote(id, {
            completed: false
        }).then(res => 
            cogoToast.info("Unchecked Box")
        ).catch(err => console.log(err))
    }

    deleteNote = id => {
        console.log("Deleted note: " + id)
        API.deleteNote(id)
            .then(res => {
                cogoToast.error("Deleted Note")
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className="row">
            <div className="col-lg-6">
                <div className="note-card card">
                    <div id="note-welcome" className="card-title">
                        <h4><u>View Notes Your Tagged In</u></h4>
                    </div>
                    <div className="card-body">

                        {this.props.tagNotes ?

                            this.props.tagNotes.map(note => (
                                <div key={note._id}>

                                    <p>Note: {note.noteText}</p>
                                    <p style={{ fontSize: '8px' }}>
                                        Tagged to: {note.noteTagged} 
                                        Completed: {JSON.stringify(note.completed)} 
                                        <span> 
                                              {note.completed ? 
                                                <button value={this.props.id} onClick={() => this.uncompleteNote(note._id)} className="btn btn-success">√</button>
                                                : <button value={this.props.id} onClick={() => this.completeNote(note._id)} className="btn btn-success">O</button> 
                                                }
                                            <button value={this.props.id} onClick={() => this.deleteNote(note._id)} className="btn btn-danger">X</button>
                                        </span></p>

                                    <hr />
                                </div>
                            ))

                            : <p>No Notes Yet!</p>}
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="note-card card">
                    <div id="note-welcome" className="card-title">
                        <h4><u>View Notes You Made</u></h4>
                    </div>
                    <div className="card-body">

                        {this.props.postNotes ?

                            this.props.postNotes.map(note => (
                                <div key={note}>

                                    <p>Note: {note.noteText}</p>
                                    <p style={{ fontSize: '8px' }}>
                                        Tagged to: {note.noteTagged} 
                                        Completed: {JSON.stringify(note.completed)} 
                                        <span> 
                                        {note.completed ? 
                                                <button value={this.props.id} onClick={() => this.uncompleteNote(note._id)} className="btn btn-success">√</button>
                                                : <button value={this.props.id} onClick={() => this.completeNote(note._id)} className="btn btn-success">O</button> 
                                                }
                                                <button value={this.props.id} onClick={() => this.deleteNote(note._id)} className="btn btn-danger">X</button>
                                        </span></p>

                                    <hr />
                                </div>
                            ))

                            : <p>No Notes Yet!</p>}
                    </div>
                </div>
            </div>
        </div>
        )
    }



}

export default NoteViewer;
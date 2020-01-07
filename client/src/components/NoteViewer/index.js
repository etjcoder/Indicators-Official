import React, { Component } from 'react';
import API from "../../utils/API";
import cogoToast from "cogo-toast";
import { Card, CardBody } from 'shards-react';
import './style.css'

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
        }).then(res => {
            cogoToast.info("Saved Note!")
            this.props.rerender()
        }
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
        }).then(res => {
            this.props.rerender()
        }
        ).catch(err => console.log(err))
    }

    uncompleteNote = id => {
        console.log("Marked note incomplete: " + id)
        API.uncompleteNote(id, {
            completed: false
        }).then(res => {
            cogoToast.info("Unchecked Box")
            this.props.rerender()
        }
        ).catch(err => console.log(err))
    }

    deleteNote = id => {
        console.log("Deleted note: " + id)
        API.deleteNote(id)
            .then(res => {
                cogoToast.error("Deleted Note")
                this.props.rerender()
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className="" id="note-view-container-1" style={{ color: 'black', height: 500, overflow: 'auto', borderWidth: '1px', borderColor: 'black', backgroundColor: 'rgba(0,0,0,0.3)' }}>

                <div id="note-viewer-1" style={{ padding: '', width: '', marginBottom: '10px' }}>

                    <div className="">

                        {this.props.taggedNotes ?

                            this.props.taggedNotes.map(note => (
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', margin: 10 }}>
                                    {/* <Card className="note-card" key={note._id}>
                                            <CardBody> */}
                                    <p><span>
                                        <button value={this.props.id} onClick={() => this.deleteNote(note._id)} style={{ float: 'right' }} className="btn btn-outline-danger">X</button>
                                        {note.completed ?
                                            <button value={this.props.id} onClick={() => this.uncompleteNote(note._id)} style={{ float: 'right' }} className="btn btn-outline-dark">√</button>
                                            : <button value={this.props.id} onClick={() => this.completeNote(note._id)} style={{ float: 'right' }} className="btn btn-outline-dark"><i class="far fa-square"></i></button>
                                        }

                                    </span></p>
                                    <p style={{fontSize: this.props.fontSize}}> {note.noteText} </p>
                                    <p style={{ fontSize: '14px' }}>By: {note.noteAuthorName}</p>

                                    <hr />
                                </div>

                            ))

                            : <p style={{ color: 'whitesmoke', textAlign: 'center' }}>No notes yet!</p>}
                    </div>
                </div>



            </div>
        )
    }



}

export default NoteViewer;
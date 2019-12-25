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
            <div className="row" id="note-view-container-1" style={{ color: 'darkslategrey', height: 500, overflow: 'auto' }}>
                {/* <Card>
                    <CardBody> */}
                <div className="" id="note-viewer-1" style={{ padding: '10px', width: '100%', marginBottom: '-20px' }}>
                    <div className="">
                        <div id="note-welcome" className="">
                            {/* <h4 style={{color: 'whitesmoke', textAlign: 'center'}}>Notes you're tagged in:</h4> */}
                        </div>
                        <div className="">

                            {this.props.tagNotes ?

                                this.props.tagNotes.map(note => (
                                    <div style={{ background: 'whitesmoke', marginBottom: '0', padding: '10px' }}>
                                        {/* <Card className="note-card" key={note._id}>
                                            <CardBody> */}
                                        <p>|| {note.noteText} <span>
                                            <button value={this.props.id} onClick={() => this.deleteNote(note._id)} style={{ float: 'right' }} className="btn btn-danger">X</button>
                                            {note.completed ?
                                                <button value={this.props.id} onClick={() => this.uncompleteNote(note._id)} style={{ float: 'right' }} className="btn btn-success">√</button>
                                                : <button value={this.props.id} onClick={() => this.completeNote(note._id)} style={{ float: 'right' }} className="btn btn-success"><i class="far fa-square"></i></button>
                                            }

                                        </span></p>
                                        <p>By: {note.noteAuthorName}</p>
                                        {/* </CardBody>
                                        </Card> */}
                                        <hr />
                                    </div>
                                ))

                                : <p style={{ color: 'whitesmoke', textAlign: 'center' }}>No notes yet!</p>}
                        </div>
                    </div>
                </div>

                <div className="" id="note-viewer-2" style={{ padding: '10px', width: '100%' }}>
                    <div className="">
                        <div id="note-welcome" className="">
                            {/* <h4 style={{color: 'whitesmoke', textAlign: 'center'}}>Notes you wrote:</h4> */}
                        </div>
                        <div className="">

                            {this.props.postNotes ?

                                this.props.postNotes.map(note => (
                                    <div style={{ background: 'whitesmoke', marginBottom: '0', padding: '10px' }}>
                                        {/* <Card className="note-card" key={note}>
                                            <CardBody> */}
                                        <p>||: {note.noteText} <span>
                                            <button value={this.props.id} onClick={() => this.deleteNote(note._id)} style={{ float: 'right' }} className="btn btn-danger">X</button>
                                            {note.completed ?
                                                <button value={this.props.id} onClick={() => this.uncompleteNote(note._id)} style={{ float: 'right' }} className="btn btn-success">√</button>
                                                : <button value={this.props.id} onClick={() => this.completeNote(note._id)} style={{ float: 'right' }} className="btn btn-success"><i class="far fa-square"></i></button>
                                            }

                                        </span></p>
                                        <p>By: {note.noteAuthorName}</p>
                                        {/* </CardBody>
                                        </Card> */}
                                        <hr />
                                    </div>

                                ))

                                : <p style={{ color: 'whitesmoke', textAlign: 'center' }}>No Notes Yet!</p>}
                        </div>
                    </div>
                </div>
                {/* </CardBody>
                </Card> */}
            </div>
        )
    }



}

export default NoteViewer;
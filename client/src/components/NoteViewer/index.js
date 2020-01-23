import React, { Component } from 'react';
import API from "../../utils/API";
import cogoToast from "cogo-toast";
// import { Card, CardBody } from 'shards-react';
import './style.css'
import Moment from 'react-moment';

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
            <div className="" id="note-view-container-1" style={{ color: 'black', height: this.props.height, overflow: 'auto', borderWidth: '1px', borderColor: 'black', backgroundColor: 'rgba(0,0,0,0.1)' }}>

                <div id="note-viewer-1" style={{ padding: '', width: '', marginBottom: '10px' }}>

                    <div className="">

                        {this.props.taggedNotes ?

                            this.props.taggedNotes.map(note => (
                                <div className="card bg-light"
                                    style={{ color: 'black', padding: '0px 0px 0px 0px', borderRadius: '5px', margin: 10 }}
                                >
                                    {/* <Card className="note-card" key={note._id}>
                                            <CardBody> */}

                                    {/* <br /> */}

                                    <div className="card-header" style={{ padding: '5px 5px 0px 5px' }}>
                                        <p><>
                                            <div value={this.props.id} onClick={() => this.deleteNote(note._id)} style={{ float: 'right', height: '5px', width: '20px', color: 'red' }} className="">X</div>
                                            {note.completed ?
                                                <div value={this.props.id} onClick={() => this.uncompleteNote(note._id)} style={{ float: 'right', height: '5px', width: '20px', padding: '0' }} className="">√</div>
                                                : <div value={this.props.id} onClick={() => this.completeNote(note._id)} style={{ float: 'right', height: '5px', width: '20px', padding: '0' }} className=""><i class="far fa-square"></i></div>
                                            }

                                        </></p>
                                        <p style={{ fontSize: '10px' }}>From: {note.noteAuthorName}</p>
                                    </div>
                                    <div className="card-body" style={{ padding: '15px 15px 0px 5px', margin: '0px 0px 0px 0px' }}>
                                        <p style={{ fontSize: this.props.fontSize, textIndent: '50px' }}> {note.noteText} </p>
                                    </div>

                                    <div className="card-footer">
                                        <p style={{ fontSize: '12px' }}>
                                           Posted: <Moment format="MM-DD HH:mm">{note.created_at}</Moment>
                                           <br />
                                            <Moment date={note.created_at} durationFromNow /> ago
                                        </p>
                                    </div>
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
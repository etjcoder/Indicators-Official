import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import cogoToast from "cogo-toast"
import "./style.css";


class SourceCreator extends Component {

    state = {
        source: "",
        userData: "",
        showCreateSource: false
    }

    componentDidMount() {

        // console.log(this.props.sources);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSuccess = () => {
        cogoToast.success("Added new Source!")
        // this.props.rerender();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.saveSourceToProtege(this.props.userData._id, {
            source: this.state.source
        })
            .then(res => this.handleSuccess())
            .catch(err => console.log(err));
    }

    // saveCategory = body => {
    //     // event.preventDefault()

    //     API.saveCategory(body)
    //         .then(res => console.log("You've saved this category to your DB!"))
    //         .catch(err => console.log(err));

    // }

    showCreate = () => {
        if (this.state.showCreateSource === false) {
            this.setState({
                showCreateSource: true
            })
        } else {
            this.setState({
                showCreateSource: false
            })
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '' }}>
                {/* {this.state.showCreateSource ? */}
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <form>
                            <input value={this.state.source} onChange={this.handleInputChange} name="source" placeholder="Create Referrer/Source" />
                        </form>
                        <button style={{}} id="admin-createCategoryBtn" className="btn-outline-dark btn" onClick={this.handleFormSubmit}>Create</button>

                    </div>
                    {/* List of Existing Sources */}
                    {this.state.showExistingSources ?
                        <div>
                            <br />
                            <h6 id="admin-requestHeadCat">Existing Sources: </h6>
                            <div style={{ padding: 15, height: '150px', overflow: 'auto' }}>

                                {this.props.userData.sources.map(source => (
                                    <p key={source}>>> {source}<span><button id="delete-source" className="btn-outline-danger btn btn-sm" style={{ marginRight: '0px', float: 'right', textAlign: 'center' }}>X</button></span></p>
                                ))}
                            </div>
                        </div>
                        : null}
                </div>
                {/* : null} */}
            </div>
        )
    }

}

export default SourceCreator

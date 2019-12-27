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
            <div className="card" id="createSource">
                <h4 id="admin-requestHeadCat" style={{ color: 'whitesmoke' }}>Create Source<span><button className="btn btn-sm btn-outline-light" onClick={this.showCreate}>Show</button></span></h4>
                {this.state.showCreateSource ?
                    <div>
                        <form>
                            <Input value={this.state.source} onChange={this.handleInputChange} name="source" placeholder="Source goes here" />
                            <button id="admin-createCategoryBtn" className="btn-outline-light btn" onClick={this.handleFormSubmit}>Create</button>
                        </form>
                        {/* List of Existing Sources */}
                        <div style={{ color: 'whitesmoke' }}>
                            <br />
                            <h6 id="admin-requestHeadCat">Existing Sources: </h6>
                            <div style={{ padding: 15, height: '150px', overflow: 'auto' }}>

                                {this.props.userData.sources.map(source => (
                                    <p key={source}>>> {source}<span><button id="delete-source" className="btn-outline-danger btn btn-sm" style={{ marginRight: '0px', float: 'right', textAlign: 'center' }}>X</button></span></p>
                                ))}
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }

}

export default SourceCreator

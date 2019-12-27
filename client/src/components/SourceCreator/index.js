import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import cogoToast from "cogo-toast"
import "./style.css";


class SourceCreator extends Component {

    state = {
        source: "",
        userData: ""
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


    render() {
        return (
            <div className="card" id="createSource">
                <form>
                    <h5 id="admin-requestHeadCat">Create Your Source Here</h5>
                    <Input value={this.state.source} onChange={this.handleInputChange} name="source" placeholder="Source goes here" />
                    <button id="admin-createCategoryBtn" onClick={this.handleFormSubmit}>Create this Source</button>
                </form>
                <div> 
                    <br />
                    <h6 id="admin-requestHeadCat">Existing Sources: </h6>
                    {/* {this.props.sources.map(source => (
                        <p key={source}>{source}</p>
                    ))} */}
                </div>
            </div>
        )
    }

}

export default SourceCreator

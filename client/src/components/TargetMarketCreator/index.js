import React, { Component } from "react";
import ReactDom from "react-dom";
import { Input } from "../Form";
import API from "../../utils/API";
import cogoToast from "cogo-toast"
import "./style.css";


class TargetMarketCreator extends Component {

    state = {
        targetMarket: "",
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
        cogoToast.success("Added new Target Market!")
        // this.props.rerender();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.saveTargetMktToProtege(this.props.userData._id, {
            targetMarket: this.state.targetMarket
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
            <div className="card" id="adminCategory">
                <form>
                    <h5 id="admin-requestHeadCat">Create Your Target Market Here</h5>
                    <Input value={this.state.targetMarket} onChange={this.handleInputChange} name="targetMarket" placeholder="New Target Market goes here" />
                    <button id="admin-createCategoryBtn" onClick={this.handleFormSubmit}>Create this Target Market</button>
                </form>
                <div> 
                    <br />
                    <h6 id="admin-requestHeadCat">Existing Target Markets: </h6>
                    {/* {this.props.sources.map(source => (
                        <p key={source}>{source}</p>
                    ))} */}
                </div>
            </div>
        )
    }

}

export default TargetMarketCreator;

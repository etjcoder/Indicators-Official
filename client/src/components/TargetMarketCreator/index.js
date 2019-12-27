import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import cogoToast from "cogo-toast"
import "./style.css";


class TargetMarketCreator extends Component {

    state = {
        targetMarket: "",
        userData: "",
        showTarget: false
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

    showTargetCreate = () => {
        if(this.state.showTarget === false) {
            this.setState({
                showTarget: true
            })
        } else {
            this.setState({
                showTarget: false
            })
        }
    }


    render() {
        return (
            <div className="card" id="createTargetMarket">
                <h4 id="admin-requestHeadCat" style={{ color: 'whitesmoke' }}>Create Target Market<span><button className="btn btn-sm btn-outline-light" onClick={this.showTargetCreate} >Show</button></span></h4>
                {this.state.showTarget ?
                    <div>
                        <form>
                            <Input value={this.state.targetMarket} onChange={this.handleInputChange} name="targetMarket" placeholder="New Target Market goes here" />
                            <button id="admin-createCategoryBtn" className="btn btn-outline-light" onClick={this.handleFormSubmit}>Create</button>
                        </form>
                        <div style={{ color: 'whitesmoke' }}>
                            <br />
                            <h6 id="admin-requestHeadCat">Existing Target Markets: </h6>
                            <div style={{ height: '150px', padding: 15, overflow: 'auto' }}>

                                {this.props.userData.targetMarkets.map(targetMarket => (
                                    <p key={targetMarket}>>> {targetMarket}<span><button className="btn btn-outline-danger btn-sm" style={{ float: 'right' }}>X</button></span></p>
                                ))}

                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }

}

export default TargetMarketCreator;

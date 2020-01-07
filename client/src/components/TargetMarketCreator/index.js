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
        if (this.state.showTarget === false) {
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
            <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: 'black', padding: '20px', borderRadius: '30px', height: '' }}>
                {/* <h4 id="admin-requestHeadCat" style={{ color: 'whitesmoke' }}>Create Target Market<span><button className="btn btn-sm btn-outline-light" onClick={this.showTargetCreate} >Show</button></span></h4>
                {this.state.showTarget ? */}
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <form>
                            <input value={this.state.targetMarket} onChange={this.handleInputChange} name="targetMarket" placeholder="Create Target Industry" />
                        </form>
                        <button id="admin-createCategoryBtn" className="btn btn-outline-dark" onClick={this.handleFormSubmit}>Create</button>

                    </div>
                    {this.state.showExistingTargets ?
                        <div style={{ color: 'whitesmoke' }}>
                            <br />
                            <h6 id="admin-requestHeadCat">Existing Target Markets: </h6>
                            <div style={{ height: '150px', padding: 15, overflow: 'auto' }}>

                                {this.props.userData.targetMarkets.map(targetMarket => (
                                    <p key={targetMarket}>>> {targetMarket}<span><button className="btn btn-outline-danger btn-sm" style={{ float: 'right' }}>X</button></span></p>
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

export default TargetMarketCreator;

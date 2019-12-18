import React, { Component } from "react";
import "./style.css";


class TargetMarketSelector extends Component {

    state = {
        source: "",
        targetMarket: "none"
    }

    componentDidMount() {

        // console.log(this.props.sources);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        setTimeout( () => { this.props.setParentState(this.state.targetMarket) }, 500)
    };



 


    render() {
        return (
            <div className="col-12">
                                <form>
                                    {this.props.userData.targetMarkets ? <select id="sourceDropMenu" value={this.state.targetMarket} onChange={this.handleInputChange} name="targetMarket">
                                            <option value={"none"}>No Target Market Selected</option>
                                        {this.props.userData.targetMarkets.map(target => (
                                            <option value={target}>{target}</option>
                                        ))}
                                    </select> : null}
                                </form>
                            </div>
        )
    }

}

export default TargetMarketSelector

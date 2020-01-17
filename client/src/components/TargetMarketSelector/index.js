import React, { Component } from "react";
import "./style.css";
// import { FormSelect } from 'shards-react'

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

        setTimeout(() => { this.props.setParentState(this.state.targetMarket) }, 500)
    };






    render() {
        return (
            <div>
                <form>
                    <label style={{float: 'left', textAlign: 'left', marginRight: '15px', width: '200px', border: 'none' }}>Target Industry: <span style={{fontSize: 10}}>(optional)</span></label>
                    {this.props.userData.targetMarkets ? <select id="sourceDropMenu" className="" value={this.state.targetMarket} onChange={this.handleInputChange} name="targetMarket">
                        <option value={"none"}>----------------------</option>
                        {this.props.userData.targetMarkets.map(target => (
                            <option key={target} className="chosen-targetmkt" value={target}>{target}</option>
                        ))}
                    </select> : null}
                </form>
            </div>
        )
    }

}

export default TargetMarketSelector

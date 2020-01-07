import React, { Component } from "react";
import "./style.css";
import { FormSelect } from 'shards-react';


class SourceSelector extends Component {

    state = {
        source: "",
        leadSource: "none"
    }

    componentDidMount() {

        // console.log(this.props.sources);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        setTimeout(() => { this.props.setParentState(this.state.leadSource) }, 500)
    };






    render() {
        return (
            <div>
                <form>
                    <p  style={{float: 'left', marginRight: 5}}>Referrer: <span style={{fontSize: 10}}>(optional)</span></p>
                    {this.props.userData.sources ? <select id="" className="" value={this.state.leadSource} onChange={this.handleInputChange} name="leadSource">

                        <option value={"none"}>---------------</option>
                        {this.props.userData.sources.map(source => (
                            <option key={source} value={source}>{source}</option>
                        ))}
                    </select> : null}
                </form>
            </div>
        )
    }

}

export default SourceSelector

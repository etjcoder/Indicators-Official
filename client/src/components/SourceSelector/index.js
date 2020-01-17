import React, { Component } from "react";
import "./style.css";
// import { FormSelect } from 'shards-react';


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
                    <label style={{float: 'left', textAlign: 'left', marginRight: '15px', width: '200px', border: 'none'}}>Referrer: <span style={{fontSize: 10}}>(optional)</span></label>
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

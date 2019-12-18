import React, { Component } from "react";
import "./style.css";


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

        setTimeout( () => { this.props.setParentState(this.state.leadSource) }, 500)
    };



 


    render() {
        return (
            <div className="col-12">
                                <form>
                                    {this.props.userData.sources ? <select id="sourceDropMenu" value={this.state.leadSource} onChange={this.handleInputChange} name="leadSource">
                                            <option value={"none"}>No Lead Source Selected</option>
                                        {this.props.userData.sources.map(source => (
                                            <option value={source}>{source}</option>
                                        ))}
                                    </select> : null}
                                </form>
                            </div>
        )
    }

}

export default SourceSelector

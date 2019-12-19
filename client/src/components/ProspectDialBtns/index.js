import React from "react";
// import Button from '@material-ui/core/Button';


function ProspectDialBtns() {
    return (
        <div>
            <div className="col-md-6">
                <h3><u>Cash-Flow Prospect:</u></h3>
                <button style={{width: '100%', borderRadius: 0 }} color="info" onClick={() => this.handleMissedCallSubmit("CPD")} value="CPD" className="btn btn-primary">Unanswered</button>
                <Button color="warning" onClick={() => this.handleContactCallSubmit("CPD")} value="CPD" className="btn btn-primary">Answered, No appointment</Button>
                <Button color="success" onClick={() => this.handleScheduledApptSubmit("CPD")} value="CPD" className="btn btn-primary">Scheduled Appointment</Button>
            </div>
            <hr />
            <br />
            <div className="col-md-6">
                <h3><u>Business Prospect:</u></h3>
                <Button color="info" onClick={() => this.handleMissedCallSubmit("BPD")} value="BPD" className="btn btn-primary">Unanswered</Button>
                <Button color="warning" onClick={() => this.handleContactCallSubmit("BPD")} value="BPD" className="btn btn-primary">Answered, No appointment</Button>
                <Button color="success" onClick={() => this.handleScheduledApptSubmit("BPD")} value="BPD" className="btn btn-primary">Scheduled Appointment</Button>
            </div>
        </div>
    );
}

export default ProspectDialBtns;


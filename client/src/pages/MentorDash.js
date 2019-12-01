import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
// import Header from "../components/Header";
// import TopBarMentor from "../components/TopBarMentor";
// import NoteViewer from "../components/NoteViewer";
// import NoteInput from "../components/NoteInput";
// import ProtegeProfileContainer from "../components/ProtegeProfileContainer";
//     import ProtegeProfile from "../component/ProtegeProfile"
// import MentorAnalytics from "../components/MentorAnalytics";
//     import AnalyticsMBasic from "../components/AnalyticsMB";
//     import AnalyticsMAdvanced from "../components/AnalyticsMAdvanced";

class MentorDash extends Component {

    state = {
        user: ""
    }

    componentDidMount() {
        console.log("Loaded Mentor Page")
        console.log(this.props.user)
    }

    

    render() {
        return (
            <div>
                <Nav />
                <div className="jumbotron" style={{ height: '500px' }}>
                    <h1>You're on the Mentor Dashboard!</h1>
                    {/* Mentor Header Here */}
                    {/* Top Reader 8/12 Left (Sortable by Proteges, including Past)
                        --Contacts / Dials
                        --Appointments / Sales
                        --Sales / Appointment  
                    */}
                    {/* 
                        Note View 4/12 Right 
                            --Notes to Proteges
                            --Read?
                            --Completed?
                    */}
                    {/* Thin Bar 12/12  --Input Notes / Tag Dialer*/}
                    {/*  Middle Bar 
                        Protege Profiles
                            -Daily Activity
                            -Monthly Activity
                            -YTD Activity
                            -All Time Activity
                    */}
                    {/* 
                        Lower Bar
                        Data Analytics Basic
                            --Search many types of analytics on Personal Team
                        Data Analytics Advanced
                            --Search analytics of firm overall statistics (anonymized) 
                    */}
                </div>
            </div>
        )
    }
}

export default MentorDash
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {

    state = {
        events: ""
    }

    componentDidMount = () => {
        this.sortAppts()
    }

    sortAppts = () => {
        var apptArray = []
        var event = ""
        for (var i = 0; i < this.props.appointments.length; i++) {

            event = {
                title: this.props.appointments[i].apptname,
                date: this.props.appointments[i].date
            }

            apptArray.push(event)

        }

        setTimeout(() => {
            this.setState({
                events: apptArray
            })
        }, 1000)
    }

    render() {
        return (
            <div className="card bg-light">
            <FullCalendar
                defaultView="dayGridMonth" 
                plugins={[dayGridPlugin]}
                // plugins={calendarPlugins}
                weekends={false}
                events={this.state.events}
            />
            </div>
        )
    }

}

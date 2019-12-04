import React, { Component } from 'react';
import FlightsDetail from './FlightsDetail';
import './FlightsList.css'


class FlightsList extends Component {

    render() {

        const flightsNodes = this.props.flights.map((flight) => {
            return (<FlightsDetail key={flight.FlightNo} flight={flight} ></FlightsDetail>)

        })
        return (

            <table>{flightsNodes}
                <thead>
                    <tr>
                        <th Airline> Airline </th>
                        <th> Flight No </th>
                        <th> Date </th>
                        <th> Scheduled </th>
                        <th> Arr/Dep </th>
                        <th> Origin/Destination Airport </th>
                        <th> Status </th>
                        <th OtherInfo> Other Info </th>
                        <th AdditionalInfo> Additional Info </th>
                    </tr>
                </thead>
            </table>


        )
    }
}
export default FlightsList
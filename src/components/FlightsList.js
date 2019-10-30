import React, { Component } from 'react'; 
import FlightsDetail from './FlightsDetail'; 


class FlightsList extends Component { 

    render() {

        const flightsNodes = this.props.flights.map((flight) => {
            return(<FlightsDetail key={flight.FlightNo} flight={flight} ></FlightsDetail>)
            
        } )
        return(
            
            <table>{flightsNodes}
            <thead>
                    <tr>
                        <th> Airline </th>
                        <th> Flight No </th>
                        <th> Date </th>
                        <th> Scheduled </th>
                        <th> Arr/Dep </th>
                        <th> Origin/Destination Airport </th>
                        <th> Status </th>
                        <th> Other Info </th>
                        <th> Additional Info </th>
                    </tr>
                </thead>
            </table>
    

        )
    }
}
export default FlightsList
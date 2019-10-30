import React, { Component } from 'react'; 
import FlightsDetail from './FlightsDetail'; 


class FlightsList extends Component { 

    render() {

        const flightsNodes = this.props.flights.map((flight) => {
            return(<FlightsDetail key={flight.FlightNo} flight={flight} ></FlightsDetail>)
            
        } )
        return(
            <div>
            <p>{flightsNodes}</p>
            </div>

        )
    }
}
export default FlightsList
import React, { Component } from 'react'; 

class FlightsDetail extends Component {
     
    render() {
        if (!this.props.flight) return null; 
        return (
            <div> 
                <p>Flight Destination: {this.props.flight.PortOfCallA}</p>
            </div>
        )

    }

}

export default FlightsDetail
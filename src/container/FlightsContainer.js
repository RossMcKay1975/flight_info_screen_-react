import React, { Component } from 'react'; 
import FlightsList from '../components/FlightsList'

class FlightsContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {
            flights: []
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            fetch('https://kabrudle.edinburghairport.com/api/flights/all')
                .then(res => res.json())
                .then(data => this.setState({flights: data }))
                .catch(err => console.error)
        }, 6000);
    }

    render(){ 
        return(
            < FlightsList flights={this.state.flights} />
        )
    }

}

export default FlightsContainer


        
        
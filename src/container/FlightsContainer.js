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
        fetch('https://kabrudle.edinburghairport.com/api/flights/all')
            .then(res => res.json())
            .then(data => this.setState({flights: data }))
            .catch(err => console.error)

    }

    render(){ 
        return(
            < FlightsList />
        )
    }

}

export default FlightsContainer
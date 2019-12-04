import React, { Component } from 'react';
import './FlightsDetail.css'

class FlightsDetail extends Component {

    render() {
        if (!this.props.flight) return null;
        return (
                <React.Fragment>
                <tbody>
                    <tr>
                        <td><img src={this.props.flight.Image} alt="airline" /></td>
                        <td> {this.props.flight.FlightNo} </td>
                        <td> {this.props.flight.Date} </td>
                        <td> {this.props.flight.Time} </td>
                        <td> {this.props.flight.ArrDep} </td>
                        <td> {this.props.flight.PortOfCallA} </td>
                        <td> {this.props.flight.Status} </td>
                        <td> {this.props.flight.OtherInfo} </td>
                        <td> {this.props.flight.Additional} </td>
                    </tr>
                </tbody>
                </React.Fragment>
        
        )

    }
}


export default FlightsDetail



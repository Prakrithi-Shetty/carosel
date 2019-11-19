
import React from 'react';
import CardBody from './CardBody';
export default class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardBody
            from={this.props.details.from}
            travelDate={this.props.details.travelDate}
            modeOfTravell={this.props.details.modeOfTravell}
            purpose={this.props.details.Purpose}
            pnr={this.props.details.pnr}
            to={this.props.details.to}/>
        </article>
      )
    }
  }
  import React from 'react';
  export default class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">{this.props.travelDate}</p> 
          <h2>{this.props.from}</h2>TO<h2>{this.props.to}</h2>     
          <p className="body-content">Mode Of Travell:{this.props.modeOfTravell}</p>
          <p className="body-content">pnr:{this.props.pnr}</p>
          <p className="body-content">Purpose:{this.props.purpose}</p>    
        </div>
      )
    }
  }
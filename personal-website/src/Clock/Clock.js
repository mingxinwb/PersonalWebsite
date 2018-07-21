import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = null;
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    tick() {
      this.setState({
        now: new Date().getHours() 
        + ":" + new Date().getMinutes()
      });
    }

    render() {
      return (
        <h1 className="clock">{new Date().getHours() < 10 ? 
              "0" + new Date().getHours() : new Date().getHours()}
            :
            {new Date().getMinutes() < 10 ? 
              "0" + new Date().getMinutes() : new Date().getMinutes()}</h1>
      )
    }
  }

export default Clock;
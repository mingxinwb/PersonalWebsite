import React from 'react';
import './Greeting.css';
import ContactAuthor from '../ContactAuthor/ContactAuthor';

class Greeting extends React.Component {
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
        greeting: this.getGreeting(new Date().getHours())
    });
    }

    getGreeting(hh) {
        if (hh>=6 && hh<12) {
            return "morning";
        } else if (hh>=12 && hh<18) {
            return "afternoon";
        } else {
            return "evening";
        }
    }
    render() {
        return (
            <p className="greetings">
              Good {this.getGreeting(new Date().getHours())}, <ContactAuthor />.
            </p>
        )
    }
}

export default Greeting; 
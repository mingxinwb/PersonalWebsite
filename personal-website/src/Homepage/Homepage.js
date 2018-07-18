import React from 'react';
import './Homepage.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

class Homepage extends React.Component {
    render() {
        return (
                <div className="mainContent">
                    <div className="container-inner">
                        <h1>20:20</h1>
                        <p className="Greetings">Good evening, Doris Bai.</p>
                        <p>What would you like to do, today?</p>
                        <i className="material-icons large">expand_more</i>
                        <div className="row">
                            <a className="col s2 offset-s4 
                                waves-effect waves-light btn-large">
                                <i className="material-icons left">dvr</i>
                                Blog
                            </a>
                            <a className="col s2 waves-effect waves-light btn-large">
                                <i className="material-icons right">
                                    chrome_reader_mode
                                </i>
                                Practice
                            </a>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Homepage;
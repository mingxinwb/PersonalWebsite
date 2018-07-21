import React from 'react';
import './ContactAuthor.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

class ContactAuthor extends React.Component {
    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.sidenav');
    //     var instances = M.Sidenav.init(elems, options);
    //   });
    
    //   // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
    //   // var collapsibleElem = document.querySelector('.collapsible');
    //   // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
    
    //   // Or with jQuery
    
    //   $(document).ready(function(){
    //     $('.sidenav').sidenav();
    //   });
    

    render() {
        return (
            <span>
                {/* <nav>Doris Bai</nav>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="images/office.jpg" />
                            </div>
                            <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                Doris Bai
            </span>
        )
    }
}

export default ContactAuthor;
import React, {Component} from 'react';
import friend1 from "../Images/friend1.jpg"
import friend2 from "../Images/friend2.jpg"
import friend3 from "../Images/friend3.jpg"
import friend4 from "../Images/friend4.jpg"
import friend5 from "../Images/friend5.jpg"
import friend6 from "../Images/friend6.jpg"
import friend7 from "../Images/friend7.jpg"
import friend8 from "../Images/friend8.jpg"
import friend9 from "../Images/friend9.jpg"



class DreamTeam extends Component {


    render() {
        return (
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                <img className="col-4 p-1" src={friend1} alt="friend" onClick={() => {
                    this.props.changeHero(3);
                }}/>
                <img className="col-4 p-1" src={friend2} alt="friend" onClick={() => {
                    this.props.changeHero(2);
                }}/>
                <img className="col-4 p-1" src={friend3} alt="friend" onClick={() => {
                    alert("Not available");
                }} />
                <img className="col-4 p-1" src={friend4} alt="friend" onClick={() => {
                    this.props.changeHero(13);
                }}/>
                <img className="col-4 p-1" src={friend5} alt="friend" onClick={() => {
                    this.props.changeHero(14);
                }}/>
                <img className="col-4 p-1" src={friend6} alt="friend" onClick={() => {
                    this.props.changeHero(5);
                }}/>
                <img className="bottom-left col-4 p-1" src={friend7} alt="friend" onClick={() => {
                    alert("Not available");
                }} />
                <img className="col-4 p-1" src={friend8} alt="friend" onClick={() => {
                    this.props.changeHero(10);
                }}/>
                <img className="bottom-right col-4 p-1" src={friend9} alt="friend" onClick={() => {
                    this.props.changeHero(0);
                }}/>
            </section>
        );
    }
}

export default DreamTeam;
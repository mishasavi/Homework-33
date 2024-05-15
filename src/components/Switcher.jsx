import React, {Component} from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";


class Switcher extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { currentPage } = this.props;
        const componentsMap = {
            Home: Home,
            AboutMe: AboutMe,
            StarWars: StarWars,
            Contacts: Contacts,
        }
        const CurrentComponent = componentsMap[currentPage];

        return (
            <div>
                <CurrentComponent hero={this.props.hero} changeHero={this.props.changeHero}/>
            </div>
        );
    }
}

export default Switcher;
import React, {Component} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home",
            hero: 1

        }
    }

    changeHero = (newHero) => {
        this.setState({ hero: newHero });
        this.setState({ currentPage: "AboutMe"});
    };

    changePage = currentPage=>{
        this.setState({currentPage})
    }

    render() {
        return (
            <div>
                <Header changePage={this.changePage} hero={this.state.hero} changeHero={this.changeHero}/>
                <Switcher currentPage={this.state.currentPage} hero={this.state.hero} changeHero={this.changeHero}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
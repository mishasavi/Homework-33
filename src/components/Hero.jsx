import React, {Component} from 'react';
import mainHero from '../Images/main.jpg';

class Hero extends Component {
    render() {
        return (
            <section className="float-start me-3 w-25">
                <img className="w-100" src={mainHero} alt="hero" onClick={() => {
                    this.props.changeHero(1);
                }}/>
            </section>
        );
    }
}

export default Hero;
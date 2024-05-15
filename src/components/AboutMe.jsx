import React, {Component} from 'react';
const BASE_URL = "https://sw-info-api.herokuapp.com";

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,

        }
    }

    componentDidMount() {
        console.log(this.props.hero);
        fetch(`${BASE_URL}/v1/peoples/${this.props.hero}`)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        isLoading: false,
                        character: {
                            name: data.name,
                            eye_color: data.eye_color,
                            gender: data.gender,
                            birth_year: data.birth_year,
                            image: `${BASE_URL}/${data.image}`
                        }
                    }
                )
            })
            .catch (error => {
                console.error('Error fetching character data:', error);
                this.setState({ isLoading: false });
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div className="spinner-border text-info"></div>

            )
        } else {
            return (
                <div>
                    <h1>Name: {this.state.character.name}</h1>
                    <h2>Eye color: {this.state.character.eye_color}</h2>
                    <h3>Gender: {this.state.character.gender}</h3>
                    <h4>Birth year: {this.state.character.birth_year}</h4>
                    <img src={this.state.character.image} alt={this.state.character.name}/>
                </div>
            );
        }
    }
}

export default AboutMe;
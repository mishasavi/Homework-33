import React, {Component} from 'react';

class Header extends Component {


    render() {
        return (
            <header>
                <nav className="fixed-top mt-1 ms-5">
                    <ul className="nav">
                        <li className="nav-item btn btn-danger mx-1" onClick={() => {
                            this.props.changePage("Home");
                           // this.props.changeHero(1); Почему если раскомментировать, перестаёт работать переключение страницы в свитчере?
                        }}>Home</li>
                        <li className="nav-item btn btn-danger mx-1" onClick={() => this.props.changePage("AboutMe")} >About me</li>
                        <li className="nav-item btn btn-danger mx-1" onClick={() => this.props.changePage("StarWars")}>Star Wars</li>
                        <li className="nav-item btn btn-danger mx-1" onClick={() => this.props.changePage("Contacts")}>Contacts</li>
                    </ul>
                </nav>
                <h1 className="text-center py-4"></h1>
            </header>
        );
    }
}

export default Header;
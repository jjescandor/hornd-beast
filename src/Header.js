import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            joke: ''
        }
    }


    addJoke = async () => {
        try {
            const config = { headers: { Accept: 'application/json' } }
            const res = await axios.get('https://icanhazdadjoke.com/', config);
            return res.data.joke;
        } catch (e) {
            return "The website is down :("
        }
    }

    getDadJoke = async () => {
        const jokeText = await this.addJoke()
        this.setState({
            joke: jokeText
        })
        alert(this.state.joke);
    }

    buildBeast = () => {
        this.props.showBuildModal();

    }


    render() {
        return (
            <>
                <h1 style={{ paddingTop: '50px', color: 'white', fontSize: '4rem', WebkitTextStroke: '2px #778899' }}>Horned Beast</h1>
                <Button className='joke' onClick={this.getDadJoke} >Click for Dad Jokes</Button>
                <Button className="createBeast" onClick={this.buildBeast}>Create A Beast</Button>
            </>
        )
    }
}

export default Header;
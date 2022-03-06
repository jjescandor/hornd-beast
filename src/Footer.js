import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Footer extends React.Component {
    constructor(props) {
        super();
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

    render() {
        return (
            <>
                <h3>Created by: JJ Escandor</h3>
            </>
        )
    }
}

export default Footer;
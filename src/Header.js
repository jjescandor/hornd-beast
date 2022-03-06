import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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


    render() {
        return (
            <>
                <h1 style={{ padding: '50px' }}>Horned Beast</h1>
                <Button onClick={this.getDadJoke} style={{ margin: '10px', width: '10rem' }}>Click for Dad Jokes</Button>
            </>
        )
    }
}

export default Header;
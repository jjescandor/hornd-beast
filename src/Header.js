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
                <h1 style={{ paddingTop: '50px', color: 'white', fontSize: '4rem', webkitTextStroke: '2px #778899' }}>Horned Beast</h1>
                <Button onClick={this.getDadJoke} style={{ margin: '15px', width: '10rem', backgroundColor: '#F08080', border: 'none' }}>Click for Dad Jokes</Button>
            </>
        )
    }
}

export default Header;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Beast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            imgUrl: this.props.imgUrl,
            description: this.props.description,
            likes: 0
        }
    }
    likes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
    resetLikes = () => {
        this.setState({
            likes: 0
        })
    }
    render() {
        return (
            <Card style={{ fontWeight: 'bold', padding: '30px' }} >
                <Card.Img onClick={this.likes} src={this.state.imgUrl} alt={this.state.title} style={{ width: '500px', borderRadius: '1%', boxShadow: '0 15px 10px -10px #777', cursor: 'pointer' }} />
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text style={{ color: 'red' }}> {this.state.likes ? `♥️ ${this.state.likes} ♥️ ` : "Please ♥️  me"} </Card.Text>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Button onClick={this.resetLikes}>Reset ♥️</Button>
                </Card.Body>
            </ Card>
        )
    }
}

export default Beast;
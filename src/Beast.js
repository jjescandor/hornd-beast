import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Beast.css';



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
    showDetails = () => {
        this.props.showModal(this.state.title, this.state.description, this.state.imgUrl);
    }
    render() {
        return (
            <Col><Card className='BeastCard' style={{ fontWeight: 'bold', padding: '30px' }} >
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Img onClick={this.likes} src={this.state.imgUrl} alt={this.state.title} />
                <Card.Body>
                    <Card.Text style={{ color: 'red' }}> {this.state.likes ? `♥️ ${this.state.likes} ♥️ ` : "Please ♥️  me"} </Card.Text>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Button onClick={this.resetLikes}>Reset ♥️</Button>
                    <Button onClick={this.showDetails}>Details</Button>
                </Card.Body>
            </ Card>
            </Col>

        )
    }
}

export default Beast;
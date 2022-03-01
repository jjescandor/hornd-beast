import React from 'react';

class Beast extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title}></img>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Beast;
import React from 'react';

class Beast extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgUrl} alt=""></img>
                <h3>{this.props.description}</h3>
            </>
        )
    }
}

export default Beast;
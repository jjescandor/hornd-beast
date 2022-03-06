import React from 'react';
import Beast from './Beast.js';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

    render() {
        return (
            <>
                <Row md={5}>
                    {this.props.beastArr.map((beast, idx) => <Beast key={idx + beast.title} title={beast.title} imgUrl={beast.image_url} description={beast.description} showModal={this.props.showModal} />)}
                </Row>
            </>
        )
    }
}

export default Main;
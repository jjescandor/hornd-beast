import React from 'react';
import Beast from './Beast.js';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

    render() {
        return (
            <>
                <Row xs={1} sm={2} md={4}>
                    {this.props.beastArr.map((beast, idx) => <Beast className='BeastDiv' key={idx + beast.title} title={beast.title} imgUrl={beast.image_url} description={beast.description} horns={beast.horns} showModal={this.props.showModal} />)}
                </Row>
            </>
        )
    }
}

export default Main;
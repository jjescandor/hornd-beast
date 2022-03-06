import React from "react";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img src={this.props.url} />
                            {this.props.description}
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast
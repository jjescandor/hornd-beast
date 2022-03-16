import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CreateBeast.css';

class CreateBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const newBeast = {
            "image_url": evt.target.imgUrl.value,
            "title": evt.target.title.value,
            "description": evt.target.description.value,
            "keyword": evt.target.title.value,
            "horns": evt.target.horns.value
        }
        this.props.buildBeast(newBeast)
        evt.target.reset();
    }


    render() {
        return (
            <>
                <Modal show={this.props.showCreate} onHide={this.props.hideBuildBeastModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Build a Horned Beast</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='buildBeast' onSubmit={this.handleSubmit}>
                            <label htmlFor='title'>Title</label>
                            <input name='title' placeholder='title' type='text'></input>
                            <label htmlFor='description'>Description</label>
                            <input name='description' placeholder='description' type='text'></input>
                            <label htmlFor='horns'>Number of Horns</label>
                            <input name='horns' placeholder='horns' type='text'></input>
                            <label htmlFor='imgUrl'>Image Url</label>
                            <input name='imgUrl' placeholder='imgUrl' type='text'></input>
                            <input type='submit' />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideBuildBeastModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default CreateBeast;
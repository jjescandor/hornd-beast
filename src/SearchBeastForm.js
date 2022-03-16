import React from "react";
import Card from "react-bootstrap/Card";
import './SearchBeastForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchBeastForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            disabled: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHornsChange = this.handleHornsChange.bind(this);
    }

    handleChange = (evt) => {
        evt.preventDefault();
        this.props.search(evt.target.value)

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.search(evt.target.value.toLowerCase())
    }

    handleHornsChange = (evt) => {
        evt.preventDefault();
        evt.target.value !== 'all' ? this.setState({ disabled: true }) : this.setState({ disabled: false });
        this.props.filterHorns(evt.target.value);
    }

    render() {
        return (
            <div className='FormDiv'>
                <Card>
                    <Form onSubmit={this.handleSubmit} style={{ width: '30%' }} >
                        <Form.Control
                            name='text'
                            type="text"
                            placeholder="Search"
                            disabled={this.state.disabled}
                            onChange={this.handleChange}
                        />
                        <Button type="submit" disabled={this.state.disabled}>Search</Button>
                        <Form.Label style={{ padding: '5px' }}>Filter Horns</Form.Label>
                        <Form.Select onChange={this.handleHornsChange} className='formSelect'>
                            <option value='all' >All</option>
                            <option value='1' >1</option>
                            <option value='2' >2</option>
                            <option value='3' >3</option>
                            <option value='100' >100</option>
                        </Form.Select>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default SearchBeastForm;
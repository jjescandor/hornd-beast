import React from "react";
import Card from "react-bootstrap/Card";
import './SearchBeastForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchBeastForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            joke: '',
            disabled: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHornsChange = this.handleHornsChange.bind(this);
    }

    handleChange = (evt) => {
        evt.preventDefault();
        this.setState({
            search: evt.target.value
        });
        this.props.search(this.state.search)

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.search(evt.target.value)
    }

    handleHornsChange = (evt) => {
        evt.preventDefault();
        let input = evt.target.value;
        console.log(input.length);
        input.length === 1 ? this.setState({ disabled: true }) : this.setState({ disabled: false });
        this.props.filterHorns(input);
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
                        </Form.Select>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default SearchBeastForm;
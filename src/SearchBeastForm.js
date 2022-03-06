import React from "react";
import Card from "react-bootstrap/Card";
import './SearchBeastForm.css';
import Button from 'react-bootstrap/Button';

class SearchBeastForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            joke: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (evt) => {
        this.setState({
            search: evt.target.value
        });

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({
            search: evt.target.value
        });
        this.props.search(this.state.search)
    }

    render() {
        return (
            <div className='FormDiv'>
                <Card>
                    <form onSubmit={this.handleSubmit} className="form-inline" style={{ width: '20%' }} >
                        <input
                            name='text'
                            type="text"
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                        <Button type="submit">Search</Button>
                    </form>
                </Card>
            </div>
        )
    }
}


export default SearchBeastForm;
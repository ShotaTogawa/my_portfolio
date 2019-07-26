import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import api from '../../../api';


class PopupReadPageFrom extends Component {

    state = {
        read_pages: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const id = this.props.book._id;
        const read_pages = this.state.read_pages;
        console.log(id)
        api.patch(`/book/${id}/read_pages`, {read_pages})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} size="mini" />} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Read pages</label>
                        <input
                            type="text"
                            className="form-control"
                            name="read_pages"
                            placeholder="Enter pages you read"
                            onChange={this.handleChange}
                        />
                    </div>
                    <Button compact color="blue" size="mini">Update</Button>
                </form>
            </Popup>
        );
    }
}

export default PopupReadPageFrom;


import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { updateReadPages } from '../../../actions';
import { connect } from 'react-redux';

class PopupReadPageFrom extends Component {

    state = {
        read_pages: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = async() => {
        const id = this.props.book._id;
        const read_pages = this.state.read_pages;
        this.props.updateReadPages(id, {read_pages});
    }
l

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

export default connect(null, {updateReadPages})(PopupReadPageFrom);


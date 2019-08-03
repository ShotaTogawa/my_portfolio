import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
// import api from '../../../api';
// import history from '../../../history';
import { deleteMemo } from '../../../actions';
import { connect } from 'react-redux';


class PopupDelete extends Component {

    handleSubmit = async() => {
        const book_id = this.props.memo.book_id
        const memo_id = this.props.memo._id

        // await api.delete(`/book/${book_id}/${memo_id}`)
        await this.props.deleteMemo(book_id, memo_id);
        }

    render() {
        return (
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} size={this.props.size} />} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Are you sure?</label>
                    </div>
                    <Button content='Delete' icon='check' labelPosition='left' color="red" size="mini" />
                </form>
            </Popup>
        );
    }
}

export default connect(null, {deleteMemo})(PopupDelete);


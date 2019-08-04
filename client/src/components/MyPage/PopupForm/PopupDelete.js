import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { deleteMemo, fetchMemo } from '../../../actions';
import { connect } from 'react-redux';


class PopupDelete extends Component {
    componentDidMount() {
        const book_id = this.props.memo.book_id
        this.props.fetchMemo(book_id);
    }

    handleClick = () => {
        const memo_id = this.props.memo._id
        const book_id = this.props.memo.book_id
        this.props.deleteMemo(book_id, memo_id);
    }

    render() {
        return (
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} size={this.props.size} />} flowing hoverable>
                <div>
                    <label htmlFor="title">Are you sure?</label>
                </div>
                <Button content='Delete' icon='check' labelPosition='left' color="red" size="mini" onClick={this.handleClick}/>
            </Popup>
        );
    }
}




export default connect(null, {deleteMemo, fetchMemo})(PopupDelete);


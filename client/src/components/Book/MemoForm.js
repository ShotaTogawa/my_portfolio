import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import api from '../../api';
import { createMemo } from '../../actions';
import { connect } from 'react-redux';


class MemoForm extends Component {

    state = {
        memo: ""
    }

    handleChange = (event) => {
        this.setState({memo: event.target.value})
    }

    handleSubmit = async () => {
        if(this.state.memo) {
            this.props.createMemo(this.props.book._id, this.state.memo);
            // await api
            //     .post(`book/${this.props.book._id}/memo`,{
            //         book_id: this.props.book._id,
            //         owner: this.props.book.owner,
            //         memo: this.state.memo
            //     })
            //     .then(response => console.log(response))
            //     .catch(err => console.log(err))
            // 
        }
    }

    render() {
        return (
            <Form reply onSubmit={this.handleSubmit}>
                <Form.TextArea onChange={this.handleChange} />
                <Button content='Add Memo' labelPosition='left' icon='edit' primary style={{marginBottom: "50px"}}/>
            </Form>
        );
    }
}

export default connect(null, {createMemo})(MemoForm);
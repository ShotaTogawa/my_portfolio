import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class MemoForm extends Component {
    render() {
        return (
            <Form reply>
                <Form.TextArea />
                <Button content='Add Comment' labelPosition='left' icon='edit' primary />
            </Form>
        );
    }
}

export default MemoForm;
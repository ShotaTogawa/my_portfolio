import React, { Component } from 'react';
import MemoForm from './MemoForm';
import { Comment } from 'semantic-ui-react';


class Memo extends Component {
    render() {
        return (
            <Comment.Group>
            <Comment>
            <Comment.Content>
                <Comment.Text>
                <p>
                    The hours, minutes and seconds stand as visible reminders that your effort put them all
                    there.
                </p>
                </Comment.Text>
                <Comment.Metadata>
                <div>1 day ago</div>
                </Comment.Metadata>
            </Comment.Content>
            </Comment>

        </Comment.Group>
        );
    }
}

export default Memo;
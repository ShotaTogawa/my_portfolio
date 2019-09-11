import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import PopupDelete from '../MyPage/PopupForm/PopupDelete';
import moment from 'moment';


class Memo extends Component {

    renderList(){
        return this.props.memos.filter((memo) => memo.book_id === this.props.book._id)
        .filter((memo, i, self) => (self.findIndex(memo2 => memo2._id === memo._id) === i))
        .map((memo, i) => {
            return (
                <Comment key={i}>
                    <Comment.Content>
                        <Comment.Text>
                        <p>{memo.memo}</p>
                        </Comment.Text>
                        <Comment.Metadata>
                        <div>{moment(memo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        <PopupDelete icon='delete' color="red" size="mini" memo={memo._id} />
                        </Comment.Metadata>
                    </Comment.Content>
                </Comment>
            )
        })
    }

    render() {

        return (
            <Comment.Group>
                {this.renderList()}
            </Comment.Group>
        );
    }
}


export default Memo;
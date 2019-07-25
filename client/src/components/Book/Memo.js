import React, { Component } from 'react';
import { Comment, Button } from 'semantic-ui-react';
import PopupDelete from '../MyPage/PopupForm/PopupDelete';
import moment from 'moment';



class Memo extends Component {

    renderList(){
        return this.props.memos.map((memo, i) => {
            return (
                <Comment key={i}>
                    <Comment.Content>
                        <Comment.Text>
                        <p>{memo.memo}</p>
                        </Comment.Text>
                        <Comment.Metadata>
                        <div>{moment(memo.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        <Button circular icon='edit outline' color="teal" size="mini"/>
                        <PopupDelete icon='delete' color="red" size="mini" />
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
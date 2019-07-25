import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
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
                        <div>{moment(memo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        </Comment.Metadata>
                    </Comment.Content>
                </Comment>
            )
        })
      }

    render() {
        console.log(this.props.memos)
        return (
            <Comment.Group>
                {this.renderList()}
            </Comment.Group>
        );
    }
}


export default Memo;
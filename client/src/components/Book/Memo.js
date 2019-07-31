import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import PopupDelete from '../MyPage/PopupForm/PopupDelete';
import moment from 'moment';
import { fetchMemo } from '../../actions';
import { connect } from 'react-redux';


class Memo extends Component {

    componentDidMount() {
        this.props.fetchMemo(this.props.book._id);
    }

    renderList(){
        // const id = this.props.book._id;
        return this.props.memos.map((memo, i) => {
            return (
                <Comment key={i}>
                    <Comment.Content>
                        <Comment.Text>
                        <p>{memo.memo}</p>
                        </Comment.Text>
                        <Comment.Metadata>
                        <div>{moment(memo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        {/* <Button circular icon='edit outline' color="teal" size="mini"/> */}
                        <PopupDelete icon='delete' color="red" size="mini" memo={memo}/>
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


const mapStateToProps = (state) => {
    return {
        memos: Object.values(state.memo)
    }
}

export default connect(mapStateToProps, { fetchMemo })(Memo);
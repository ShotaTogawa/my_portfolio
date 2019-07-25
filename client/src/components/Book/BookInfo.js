import React, { Component } from 'react';
import { Item, Image, Divider, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import moment from 'moment';


class BookInfo extends Component {

    showStatus = (status) => {
        if(status === 0) {
            return 'Before Reading'
        } else if (status === 1){
            return 'Reading'
        } else {
            return 'Read';
        }
    }

    checkNullForDate = (date) => {
        if(date === null) {
            return '';
        }
        return moment(date).format('YYYY-MM-DD');
    }

    render() {
        return (
            <Item>
                {this.props.book.imageUrl
                ? <Image src={this.props.book.imageUrl} size='small' />
                : <Image src={'https://firebasestorage.googleapis.com/v0/b/my-portfolio-e7b33.appspot.com/o/books%2Fimages%2Fdefault%2Fimage.png?alt=media&token=76580ae4-2f31-45ac-96bc-bd141697e049'} size='small' />
                }
                <Divider hidden />
                <List>
                    <List.Item>
                        <List.Content >
                            title
                            <List.Header>{this.props.book.title}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Author
                            <List.Header>{this.props.book.author}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content>
                            Genre
                            <List.Header>{this.props.book.genre}</List.Header>
                    </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Status
                            <List.Header>{this.showStatus(this.props.book.status)}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Registered Date
                            <List.Header>{moment(this.props.book.createdAt).format('YYYY-MM-DD')}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Expected Start Date
                            <List.Header>{this.checkNullForDate(this.props.book.ScheduledStartDate)}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Expected Finish Date
                            <List.Header>{this.checkNullForDate(this.props.book.ScheduledEndDate)}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Finish Date
                            <List.Header>追記予定</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
                <List horizontal>
                    <List.Item><Link to={`/book_detail/update/${this.props.book._id}`}>Edit</Link></List.Item>
                    <List.Item><Link to={`/book_detail/delete/${this.props.book._id}`}>Delete</Link></List.Item>
                </List>
            </Item>
        );
    }
}


export default BookInfo;


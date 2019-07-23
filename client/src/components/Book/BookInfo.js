import React, { Component } from 'react';
import { Item, Image, Divider, List } from 'semantic-ui-react';


class BookInfo extends Component {
    
    render() {
        return (
            <Item>
            <Image src={this.props.book.imageUrl} size='small' />
                <Divider hidden />
                <List>
                    <List.Item>
                        <List.Content>
                            title
                            <List.Header>{this.props.book.title}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Progress
                            <List.Header>{this.props.book.page_nums}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content>
                            Status
                            <List.Header>Paulo</List.Header>
                    </List.Content>
                    </List.Item>
                </List>
            </Item>
        );
    }
}


export default BookInfo;


import React from 'react'
import { Item, Image, Divider, List } from 'semantic-ui-react';

const BookInfo = () => {
    return (
        <Item>
            <Image src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-e7b33.appspot.com/o/books%2Fimages%2F006f92c8-7983-4ef1-beb9-00b50e597358.jpg?alt=media&token=ec8689e9-4c61-4e1a-a5b6-fef350783126" size='small' />
            <Divider hidden />
            <List>
                <List.Item>
                    <List.Content>
                        title
                        <List.Header>Snickerdoodle</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        Progress
                        <List.Header>Poodle</List.Header>
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
    )
}

export default BookInfo

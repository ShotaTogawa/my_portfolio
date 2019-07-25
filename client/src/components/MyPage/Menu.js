import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Menu extends Component {

    render() {
        return (
            <div>
                <List>
                    <List.Item>
                    <List.Icon name='user circle' />
                    <List.Content>
                        <List.Header>User</List.Header>
                        <List.List>
                            <List.Item>
                            <List.Content>
                                <List.Header>Profile</List.Header>
                            </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Content>
                    </List.Item>
                </List>
                <List>
                    <List.Item>
                    <List.Icon name='book' />
                    <List.Content>
                        <List.Header>Book</List.Header>
                        <List.List>
                        <List.Item>
                            <List.Content>
                                <List.Header><Link to={""}>Book List</Link></List.Header>
                            </List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Content>
                                <List.Header><Link to={"/book"} user={this.props.currentUser}>Register</Link></List.Header>
                            </List.Content>
                            </List.Item>
                            {/* <List.Item>
                            <List.Content>
                                <List.Header><Link to={"/book_detail"}>Timeline</Link></List.Header>
                            </List.Content>
                            </List.Item> */}
                        </List.List>
                    </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default Menu;
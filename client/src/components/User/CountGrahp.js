import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class CountGrahp extends Component {

    render() {
        const counter = this.props.counter;
        return (
            <Table celled compact>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Genre</Table.HeaderCell>
                    <Table.HeaderCell>Numbers</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Arts
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Arts}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Biographies
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Biographies}
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            Business
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Business}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Computer Technology
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter["Computer Technology"]}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Fitness
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Fitness}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Health
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Health}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Literature
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Literature}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Novel
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Novel}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Politics
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Politics}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Religion
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Religion}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Science
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Science}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Self-Help
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter["Self-Help"]}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Social Science
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter["Social Science"]}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Others
                        </Table.Cell>
                        <Table.Cell singleLine>
                            {counter.Others}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default CountGrahp;
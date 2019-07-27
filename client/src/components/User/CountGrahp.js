import React, { Component } from 'react';
import { Step, Icon } from 'semantic-ui-react';

class CountGrahp extends Component {
    renderGraph() {
        return (
        <Step.Group vertical>
            <Step completed>
            <Icon name='truck' />
            <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
            </Step>
            <Step completed>
            <Icon name='truck' />
            <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
            </Step>
            <Step completed>
            <Icon name='truck' />
            <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
            </Step>
        </Step.Group>
        )
    }
    render() {
        return (
            <div>
                {this.renderGraph()}
            </div>
        );
    }
}

export default CountGrahp;
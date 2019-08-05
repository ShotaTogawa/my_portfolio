import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateEvaluation } from '../../../actions';

class PopupEvaluation extends Component {

    state = {
        evaluation: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = async() => {
        const id = this.props.book._id;
        const evaluation = this.state.evaluation;

        await this.props.updateEvaluation(id, {evaluation})
    }

    render() {
        return (
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} size="mini"/>} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="genre">Evaluation</label>
                            <select className="form-control" value={this.state.value} name="evaluation" onChange={this.handleChange}>
                                <option>Evaluation</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <Button compact color="blue" size="mini">Update</Button>
                </form>
            </Popup>
        );
    }
}

export default connect(null, {updateEvaluation})(PopupEvaluation);


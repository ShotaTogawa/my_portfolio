import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import { updateStartDate } from '../../../actions';
import { connect } from 'react-redux';


class PopupStartDateForm extends Component {

    state = {
        date: "",
    }

    setDate = (date) => {
        this.setState({date});
    }

    handleSubmit = async() => {
        const id = this.props.book._id;
        const date = this.state.date;
        await this.props.updateStartDate(id, {startDate: date, status: "reading"});
    }

    render() {
        return (
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} size="mini"/>} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                    <div style={{marginBottom: "10px"}}>
                        <label>Pages you read</label>
                        <Calendar
                            onChange={this.setDate}
                        />
                    </div>
                    <Button compact color="blue" size="mini">Update</Button>
                </form>
            </Popup>
        );
    }
}

export default connect(null,{ updateStartDate })(PopupStartDateForm);


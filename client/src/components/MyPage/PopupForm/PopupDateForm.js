import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import api from '../../../api';
import history from '../../../history';


class PopupDateForm extends Component {

    state = {
        date: "",
    }

    setDate = (date) => {
        this.setState({date});
    }

    handleSubmit = async() => {
        const id = this.props.book._id;
        const date = this.state.date;

        if(this.props.book.status === "beforeReading") {
            api.patch(`/book/${id}/startdate`, {startDate: date, status: "reading"})
            .then(() => history.push('/'))
            .catch(err => console.log(err))
        } else {
            api.patch(`/book/${id}/enddate`, {endDate: date, status: "read"})
            .then(() => history.push('/'))
            .catch(err => console.log(err))
        }

        history.push('/');
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

export default PopupDateForm;


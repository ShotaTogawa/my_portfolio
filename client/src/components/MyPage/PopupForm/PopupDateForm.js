import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import api from '../../../api';


class PopupDateForm extends Component {

    state = {
        date: "",
    }

    setDate = (date) => {
        this.setState({date});
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const id = this.props.book._id;
        const date = this.state.date;

        if(this.props.book.status === 0) {
            api.patch(`/book/${id}/startdate`, {startDate: date, status: 1})
            .then(response => console.log(response))
            .catch(err => console.log(err))
        } else {
            api.patch(`/book/${id}/enddate`, {endDate: date, status: 2})
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }

        //if (this.isFormValid()){
            // await this.sendFile();
            // await api
            // .post('/book', {
            //     title,
            //     genre,
            //     author,
            //     page_nums,
            //     ScheduledStartDate,
            //     ScheduledEndDate,
            //     imageUrl,
            //     owner: this.props.currentUser.uid
            // })
            // .then(response => console.log(response))
            // .catch(err => console.log(err))
        //}
        // history.push('/');
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


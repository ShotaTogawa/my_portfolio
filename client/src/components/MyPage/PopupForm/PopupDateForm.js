import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Calendar from 'react-calendar';


class PopupDateForm extends Component {

    state = {
        date: ""
    }

    setDate = (date) => {
        this.setState({date});
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        console.log(this.state);

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
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} />} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Expected day to start</label>
                        <Calendar
                            onChange={this.setDate}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Popup>
        );
    }
}

export default PopupDateForm;


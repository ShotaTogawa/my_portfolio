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


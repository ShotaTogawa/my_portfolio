import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';


class PopupDelete extends Component {

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
            <Popup trigger={<Button circular icon={this.props.icon} color={this.props.color} size={this.props.size} />} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Are you sure?</label>
                    </div>
                    <Button content='Delete' icon='check' labelPosition='left' color="red" size="mini"/>
                </form>
            </Popup>
        );
    }
}

export default PopupDelete;


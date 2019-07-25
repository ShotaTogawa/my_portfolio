import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';


class PopupReadPageFrom extends Component {

    state = {
        pages: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
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
                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="pages"
                            placeholder="Enter pages you read"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Popup>
        );
    }
}

export default PopupReadPageFrom;


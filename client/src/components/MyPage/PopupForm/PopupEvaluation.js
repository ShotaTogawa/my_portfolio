import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';


class PopupEvaluation extends Component {

    state = {
        star: ""
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
                            <label htmlFor="genre">Evaluation</label>
                            <select className="form-control" value={this.state.value} name="star" onChange={this.handleChange}>
                                <option>Evaluation</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Popup>
        );
    }
}

export default PopupEvaluation;


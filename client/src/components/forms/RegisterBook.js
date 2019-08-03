import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import api from '../../api';
import history from '../../history';
import { createBook } from '../../actions';
import { Message } from 'semantic-ui-react';


class RegisterBook extends Component {

    state = {
        title: "",
        genre: "",
        page_nums: "",
        author: '',
        ScheduledEndDate: "",
        ScheduledStartDate: "",
        errors: [],
        openCalendar: false,
        owner: this.props.currentUser
    }

    /**
     * add file info to state
     * @function
     * @param event
     */
    addFile = event => {
        const file = event.target.files[0];
        if(file) {
            this.setState({file})
        }
    };

    /**
     * check whether this.state.authoroized is included in mime types
     * @function
     * @params filename
     */
    isAuthorized = filename => {
        return this.state.authorized.includes(filename);
    }

    isFormEmpty = ({title, genre}) => {
        return(
        !title.length ||
        !genre.length
        );
     }

     isFormValid = () => {
        let errors = [];
        let error;
        const today = new Date();
        if (this.isFormEmpty(this.state)) {
            error = { message: "Please fill in title and genre Fields"};
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        if (this.state.ScheduledStartDate.length) {
                if (today <= this.state.ScheduledStartDate ) {
                error = { message: "Scheduled start date must be greater equal than today"};
                this.setState({ errors: errors.concat(error)});
                return false;
            }
        }
        if (this.state.ScheduledEndDate.length){
            if(this.state.ScheduledStartDate <= this.state.ScheduledEndDate){
                error = { message: "Scheduled end date must be greater equal than Scheduled start date"};
                this.setState({ errors: errors.concat(error)});
                return false;
            }
        }
        return true;
    }

    /**
     * set user input to state
     * @function
     * @param event
     */
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    handleSubmit = async(event) => {
        event.preventDefault();
        const {title, genre, author, page_nums, ScheduledStartDate, ScheduledEndDate} = this.state;

        if (this.isFormValid()){
            await this.props.createBook({
                title,
                genre,
                author,
                page_nums,
                ScheduledStartDate,
                ScheduledEndDate,
                owner: this.props.currentUser.uid
            })
        }
    }

    displayErrors = errors => errors.map((error, i) => <small key={i} className="form-text alert alert-danger" >{error.message}</small>)


    openCalendar = () => {
        this.setState({openCalendar: true})
    }

    setScheduledStartDate = (ScheduledStartDate) => {
        this.setState({ScheduledStartDate});
    }

    setScheduledEndDate = (ScheduledEndDate) => {
        this.setState({ScheduledEndDate});
    }


    render() {
        console.log(this.state.errors)
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm align-self-center">
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Book Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        {/* title */}
                        <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Enter your book title"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">author</label>
                            <input
                                type="text"
                                className="form-control"
                                name="author"
                                placeholder="Enter an author name of this book"
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* genre */}
                        <div className="form-group">
                            <label htmlFor="genre">Genre</label>
                            <select className="form-control" value={this.state.value} name="genre" onChange={this.handleChange}>
                                <option>Select Genre</option>
                                <option value="Arts">Arts</option>
                                <option value="Biographies">Biographies</option>
                                <option value="Business">Business</option>
                                <option value="Computer Technology">Computers Technology</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Health">Health</option>
                                <option value="Literature">Literature</option>
                                <option value="Novel">Novel</option>
                                <option value="Politics">Politics</option>
                                <option value="Religion">Religion</option>
                                <option value="Science">Science</option>
                                <option value="Self-Help">Self-Help</option>
                                <option value="Social Science">Social Science</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        {/* image */}
                        {/* <div className="form-group">
                            <label htmlFor="file">Example file input</label>
                            <input type="file" className="form-control-file" name="file" onChange={this.addFile} />
                        </div> */}
                        {/* pages */}
                        <div className="form-group">
                            <label htmlFor="page_nums">The book's number of pages</label>
                            <input
                                type="text"
                                className="form-control"
                                name="page_nums"
                                placeholder="Enter the number of pages of the book"
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* 開始予定日 */}
                        <div className="form-group">
                            <p>Expected Reading Start and Finised Date</p>
                            {this.state.openCalendar ?
                            <div>
                                <label>Expected day to start</label>
                                <Calendar
                                    onChange={this.setScheduledStartDate}
                                />
                            </div>
                            :
                            <div>
                                <button onClick={this.openCalendar} className="btn btn-outline-secondary btn-sm">Open calendar</button>
                            </div>
                            }
                        </div>
                        {/* 読了予定日 */}
                        <div className="form-group">
                            {this.state.openCalendar ?
                            <div>
                                <label>Expected day to fishih</label>
                                <Calendar
                                    onChange={this.setScheduledEndDate}
                                />
                            </div>
                            : ''
                            }
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {this.state.errors.length > 0 && (
                        <Message error>
                        <h3>Error</h3>
                        {this.displayErrors(this.state.errors)}
                        </Message>
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps, {createBook})(RegisterBook);
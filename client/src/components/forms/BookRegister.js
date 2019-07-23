import React, { Component } from 'react';
import Calendar from 'react-calendar';
import firebase from '../../firebase';
import mime from 'mime-types';
import uuidv4 from 'uuidv4';
import { connect } from 'react-redux';
import api from '../../api';
import history from '../../history';

class BookRegister extends Component {

    state = {
        title: "",
        genre: "",
        page_nums: "",
        file: null,
        author: '',
        ScheduledEndDate: "",
        ScheduledStartDate: "",
        storageRef: firebase.storage().ref(),
        authorized: ["image/jpeg", "image/png", "image/jpg"],
        uploadTask: null,
        errors: [],
        imageUrl: "",
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
        console.log(filename + ' from sendfile')
        return this.state.authorized.includes(filename);
    }

    uploadFile = async(file, metadata) => {
        const path = `books/images/${uuidv4()}.jpg`;
        await this.setState({uploadTask: this.state.storageRef.child(path).put(file,metadata)}
                ,() => { this.state.uploadTask.on(
                    "state_changed",
                    snap => {
                    },
                    err => {
                        console.log(err)
                    },
                    () => {
                        this.state.uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then(downloadUrl => {
                            this.setState({imageUrl: downloadUrl});
                        })
                        .catch(err => {
                            console.error(err);
                            this.setState({
                                errors: this.state.errors.concat(err),
                                uploadTask: null
                            });
                        });
                    }
                )
            }
        )
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
        } else if (!this.state.ScheduledStartDate.length) {
                if (!today <= this.state.ScheduledStartDate ) {
                error = { message: "Scheduled start date must be greater equal than today"};
                this.setState({ errors: errors.concat(error)});
                return false;
            }
        } else if (!this.state.ScheduledEndDate.length){
            if(this.state.ScheduledEndDate < this.state.ScheduledStartDate ){
                error = { message: "Scheduled end date must be greater equal than Scheduled start date"};
                this.setState({ errors: errors.concat(error)});
                return false;
            }
        } else {
            return true;
        }
    }

    
    clearFile = () => this.setState({file: null});

    sendFile = () => {
        const { file } = this.state;
        if(file !== null) {
            if (this.isAuthorized(file.type)) {
                const metadata = { contentType: mime.lookup(file.name)};
                this.uploadFile(file, metadata);
                this.clearFile();
            }
        }
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
        const {title, genre, author, page_nums, ScheduledStartDate, ScheduledEndDate, imageUrl} = this.state;

        //if (this.isFormValid()){
            await this.sendFile();
            await api
            .post('/book', {
                title,
                genre,
                author,
                page_nums,
                ScheduledStartDate,
                ScheduledEndDate,
                imageUrl,
                owner: this.props.currentUser.uid
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        //}
        history.push('/');
    }

    openCalendar = () => {
        this.setState({openCalendar: true})
    }

    setImageUrl = (imageUrl) => {
        return imageUrl;
    }


    setScheduledStartDate = (ScheduledStartDate) => {
        this.setState({ScheduledStartDate});
    }

    setScheduledEndDate = (ScheduledEndDate) => {
        this.setState({ScheduledEndDate});
    }


    render() {
        console.log(this.state.imageUrl);
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
                                <option>Default select</option>
                                <option value="1">文学・評論</option>
                                <option value="2">ノンフィクション</option>
                                <option value="3">ビジネス・経済</option>
                                <option value="4">歴史・地理</option>
                                <option value="5">政治・社会</option>
                                <option value="6">アート・建築・デザイン</option>
                                <option value="7">人文・思想・宗教</option>
                                <option value="8">暮らし・健康・料理</option>
                                <option value="9">サイエンス・テクノロジー</option>
                                <option value="10">趣味・実用</option>
                                <option value="11">教育・自己啓発</option>
                                <option value="12">その他</option>
                            </select>
                        </div>
                        {/* image */}
                        <div className="form-group">
                            <label htmlFor="file">Example file input</label>
                            <input type="file" className="form-control-file" name="file" onChange={this.addFile} />
                        </div>
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
                                    value={this.state.ScheduledStartDate}
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
                                    value={this.state.ScheduledEndDate}
                                />
                            </div>
                            : ''
                            }
                        </div>
                        {/* {this.state.errors.length > 0 && (this.displayErrors(this.state.errors))} */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {/* <small className="form-text text-muted" style={{marginTop: "10px"}}>If you have an account, please <Link to="/login">login here</Link></small> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(BookRegister);
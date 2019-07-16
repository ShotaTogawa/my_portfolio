import React, { Component } from 'react';
import Calendar from 'react-calendar';

class BookRegister extends Component {

    state = {
        title: "",
        genre: "",
        page_nums: "",
        expected_finish_date: ""
    }

    /**
     * set user input to state
     * @function
     * @param event
     */
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    onChange = (expected_finish_date) => {
        this.setState({expected_finish_date});
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row align-items-center">
                    <div className="col-sm"></div>
                    <div className="col-sm align-self-center">
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Signup</h1>
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
                        {/* genre */}
                        <select class="form-control" value={this.state.value} name="genre" onChange={this.handleChange}>
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
                        {/* image */}
                        {/* <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                            />
                        </div> */}
                        {/* pages */}
                        <div className="form-group">
                            <label htmlFor="passwordConfirmation">The book's number of pages</label>
                            <input
                                type="text"
                                className="form-control"
                                name="page_nums"
                                placeholder="Enter the number of pages of the book"
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* 読了予定日 */}
                        <div className="form-group">
                            <label>Expected day to fishih to read the books</label>
                            <Calendar
                                onChange={this.onChange}
                                value={this.state.expected_finish_date}
                            />
                        </div>
                        {/* {this.state.errors.length > 0 && (this.displayErrors(this.state.errors))} */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {/* <small className="form-text text-muted" style={{marginTop: "10px"}}>If you have an account, please <Link to="/login">login here</Link></small> */}
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

export default BookRegister;
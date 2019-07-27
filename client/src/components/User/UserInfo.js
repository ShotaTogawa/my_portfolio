import React, { Component, Fragment } from 'react';
import { Container, Header, Image, Step, Icon, Grid, Segment } from 'semantic-ui-react';
import CounterPieChart from './CounterPieChart';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
import CountGraph from './CountGrahp';


class UserInfo extends Component {

    state = {
        countGenre: {},
        countStatus: {}
    }

    componentDidMount() {
        const id = this.props.currentUser.uid;
        console.log(id)
        this.props.fetchBooks(id);
    }

    componentWillMount() {
        this.setState({countGenre: this.countGenre(this.props.books)})
        this.setState({countStatus: this.countStatus(this.props.books)})
    }

    countGenre = (books) => {
        const counter = {};
        const total = books.length;
        books.forEach(book => {
            if(counter[book.genre]) {
                counter[book.genre] += 1
            } else {
                counter[book.genre] = 1
            }
        })
        return counter;
    }

    countStatus = (books) => {
        const counter = {};
        const total = books.length;
        counter["total"] = total;
        books.forEach(book => {
            if(counter[book.status]) {
                counter[book.status] += 1
            } else {
                counter[book.status] = 1
            }
        })
        return counter;
    }


    checkPlural = (num) => {
        if(num === 0 || num === 1) {
            return 'book';
        } else {
            return 'books';
        }
    }

    render() {
        const user = this.props.user;
        const counter = this.state.countStatus;
        const genreCounter = this.state.countGenre;
        return (
            <Fragment>
                <Container>
                    <Header as='h2' style={{marginLeft: "15px"}}>{user.displayName}</Header>
                    <Image src={user.photoURL} size='tiny' circular />
                </Container>
                <Step.Group style={{marginBottom:"30px"}}>
                    <Step>
                        <Icon name='window minimize outline' />
                        <Step.Content>
                            <Step.Description>Before Reading</Step.Description>
                            <Step.Title>{counter.beforeReading}</Step.Title>
                        </Step.Content>
                    </Step>
                    <Step>
                        <Icon name="chart line" />
                        <Step.Content>
                            <Step.Description>Current Reading</Step.Description>
                            <Step.Title>{counter.reading}</Step.Title>
                        </Step.Content>
                    </Step>
                    <Step>
                        <Icon name="thumbs up" />
                        <Step.Content>
                            <Step.Description>Finished Reading</Step.Description>
                            <Step.Title>{counter.read}</Step.Title>
                        </Step.Content>
                        </Step>
                    <Step>
                        <Icon name="book" />
                        <Step.Content>
                            <Step.Description>Total books you have</Step.Description>
                            <Step.Title>{counter.total}</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>
                <Grid columns={2} centered textAlign="left">
                    <Grid.Column>
                        <Header as='h3' content='Genre Rate' textAlign='left' />
                        <CountGraph counter={genreCounter}/>
                    </Grid.Column>
                    <Grid.Column>
                        <CounterPieChart counter={genreCounter}/>
                    </Grid.Column>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    books: Object.values(state.book)
  })

export default connect(mapStateToProps,{fetchBooks})(UserInfo);
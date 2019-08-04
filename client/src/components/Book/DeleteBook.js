import React, {Component} from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchBooks, deleteBook } from '../../actions';
import { Header, Modal, Button } from 'semantic-ui-react';


class DeleteBook extends Component {
    componentDidMount(){
        this.props.fetchBooks();
    }
    renderActions (){
        const { id } = this.props.match.params;
        return(
            <React.Fragment>
                <Button
                    color='red'
                    onClick={ ()=> {
                        this.props.deleteBook(id)
                    }}
                >
                    Delete
                </Button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }


    render() {
        return (
            <Modal
                defaultOpen basic size='fullscreen'>
                <Header icon='archive' content='Archive this book' />
                <Modal.Content>
                    Are you sure?
                </Modal.Content>
                <Modal.Actions>
                    {this.renderActions()}
                </Modal.Actions>
            </Modal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.book[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchBooks, deleteBook })(DeleteBook);

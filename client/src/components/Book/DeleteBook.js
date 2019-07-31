import React, {Component} from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchBook, deleteBook } from '../../actions';
import { Header, Modal, Button } from 'semantic-ui-react';
import history from '../../history';



class DeleteBook extends Component {
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchBook(id);
    }
    renderActions (){
        const { id } = this.props.match.params;
        return(
            <React.Fragment>
                <Link to="/">
                    <Button
                        color='red'
                        onClick={ ()=> {
                            this.props.deleteBook(id)
                        }}
                    >
                        Delete
                    </Button>
                </Link>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent () {
        if(!this.props.book) {
            return "Are you sure you want to delete a Book?"
        }
        return `Are you sure you want to delete a book with title: ${this.props.book.title}`
    }

    render() {
        return (
            <Modal
                defaultOpen basic size='fullscreen'>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                    {this.renderContent()}
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

export default connect(mapStateToProps, { fetchBook, deleteBook })(DeleteBook);

import React, {Component} from "react";
import mime from "mime-types";
import { Modal, Input, Button, Icon } from "semantic-ui-react";
import uuidv4 from 'uuidv4';
import firebase from '../../../firebase';
import api from '../../../api';



class ImageModal extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"],
    storageRef: firebase.storage().ref(),
    modal: false,
    imageUrl: ''
  };
  

  addFile = event => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ file });
    }
  };

  uploadFile = async(file, metadata) => {
    const path = `books/images/${uuidv4()}.jpg`;
    const id = this.props.book._id;
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
                        // this.props.uploadImage({id: id}, downloadUrl);
                        api.patch(`/book/upload/${id}`, {imageUrl: downloadUrl})
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



  sendFile = async() => {
    const { file } = this.state;
    const { closeModal } = this.props;
    if (file !== null) {
      if (this.isAuthorized(file.name)) {
        const metadata = { contentType: mime.lookup(file.name) };
        await this.uploadFile(file, metadata);
        await closeModal();
        await this.clearFile();
      }
    }
  };

  isAuthorized = filename => this.state.authorized.includes(mime.lookup(filename));

  clearFile = () => this.setState({ file: null });

  render() {
      const { modal, closeModal } = this.props;
    return (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.addFile}
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.sendFile} color="green" inverted>
            <Icon name="checkmark" /> Send
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}



export default ImageModal;
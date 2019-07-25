import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'


const DeleteModal = (props) => {
    return (
        <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                {props.content}
            </Modal.Content>
            <Modal.Actions>
                {props.actions}
            </Modal.Actions>
        </Modal>
    )
}

export default DeleteModal

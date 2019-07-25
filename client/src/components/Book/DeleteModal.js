import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


const DeleteModal = (props) => {
    // return ReactDOM.createPortal(
    //     <div
    //         onClick={props.onDismiss}
    //         className="ui dimmer modals visible active"
    //     >
    //         <div onClick={(e) =>e.stopPropagation()}
    //             className="ui standard modal visible active"
    //         >
    //             <div className="header">{props.title}</div>
    //             <div className="content">
    //                 {props.content}
    //             </div>
    //             <div className="actions">
    //                 {props.actions}
    //             </div>
    //         </div>
    //     </div>,
    //     document.querySelector('#modal')
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

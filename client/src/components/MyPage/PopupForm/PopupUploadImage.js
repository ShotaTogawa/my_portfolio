import React, { Component } from 'react';
import { Popup, Button } from 'semantic-ui-react';


class PopupUploadImage extends Component {
    render() {
        return (
            <Popup trigger={<Button circular icon="file image outline" color={this.props.color} size="mini"/>} flowing hoverable>
                <form onSubmit={this.handleSubmit}>
                    <div style={{marginBottom: "10px"}}>
                        <label>Book Image upload</label>
                    </div>
                    <Button compact color="blue" size="mini">Update</Button>
                </form>
            </Popup>
        );
    }
}

export default PopupUploadImage;
import React, { Component } from 'react';
import Table from './Table';

class BookList extends Component {

    render() {
        return (
            <div>
                {/* <!-- タブボタン部分 --> */}
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                    <a href="#tab1" class="nav-link active" data-toggle="tab">読書中</a>
                    </li>
                    <li class="nav-item">
                    <a href="#tab2" class="nav-link" data-toggle="tab">開始前</a>
                    </li>
                    <li class="nav-item">
                    <a href="#tab3" class="nav-link" data-toggle="tab">読了</a>
                    </li>
                </ul>

                {/* <!--タブのコンテンツ部分--> */}
                <div class="tab-content">
                    <div id="tab1" class="tab-pane active">
                        <Table />
                    </div>
                    <div id="tab2" class="tab-pane">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/photo2.jpg" alt="" class="img-fluid" />
                    </div>
                    <div id="tab3" class="tab-pane">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/photo3.jpg" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        );
    }
}




export default BookList;
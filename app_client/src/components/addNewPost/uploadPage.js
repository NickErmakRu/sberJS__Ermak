import React from 'react';
import {connect} from "react-redux";


import { getImg } from "../../store/actions/postActions";

export class Upload extends React.Component {

    onSubmit = async (e) => {
        e.preventDefault();

        let fileValue = document.getElementsByTagName('input')[0].files[0];

        let formData = new FormData();
        formData.append('image', fileValue)

        let response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        let result = await response.json();

        document.getElementById('addressImg').innerHTML = result.content.imgs[0].slice(8);
    };

    render() {
        return (
            <div>

                <form id='uploadForm' onSubmit={this.onSubmit}>
                        Картинка: <input type="file" name="picture" accept="image/*" />
                        <input type="submit" />
                </form>

                <div id='addressImg'></div>
                <div id='seeImg'></div>
            </div>
        )
    }
}

// export default Upload;

const mapStateToProps = state => ({
    img: state.postReducer.img
})

export default connect(mapStateToProps, { getImg })(Upload)

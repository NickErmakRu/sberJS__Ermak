import React from 'react';
import { connect } from 'react-redux';

import { getPost, deletePost } from "../../store/actions/postActions";
import Spinner from "../spinner/spinner";

import './postPage.css'

export class PostPage extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPost(id);
    }

    onClick = e => {
        e.preventDefault();
        this.props.deletePost(this.props.match.params.id, this.props.history);
    }

    render() {
        const { post, user } = this.props;

        if (!post) {
            return <Spinner />
        }

        return (
            <div className='blockWidth'>
                <h1>{post.title}</h1>
                <p className='textWidth'>{post.mainText}</p>

                {user ? (
                    <div>
                        <button onClick={this.onClick} className='btn btn-danger mr-2'>Удалить</button>
                        <button className='btn btn-warning mr-2'>Редактировать</button>
                    </div>
                ) : null }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.postReducer.post,
    user: state.authReducer.user
})

export default connect(mapStateToProps, { getPost, deletePost })(PostPage)

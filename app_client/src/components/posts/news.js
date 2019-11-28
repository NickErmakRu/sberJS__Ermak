import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from "../../store/actions/postActions";
import Spinner from "../spinner/spinner";
import Post from '../post/post'

import './posts.css'

export class NewsPosts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        if (!posts) {
            return (
                <Spinner />
            )
        }


        return (
            <div className='posts-list'>
                {posts.map(post => {
                    if (post.tags.includes('новости')) {
                        return <Post key={post.id} post={post}/>
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts
})

export default connect(mapStateToProps, { getPosts })(NewsPosts)

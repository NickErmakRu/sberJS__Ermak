import React from 'react';
import { connect } from 'react-redux'

import { updatePost, getPost } from '../../store/actions/postActions'

import Spinner from '../spinner/spinner'

export class UpdatePost extends React.Component {

    constructor(props) {
        super(props);

        this.titleInput = React.createRef();
        this.shortTextInput = React.createRef();
        this.mainTextInput = React.createRef();
        this.coverImageInput = React.createRef();
        this.tagsInput = React.createRef();
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPost(id)
    }

    onSubmit = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        this.props.updatePost(id, {
            title: this.titleInput.current.value,
            shortText: this.shortTextInput.current.value,
            mainText: this.mainTextInput.current.value,
            coverImage: this.coverImageInput.current.value,
            tags: this.tagsInput.current.value,
        }, this.props.history);
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <Spinner />
        }

        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>

                    <label htmlFor='title'>Заголовок</label>
                    <input ref={this.titleInput} type='text' defaultValue={post.title} name='title' className='form-control' />

                    <label htmlFor='mainText'>Содержание</label>
                    <input ref={this.mainTextInput} type='text' defaultValue={post.mainText} name='mainText' className='form-control' />

                    <label htmlFor='coverImage'>Обложка</label>
                    <input ref={this.coverImageInput} type='text' defaultValue={post.coverImage} name='coverImage' className='form-control' />

                    <label htmlFor='tags'>Теги</label>
                    <input ref={this.tagsInput} type='text' defaultValue={post.tags} name='tags' className='form-control' />

                    <label htmlFor='shortText'>Описание</label>
                    <input ref={this.shortTextInput} type='text' defaultValue={post.shortText} name='shortText' className='form-control' />

                    <button type='submit' className='btn btn-primary'>Сохранить</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    post: state.postReducer.post
})

export default connect(mapStateToProps, { updatePost, getPost })(UpdatePost)

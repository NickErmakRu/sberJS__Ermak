import React from 'react';
import { connect } from 'react-redux'

import { addPost } from '../../store/actions/postActions'

export class AddNewPost extends React.Component {
    state = {
        title: '',
        mainText: '',
        coverImage: '',
        tags: '',
        shortText: ''
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state, this.props.history);
    }

    render() {
        const {title, mainText, coverImage, tags, shortText} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>

                    <label htmlFor='title'>Заголовок</label>
                    <input type='text' value={title} onChange={this.onChange} name='title' className='form-control' />

                    <label htmlFor='mainText'>Содержание</label>
                    <input type='text' value={mainText} onChange={this.onChange} name='mainText' className='form-control' />

                    <label htmlFor='coverImage'>Обложка</label>
                    <input type='text' value={coverImage} onChange={this.onChange} name='coverImage' className='form-control' />

                    <label htmlFor='tags'>Теги</label>
                    <input type='text' value={tags} onChange={this.onChange} name='tags' className='form-control' />

                    <label htmlFor='shortText'>Описание</label>
                    <input type='text' value={shortText} onChange={this.onChange} name='shortText' className='form-control' />

                    <button type='submit' className='btn btn-primary'>Опубликовать</button>
                </div>
            </form>
        )
    }
}

export default connect(null, {addPost})(AddNewPost)

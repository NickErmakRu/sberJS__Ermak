import React from 'react';
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";

import { registerUser } from "../../store/actions/authActions";
import { clearError } from "../../store/actions/errorActions";

export class Register extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    componentDidUpdate() {
        if (this.props.user) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        this.props.clearError();
        if (this.props.user) {
            this.props.history.push('/');
        }
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value} )
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.registerUser(this.state);
    }

    render() {
        const { errors } = this.props;

        return (
            <div className='row'>
                <form className='card p-3 mx-auto col-md-6' onSubmit={ this.onSubmit }>
                    <h2>Регистрация</h2>

                    <div className='form-group'>
                        <label htmlFor='name'>Логин</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChange}
                            name='name'/>

                        {errors.name && (<div className='text-danger'>{errors.name}</div> )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChange}
                            name='email'/>

                        {errors.email && (<div className='text-danger'>{errors.email}</div> )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Пароль</label>
                        <input
                            type='password'
                            className='form-control'
                            value={this.state.password}
                            onChange={this.onChange}
                            name='password'/>
                    </div>

                    <button type='submit' className='btn btn-primary btn-lg'>Зарегистрироваться</button>
                    {errors.message && (<div className='text-danger'>{errors.message}</div> )}

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    errors: state.errorReducer
})

export default connect(mapStateToProps, { registerUser, clearError })(Register);

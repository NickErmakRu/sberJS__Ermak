import React from 'react';

// import './App.css';

export class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value} )
    }

    onSubmit = e => {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div className='row'>
                <form className='card p-3 mx-auto col-md-6' onSubmit={ this.onSubmit }>
                    <h2>Вход</h2>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChange}
                            name='email'/>
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

                    <button type='submit' className='btn btn-primary btn-lg'>Войти</button>
                </form>
            </div>
        );
    }
}

export default Login

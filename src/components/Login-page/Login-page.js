import React from 'react';
import './Login-page.css';

import scroll from '../pics/scroll.png';
import flyingFord from '../pics/flying-ford.png';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            User: '',
            Password: '',
            helpSpellCasted: false,
            helpScrollClassName:'login-page--scroll'
            
        }
    }

    onUserNameChange = (input) => {
        this.setState({ User: input.target.value })
        console.log(this.state.User);
    }

    onPasswordNameChange = (input) => {
        this.setState({ Password: input.target.value })
        console.log(this.state.Password);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.loggingIn(this.state.User, this.state.Password)
    }
    
    helpButton = () => {
        alert('Произнесите заклинание "Accio passwordus scrollum"');
        this.setState({helpScrollClassName: 'login-page--scroll-active'})
    };

    render() {
        return (
            <div className='login-page'>
                <div className='login-page--greet'>
                    <h1>Welcome!</h1>
                    <h2>Please, sign in, Professor:</h2>
                </div>
                <div className='flying-area'>
                    <div className='flying-ford'>
                        <img className='flying-ford--img' src={flyingFord} alt='flying-ford' />
                    </div>
                </div>
                <div className={this.state.helpScrollClassName}>
                    <img className='login-page--scroll-img' src={scroll} alt='scroll' />
                    <div className='login-page--scroll-text'>
                        <p>Don't forget your Password, professor Flitwick:</p>
                        <p>wingardium-leviosa</p>
                    </div>
                </div>
                <form className='login-page--enter' onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        onChange={this.onUserNameChange}
                        placeholder='Your name, Professor'
                        required />
                    <input
                        type='password'
                        onChange={this.onPasswordNameChange}
                        placeholder='Password'
                        required />
                    <button type='submit'>Log in</button>
                    <button type='button' onClick={this.helpButton}>I need help</button>
                </form>
            </div>
        )
    }
}

export default LoginPage
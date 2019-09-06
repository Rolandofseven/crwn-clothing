import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', passsword: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in' >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                    />

                    <CustomButton type="submit">Submit Form</CustomButton>

                </form>
            </div>


        )

    }
}

export default SignIn;
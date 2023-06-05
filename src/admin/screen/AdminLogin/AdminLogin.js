import React from 'react'
import { AdminLoginContainer, Heading, LoginFormContainer,FormGroup, ButtonGroup } from './AdminLogin.styled'
function Login() {
    return (
        <AdminLoginContainer>
            <LoginFormContainer>
                <Heading><label>Login</label></Heading>
                <FormGroup>
                    <label>Username</label>
                    <input type="text" />
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <input type="password" />
                </FormGroup>
                <FormGroup>
                    <label>User Type</label>
                    <select  >
                        <option>Super Admin</option>
                        <option>Call Cordinator</option>
                    </select>
                </FormGroup>
                <ButtonGroup>
                    <button>
                        Sign In
                    </button>
                    <p>Forgot your password?</p>
                </ButtonGroup>
            </LoginFormContainer>
        </AdminLoginContainer>
    )
}
export default Login
import React, { useState } from 'react'
import { Input, Button, Spacer } from '@nextui-org/react'

const LoginForm = ({ onSubmit }) => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        onSubmit(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-center">Login</h3>
            <Spacer y={1} />
            <Input
                name="email"
                clearable
                underlined
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                defaultValue="grailians@gmail.com"
            />
            <Spacer y={1.5} />
            <Input
                name="password"
                clearable
                underlined
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                type="password"
                defaultValue="password"
            />
            <Spacer y={1.5} />
            <Button shadow color="primary" auto type="submit">
                Sign in
            </Button>
        </form>
    )
}

export default LoginForm

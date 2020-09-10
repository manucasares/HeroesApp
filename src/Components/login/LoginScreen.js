import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.replace('/');
    } 

    return (
        <div className='mt-5 container'>
            <h1>LoginScreen</h1>
            <hr />

            <button className='btn btn-primary'
                    onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

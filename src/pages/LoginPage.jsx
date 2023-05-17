import React from 'react'

const LoginPage = ({ onLogin }) => {
    return (
        <div>
            <form onSubmit={onLogin}>
                <div style={{ padding: 10 }}>
                    <label htmlFor='username'>UserName:
                        <input id='username' type='text' placeholder='username'></input>
                    </label>
                </div>
                <div style={{ padding: 10 }}>
                    <label htmlFor='username'>Password:
                        <input id='password' type='text' placeholder='password'></input>
                    </label>
                </div>
                <button style={{ padding: 10}} type='submit'>{" "}
                    Login</button>
            </form>
        </div>
    )
}
export default LoginPage
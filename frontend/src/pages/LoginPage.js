import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <form action="" method="POST">
                <input type="text" name="username" placeholder="Enter Username"/>
                <input type="password" name="password" placeholder="Enter Password"/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LoginPage

import React from 'react';

export const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

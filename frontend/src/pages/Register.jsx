import React from 'react';

export const Register = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

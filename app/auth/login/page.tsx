import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <div className='form__group'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div className='form__group'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="form__group">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage
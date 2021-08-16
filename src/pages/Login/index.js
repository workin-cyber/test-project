import axios from 'axios'
import { createContext, useState } from 'react'

export const LoginContext = createContext()

export default function Login({ children }) {

    const loginState = useState(),
        [mode, setMode] = useState('login'),//or 'register'
        [user, setUser] = loginState,
        [error, setError] = useState('')

    async function login(event) {
        event.preventDefault()

        const values = Object.values(event.target)
            .reduce((acc, input) => !input.name ? acc : ({
                ...acc,
                [input.name]: (input.type == 'checkbox' ? input.checked : input.value)
            }), {})

        console.log(values)

        try {
            const res = await axios.post(`http://localhost:4000/${mode}`, values)

            if (values.stay) localStorage.token = res.data.token

            setUser(res.data)
        }
        catch (e) {
            setError(e.response?.data?.error || e.message)
        }
    }

    return <LoginContext.Provider value={loginState}>
        {
            user ? children : <div>
                <h1>{mode}</h1>
                <form onSubmit={login}>
                    {mode == 'register' ? <input placeholder='your name' name='name' required /> : ''}
                    <input placeholder='email' name='email' type='email' required />
                    <input placeholder='password' name='password' type='password' />
                    <br /> {mode == 'register' ? '' : <label><input type='checkbox' name='stay' /> stay logged in</label>}
                    <div style={{ color: 'red' }} >{error}</div>
                    <input type='submit' value='send' />
                </form>
                <br />
                <div className='modeSelector'>{
                    mode == 'register' ?
                        <div>alredy registered?  <b onClick={() => setMode('login')}>login</b></div> :
                        <div>not registered?  <b onClick={() => setMode('register')}>register</b></div>
                }</div>
            </div>
        }
    </LoginContext.Provider>
}
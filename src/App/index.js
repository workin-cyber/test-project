import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import MyTests from 'pages/MyTests'
import Test from 'pages/Test'
import TestForm from 'pages/TestForm'
import { Route, Switch } from 'react-router-dom'
import './app.css'
import Header from 'Header'

function App() {
    return <div className='App'>
        <Login>
            <Header />
            <Switch>
                <Route path='/' component={Dashboard} exact /> {/* created tests */}
                <Route path='/my-tests' component={MyTests} /> {/* assigned tests */}
                <Route path='/test/:testId' component={Test} />
                <Route path='/test-form/:testId?' component={TestForm} /> {/* create/edit test */}
            </Switch>
        </Login>
    </div>
}

export default App

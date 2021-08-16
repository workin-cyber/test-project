import Login from 'pages/Login'
import { Route, Switch } from 'react-router-dom'
import './app.css'

function App() {
    return (
        <div className='App'>
            <Login>
                //Header

                <Switch>
                    <Route path='/' component={Dashboard} exact /> {/* created tests */}
                    <Route path='/my-tests' component={ } /> {/* assigned tests */}
                    <Route path='/test/:testId' component={ } />
                    <Route path='/test-form/:testId?' component={ } /> {/* create/edit test */}
                </Switch>
            </Login>
        </div>
    )
}

export default App

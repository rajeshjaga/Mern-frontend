import React, { useState } from 'react'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Shit from './components/layout/shit'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    return (
        <>
            <Router>
                <Shit>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return <Redirect to="/Mern-frontend" />
                            }}
                        />
                        <Route
                            default
                            path="/Mern-frontend"
                            component={() => (
                                <Posts setCurrentId={setCurrentId} />
                            )}
                        />
                        <Route
                            path="/Mern-frontend/add"
                            component={() => (
                                <Form
                                    currentId={currentId}
                                    setCurrentId={setCurrentId}
                                />
                            )}
                        />{' '}
                    </Switch>
                </Shit>
            </Router>
        </>
    )
}

export default App

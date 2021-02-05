import React, { useState, useEffect } from 'react'
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
    useEffect((_) => {}, [currentId])

    return (
        <>
            <title>something</title>
            <Router>
                <Shit>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/Mern-frontend" />
                        </Route>
                        <Route default exact path="/Mern-frontend">
                            <Posts setCurrentId={setCurrentId} />
                        </Route>
                        <Route path="/Mern-frontend/add">
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        </Route>
                    </Switch>
                </Shit>
            </Router>
        </>
    )
}

export default App

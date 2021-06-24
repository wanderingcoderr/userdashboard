import React from 'react'
import { Route } from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'

const mainRoute = () => {
    return (<div className="overflowhidden">
        <Route exact path='/' component={UserList} />
        <Route exact path='/user/:id' component={UserDetail} />
    </div>
    )
}

export default mainRoute

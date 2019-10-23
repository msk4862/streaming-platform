import React from 'react'
import { Router, Route } from 'react-router-dom'

import Header from './Header'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import history from '../history'

function App() {

    return (
        <div>
            <Router history={history}>
                <div>
                    <Header/>
                    {/* id is Wildcard navigation (can put anything intead of id string)*/}
                    <div className='ui container'>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/show/:id' exact component={StreamShow} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} /> 
                    </div>
                    
                </div>
            </Router>
        </div>
    )
}

export default App
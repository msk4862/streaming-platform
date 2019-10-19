import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'

function App() {

    return (
        <div>
            <h1>HEADER</h1>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/show' exact component={StreamShow} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} /> 
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
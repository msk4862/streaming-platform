import React from 'react'
import { connect } from 'react-redux'

import StreamForm from './StreamForm'
import { createStream } from '../../actions'

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        //preventDefault()  NOT NEEDED
        this.props.createStream(formValues)
    }

    render( ) {
        //console.log(this.props)
        return (
            <div className='container'>
                <h3 className='mt-2 form-header'>Create new stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
    
}

export default connect(null, { createStream })(StreamCreate)
import React from 'react'
import { connect } from 'react-redux'

import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
    
    //some Props are passed by Route class from App.js
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }
    
    
    renderEdit() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className='container'>
                    <h3 className='mt-2'>Edit stream</h3>
                    <StreamForm
                        initialValues={{title: this.props.stream.title,
                                        description: this.props.stream.description}}
                        onSubmit={this.onSubmit}/>
                </div>
            )
        }
    }

    render() {
        return (
            <div>{this.renderEdit()}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)
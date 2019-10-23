import React from 'react'
import { connect } from 'react-redux'

import { fetchStream } from '../../actions'

class StreamEdit extends React.Component {
    
    //some Props are passed by Route class from App.js
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    
    renderEdit() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        else {
            //Stream detail
            return (
                <div>

                </div>
            )
        }
    }

    render() {
        console.log(this.props.stream.title)

        return (
            <div>StreamEdit</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit)
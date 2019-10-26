import React from 'react'
import {connect} from 'react-redux'

import { fetchStream } from '../../actions'

class StreamShow extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchStream(this.props.match.params.id)
    }
    
    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        const { title, description } = this.props.stream

        return (
            <div>
                {title}
                {description}
            </div>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)
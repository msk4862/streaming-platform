import React from 'react'
import {connect} from 'react-redux'
import flv from 'flv.js'

import { fetchStream } from '../../actions'

class StreamShow extends React.Component {
    constructor(props) {
        super(props)

        this.videoRef = React.createRef()
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchStream(id)

        this.flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        this.flvPlayer.attachMediaElement(this.videoRef.current)
        this.flvPlayer.load();
    }

    componentWillUnmount() {
        this.flvPlayer.destroy()
    }
    
    renderStream() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream
        return (
            <React.Fragment>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                <video ref={this.videoRef} style={{width: '50%', height: '40%'}} controls/>
                {this.renderStream()}
            </div>
            
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)
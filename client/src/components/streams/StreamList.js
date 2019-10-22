import React from 'react'
import { connect } from 'react-redux'

import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderStreamList() {
        const list = this.props.streams.map(stream => {
            return (
                <div key={stream.id} className="item">
                    <img className="ui avatar image" src="../../../images/48.jpg" alt='stream_img'/>
                    <div className="content">
                        <div className="header">{stream.title}</div>
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            )
        })

        return list
        
    }

    render() {
        return (
            <div className='container'>
                <h2>STREAMS</h2>
                <div className='ui celled list'>{this.renderStreamList()}</div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    //converting object to array
    return {streams: Object.values(state.stream)}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
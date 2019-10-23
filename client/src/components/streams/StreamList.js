import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin(stream) {
        if(this.props.currentUserId  === stream.userId) {
            return (
                <div className='col-md-4 offset-9'>
                    <Link to={`/streams/edit/${stream.id}`} className='btn btn-primary col-sm-4 mr-2'>
                        Edit
                    </Link>
                    <button className='btn btn-danger col-sm-4'>Delete</button>
                </div>
            )
        }
    }

    renderStreamList() {
        const list = this.props.streams.map(stream => {
            return (
                <div key={stream.id} className="row item">
                    <img className="ui avatar image" src="../../../images/48.jpg" alt='stream_img'/>
                    <div className="col-md-7 mr-auto content">
                        <div className="header">{stream.title}</div>
                        <div className='description'>{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })

        return list
        
    }

    render() {
        return (
            <div className='container'>
                <h2 className='col-12 col-md-4'>STREAMS</h2>
                <div className='ui celled list'>{this.renderStreamList()}</div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    //converting object to array
    const props = {
        streams: Object.values(state.stream),
        currentUserId: state.auth.userId
    } 
    return props
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
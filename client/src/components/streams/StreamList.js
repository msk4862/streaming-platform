import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStreams } from '../../actions'
import StreamSearchBar from './StreamSearchBar'

class StreamList extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

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
                    <Link to={`/streams/delete/${stream.id}`} className='btn btn-danger col-sm-4 mr-2'>
                        Delete
                    </Link>
                </div>
            )
        }
    }

    handleSearch = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }


    renderStreamList() {
        const filteredlist = this.props.streams.filter(stream =>
                stream.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )

        const list = filteredlist.map(stream => {
            return (
                <div key={stream.id} className="row item col-12 col-sm-12">
                    <img className="ui image" src="../../../images/pubg.jpg" alt='stream_img'/>
                    <div className="col-md-7 ml-4 content">
                        <h3><Link to={`/streams/${stream.id}`} className="stream-header">{stream.title}</Link></h3>
                        <div>{stream.description}</div>
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
                <StreamSearchBar onSubmit={this.handleSearch}/>
                <div className='ui list'>{this.renderStreamList()}</div>
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
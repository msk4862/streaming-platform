import React from 'react'
import { connect } from 'react-redux'

import { fetchStream, deleteStream } from '../../actions'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    handleDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    renderAction = () => {
        return (
            <React.Fragment>
                    <button onClick={this.handleDelete} className="ui negative button">Delete</button>
                    <button onClick={() => history.push('/')} className="ui secondary button">Cancel</button>
            </React.Fragment>
        )
    }

    renderContent = () => {
        return (
            <p>Are you sure you want to delete 
                <strong> {this.props.stream.title} </strong>
            ?</p>
        )
    }

    render() {

        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>Stream Delete</h2>
                <Modal header='Delete Stream'
                        content={this.renderContent()}
                        action= {this.renderAction()}
                        onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)
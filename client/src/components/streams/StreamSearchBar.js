import React from 'react'

class StreamSearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '' 
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }

    render() {

        return (
            <div>
                    <form className='ui form' onSubmit={this.handleSubmit}>
                        <div className="ui icon input col-sm-12 col-12">
                            <input  className="prompt" 
                                    type="text"
                                    value={this.state.searchTerm}
                                    onChange={this.handleChange} 
                                    placeholder="Search..."/>
                            <i className="search icon mr-3"></i>
                        </div>
                    </form>

            </div>
        )
    }
}

export default StreamSearchBar
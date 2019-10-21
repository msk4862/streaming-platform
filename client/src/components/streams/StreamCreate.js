import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    
    //extracting { input } from formProps
    renderInput({ input, label }) {
        // return (
        //         <input 
        //             value={formProps.input.value}
        //             onChange={formProps.input.onChange}
        //         />
        // )

        // OR
        return (
            <div className='form-group'>
                <label for='email'>{label}</label>
                <input className='form-control' {...input}/>
            </div> 
        )
    }

    render( ) {
        return (
            <form>
                <Field name='title' component={this.renderInput} label='Enter Title: '/>
                <Field name='description' component={this.renderInput} label='Enter Description: '/>
            </form>
        )
    }
    
}

export default reduxForm({
    form: 'StreamCreate'
})(StreamCreate)
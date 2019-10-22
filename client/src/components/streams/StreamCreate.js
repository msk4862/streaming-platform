import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { createStream } from '../../actions'

class StreamCreate extends React.Component {

    //extracting { input } from formProps
    //meta : meta detail about the input
    renderInput({ input, label, meta }) {
        // return (
        //         <input 
        //             value={formProps.input.value}
        //             onChange={formProps.input.onChange}
        //         />
        // )

        // OR
        var error = ''
        if(meta.touched) {
            error = meta.error ? 'is-invalid' : 'is-valid'
        }


        return (
                <div className='form-group'>
                    <label>{label}</label>
                    <input className={`form-control ${error}`} {...input} autoComplete='off'/>
                    <div className='invalid-feedback'>{meta.error}</div>
                </div> 
        )    
        
    }

    onSubmit = (formValues) => {
        //preventDefault()  NOT NEEDED

        this.props.createStream(formValues)
    }

    render( ) {
        //console.log(this.props)
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className='col-12 col-sm-12 col-md-6' 
                >
                <Field name='title' component={this.renderInput} label='Enter Title: '/>
                <Field name='description' component={this.renderInput} label='Enter Description: '/>

                <button type='submit' className='btn btn-primary'>SUBMIT</button>
            </form>
        )
    }
    
}

/*
    prperties name of errors must be equal to 
    -input name attribute value
*/
const validate = (formValues) => {
    const errors = {}

    if(!formValues.title) {
        errors.title = 'You must enter a title!'
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description!'
    }

    return errors
}

/*
//For connecting forms only 


export default reduxForm({
    form: 'StreamCreate',
    validate: validate
})(StreamCreate)
*/

const formWrapped = reduxForm({
    form: 'StreamCreate',
    validate: validate
})(StreamCreate)

export default connect(null, {createStream})(formWrapped)
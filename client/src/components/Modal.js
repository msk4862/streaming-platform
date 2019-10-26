import React from 'react'
import ReactDOM from 'react-dom'


function Modal(props) {
    const inlineModalStyles = {
        height: '30%', 
        left: '15%', 
        top: '30%'
    }

    return ReactDOM.createPortal(
        <div className='ui dimmer active' onClick={props.onDismiss}>
            <div className='ui modal active'  
                 onClick={(e) => e.stopPropagation()}
                 style={inlineModalStyles}>
            <div className="header">{props.header}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className='actions'>
                    {props.action}
                </div>
                
            </div>
        </div>,
        document.getElementById('modal-div')
    )
}

export default Modal
import React from 'react';
import './Form.css';

export function Form(props) {
    return (
        <form className={'Form'} onSubmit={props.onSubmit}>
            <input onChange={props.onChange} value={props.state.hex} className={'input'} type="text" name={'hex'} />
            <div className={'rgb-block'}>{props.state.rgb}</div>
        </form>
    )
}

import React from 'react';
import './Form.css';

export function Form(props) {
    return (
        <form className={'Form'} onSubmit={props.onSubmit}>
            <input className={'input'} type="text" name={'hex'} onKeyDown={props.onKeyDown}/>
            <div className={'rgb-block'}>{props.rgb}</div>
        </form>
    )
}

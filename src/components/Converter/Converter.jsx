import React, {useState} from 'react';
import './Converter.css'
import {Form} from './Form/Form';
import {validateHex} from '../Functions/validateHex';
import {convertHexToRgb} from '../Functions/convertHexToRgb';

export function Converter() {
    const [rgb, setRgb] = useState('rgb ()');

    const [activeColor, setActiveColor] = useState('#33495f');

    const onkeyup = (e) => {
        const inputValue = e.target.value.trim();
        if (inputValue[0] === '#' && inputValue.length === 7) {
            if (validateHex(inputValue)) {
                const rgb = convertHexToRgb(inputValue);
                setRgb(rgb);
                setActiveColor(rgb);
                e.target.value = '';
            } else {
                setRgb('ошибка');
                setActiveColor('#FF5733');
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={'Converter'} style={{backgroundColor: activeColor}}>
            <Form
                onSubmit={onSubmit}
                onKeyUp={onkeyup}
                rgb={rgb}
            />
        </div>
    )
}

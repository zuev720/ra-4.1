import React, {useState} from 'react';
import './Converter.css'
import {Form} from './Form/Form';

export function Converter() {
    const [stateColors, setStateColors] = useState({
        hex: '',
        rgb: 'rgb ()',
    });

    const [activeColor, setActiveColor] = useState('#33495f');

    const onChange = (e) => {
        e.preventDefault();
        setStateColors({
            hex: e.target.value,
            rgb: 'rgb ()',
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let hexColor = stateColors.hex;
        const hexRegex = /^#([A-Fa-f0-9]{6})$/i;
        if (hexRegex.test(hexColor)) {
            hexColor = hexColor.replace('#', '');
            const rgba = `rgb(${parseInt(hexColor.slice(0, 2), 16)}, ${parseInt(hexColor.slice(2, 4), 16)}, ${parseInt(hexColor.slice(4, 6), 16)})`;
            setActiveColor(stateColors.hex);
            setStateColors({
                hex: stateColors.hex,
                rgb: rgba,
            })
        } else {
            setStateColors({
                hex: hexColor,
                rgb: 'ошибка',
            })
            setActiveColor('#FF5733');
        }
    }
    return (
        <div className={'Converter'} style={{backgroundColor: activeColor}}>
            <Form
                onChange={onChange}
                onSubmit={onSubmit}
                state={stateColors}
            />
        </div>
    )
}

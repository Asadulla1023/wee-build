import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

interface IProps {
    max: number
    min: number
    val: number
}

const RoundSlider = ({max, min, val}: IProps) => {
    const arr:string[] = []

    for (let i = min; i<=max; i++) {
        arr.push(`${i}м²`)
    }

    return (
        <CircularSlider
            label="wee build"
            labelColor="#46247c"
            knobColor="#fff"
            progressColorFrom="#46247c"
            progressColorTo="#46247c"
            progressSize={24}
            trackColor="#f2f2f2"
            trackSize={24}
            data={arr}
            max={max}
            min={min}
            dataIndex={val}
            onChange={(value: any) => { console.log(value); }}
        />
    )
}

export default RoundSlider
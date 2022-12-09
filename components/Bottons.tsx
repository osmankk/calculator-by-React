import React from 'react'
import ButtonsRow from './ButtonsRow'

export default function Bottons(props:any) {
    return (
        <div className='buttons' >
            <ButtonsRow value1 = '&#x25;' value2 = 'C' value3 ='&#8592;' value4='/'  setValues = {props.setValueOne}/>
            <ButtonsRow value1 = '7' value2 = '8' value3 ='9' value4='*'             setValues = {props.setValueOne}/>
            <ButtonsRow value1 = '4' value2 = '5' value3 ='6' value4='-'             setValues = {props.setValueOne}/>
            <ButtonsRow value1 = '1' value2 = '2' value3 ='3' value4='+'             setValues = {props.setValueOne}/>
            <ButtonsRow value1 = '+/-' value2 = '0' value3 ='.' value4='='            setValues = {props.setValueOne}/>
        </div>
    )
}

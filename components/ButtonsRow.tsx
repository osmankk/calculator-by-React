import React from 'react'
import Btton from './Btton'

export default function ButtonsRow(props:any) {
    return (
        <div className="row">
            <Btton value = {props.value1} setValueRow = {props.setValues}/>
            <Btton value ={props.value2}  setValueRow = {props.setValues}/>
            <Btton value = {props.value3}  setValueRow = {props.setValues}/>
            <Btton value ={props.value4} color = {props.value4==='='? true: false} valueRow = {props.values} setValueRow = {props.setValues}/>
        </div>
    )
}

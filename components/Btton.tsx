import { AnyARecord } from 'dns'
import React from 'react';
import { increment } from '../slices/counterSlice';
import { useDispatch } from 'react-redux'

export default function Btton(props: any) {
  const dispatch = useDispatch();
  return (
    <button className="col-3 text-center border border-2 p-3 btn button click" 
    onClick={(e)=>{props.setValueRow(props.value),dispatch(increment())}}
    style={{ backgroundColor: props.color ? '#8abae0' : ' #e6e6e6;' }}
    >{props.value}</button>
  )
}

import { AnyARecord } from 'dns'
import React from 'react'

export default function Btton(props: any) {
  return (
    <button className="col-3 text-center border border-2 p-3 btn button click" 
    onClick={(e)=>{props.setValueRow(props.value)}}
    style={{ backgroundColor: props.color ? '#8abae0' : ' #e6e6e6;' }}
    >{props.value}</button>
  )
}

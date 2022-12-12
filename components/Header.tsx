import { truncate } from 'fs';
import React from 'react';


import { useSelector} from 'react-redux'
import {RootState} from '../stor'

export default function Header(props:any) {

  const count = useSelector((state:RootState)=>state.counter.value);

  return (
    <div className="row  bg-color-0 head">
                <div className="col-3  p-3"><b>Calculator</b></div>
                <div className="col-3   p-3">You pressed {count} buttons</div>
                <div className="col-3   p-3"></div>
                <div className="col-3 p-3 text-end"><b>
                  <span className="short" onClick={(e)=>{props.setMin(true)}} >&nbsp; &#8722;&nbsp;</span> 
                  <span className="max"  onClick={(e)=>{props.setMin(false)}}> &nbsp;&#9744;&nbsp; </span>
                <span className="remove" onClick={(e)=>{props.setClose(true)}}>&nbsp; &#9746; &nbsp; </span>
                 </b></div>
                 {/* <button onClick={()=>dispatch(increment())}>{count}</button> */}
      </div>
  )
}

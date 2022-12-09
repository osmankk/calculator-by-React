import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Screen from '../components/Screen'
import Bottons from '../components/Bottons'
import React, { useState, useEffect } from "react"

let firstDigit: boolean = true;

export default function Home() {
  const [min, setMin] = useState(false);
  const [max, setMax] = useState(false);
  const [close, setClose] = useState(false)
  const [valueOne, setValueOne] = useState('')
  const [oldNum, setOldNum] = useState('')
  const [operation, setOperation] = useState('')
  const [display, setDispaly] = useState('');

  let calc = () => {
    let res: Number = 0;
    switch (operation) {
      case "+":
        res = parseFloat(oldNum) + parseFloat(display);
        break;

      case "-":
        res = parseFloat(oldNum) - parseFloat(display);
        break;

      case "/":
        res = parseFloat(oldNum) / parseFloat(display);
        break;

      case "*":
        res = parseFloat(oldNum) * parseFloat(display);
        break;

    }

    setDispaly(res.toString())
    console.log('res : ',res)
    console.log('display : ',display)



  }

  const handleButton = () => {
    switch (valueOne) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        let displayResult;
        if (firstDigit) {
                setOldNum(display)
                displayResult = valueOne === "0" ? '' : valueOne
                firstDigit = false;
                }
        else {
                if (valueOne === '.' && display.includes(".")) {break;}
                displayResult = display + valueOne;
              }
        setDispaly(displayResult)
        break;

      case "/":
      case "+":
      case "*":
      case "-":
               if (firstDigit) {
                setOperation(valueOne); 
               }else{
                if (operation != '') {
                  calc()
        
                }
                setOperation(valueOne);
                firstDigit = true;

               }
               break;
      case "←":
        console.log('dispaly before :', display)
        setDispaly(display.slice(0, -1));
        setValueOne('');
        console.log('value', valueOne)
        console.log('dispaly after :', display)
        console.log('----------------------')
        break;
      case "C":
        setDispaly('');
        setOperation('');
        setValueOne('');
        setOldNum('');
        break;

      case "+/-":
        setDispaly((-(parseFloat(display))).toString());
        setValueOne('');
        break;

     

      case "=":
        if (operation == '') {
          setDispaly(display)
          break;
        } else {
          calc()
          setOperation('');
          break;
        }
    }

  }

  useEffect(() => {
    handleButton();
  }, [valueOne]);


  return (
    <div className='bg-color-0  container calculator '
      style={{
        height: min ? '50px' : 'auto',
        overflow: min ? 'hidden' : 'auto',
        display: close ? 'none' : 'auto'
      }}
    >
      <Header min={min} setMin={setMin} max={max} setMax={setMax} setClose={setClose} />
      <Screen min={min} max={max} display={display} setDispaly={setDispaly} />
      <Bottons min={min} max={max} setValueOne={setValueOne} />
    </div>
  )
}

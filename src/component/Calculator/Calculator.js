import React from 'react';

import classes from './calculator.module.css'

const Calculator = () => {

  const [displayVal, setDisplayVal] = React.useState();
  const [ans, setAns] = React.useState(0);
  
  const handleType = (e, isNum) => {
    if(e==='CLS'){
      setDisplayVal("0")
      return
    }
    if(isNum){
      setDisplayVal((displayVal) => displayVal+e)  
    }else if(e==='='){

    }else{
      setAns(new Number(displayVal));
    }
    
  }
  return(
    <div className={classes.calculator}>
      <span className={classes.itemdisp}>{displayVal}</span>
      <span onClick={(e)=>handleType('CLS',false)} className={classes.itemclear} >CLS</span>
      <span onClick={(e)=>handleType('-',false)} className={classes.itemminus} >-</span>
      <span onClick={(e)=>handleType('*',false)} className={classes.itemmult} >*</span>
      <span onClick={(e)=>handleType('%',false)} className={classes.itemdiv} >%</span>
      <span onClick={(e)=>handleType('=',false)} className={classes.itemeq} >=</span>
      <span onClick={(e)=>handleType('1',true)} className={classes.item1} >1</span>
      <span onClick={(e)=>handleType('2',true)} className={classes.item2} >2</span>
      <span onClick={(e)=>handleType('3',true)} className={classes.item3} >3</span>
      <span onClick={(e)=>handleType('4',true)} className={classes.item4} >4</span>
      <span onClick={(e)=>handleType('5',true)} className={classes.item5} >5</span>
      <span onClick={(e)=>handleType('6',true)} className={classes.item6} >6</span>
      <span onClick={(e)=>handleType('7',true)} className={classes.item7} >7</span>
      <span onClick={(e)=>handleType('8',true)} className={classes.item8} >8</span>
      <span onClick={(e)=>handleType('9',true)} className={classes.item9} >9</span>
      <span onClick={(e)=>handleType('0',true)} className={classes.item0} >0</span>
    </div>
  )

}
export default Calculator;
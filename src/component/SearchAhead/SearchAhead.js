import React from 'react';
import axios from 'axios';
import classes from './searchAhead.module.css'

import Input from './Input';
import List from './List';

function SearchAhead(props) {

  const [text, setText] = React.useState("")
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if(text.length>=3){
      axios.get("https://searchcode.com/api/codesearch_I/?q="+text)
        .then((response)=>{setData(response.data.results)})
    }else{
      if(data.length>0){
        setData([])
      }
    }
  },[text])

  const resetHandler = () => {
    setText("")
    setData([])
  }


  return (
    <div className={classes.searchAhead}>
      <div className={classes.inputContainer}>
        <Input text={text} textChange={setText} reset={resetHandler}/>
      </div>
      <div className={classes.listContainer} >
        <List data={data}/>
      </div>
    </div>
  )
}

export default SearchAhead;
import React from 'react';
import axios from 'axios';
import Input from './component/input.js'
import List from './component/list.js'

function App() {
  const [text, setText] = React.useState("")
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if(text.length>=3){
      axios.get("https://searchcode.com/api/codesearch_I/?q="+text)
        .then((response)=>{setData(response.data.results)})
    }
  },[text])

  const resetHandler = () => {
    setText("")
    setData([])
  }
  return (
    <div className="App">
      <Input text={text} textChange={setText} reset={resetHandler}/>
      <p>{text}</p>
      <List data={data}/>
    </div>
  );
}

export default App;

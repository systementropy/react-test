import React from 'react';

import SearchAhead from './component/SearchAhead/SearchAhead'
import Calculator from './component/Calculator/Calculator'

function App() {
  const [appToShow, setAppToShow] = React.useState("")
  
  return (
    <div className="App">
      <ul>
        <button onClick={(e) =>setAppToShow('search-ahead')} >Search Ahead</button>
        <button onClick={(e) =>setAppToShow('calculator')} >Calculator</button>
        <button onClick={(e) => setAppToShow('xyz')} >Some Things</button>
        <button onClick={(e) => setAppToShow('xyz')} >Some Things</button>
        <button onClick={(e) => setAppToShow('xyz')} >Some Things</button>
        <button onClick={(e) => setAppToShow('xyz')} >Some Things</button>
      </ul>
      {appToShow==="search-ahead"?<SearchAhead />:null}
      {appToShow==="calculator"?<Calculator />:null}
      
    </div>
  );
}

export default App;

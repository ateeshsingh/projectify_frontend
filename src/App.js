import { useState } from 'react';
import './App.css';
import FetchDataComponent from './components/FetchDataComponent';
import SearchBoxComponent from './components/SearchBoxComponent';

function App() {
  const [searchParams,setSearchParams] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <header className='headers'>Projectify</header>
      <div className='container'>
        <FetchDataComponent searchParams={searchParams} data={data} setData={setData} />
        <SearchBoxComponent   setData={setData} />
      </div>
    </div>
  );
}

export default App;

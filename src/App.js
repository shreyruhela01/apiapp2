import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummy from './api/dummy';
import AsyncSelect from 'react-select/async';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = value => {
    setValue(value);
  };

  const handleChange =value => {
    setSelectedValue(value);
  };

  const fetchData = async () => {
    const result = await dummy.get('./users?page=1');
    const res = result.data.data;
    return res;
  }

  return (
    <div className="container">
      
      <div className='row'>
        <div className='col-md-4'> </div>
        <div className='col-md-4'>
          <AsyncSelect
          cacheOptions
          defaultOptions
          value={selectedValue}
          getOptionLabel={e=> e.name}
          getOptionValue={e=> e.id}
          loadOptions={fetchData}
          onInputChange={handleInputChange}
          onChange={handleChange}
        />
        </div>
        <div className='col-md-4'></div>
      </div>
      <br> 
      </br>
      <div className="row alert alert-info">Selected Value : {JSON.stringify(selectedValue || { } , null, 2 )}</div>

    </div>
  );

}

export default App;

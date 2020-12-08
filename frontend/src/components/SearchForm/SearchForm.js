import React, {useState} from 'react';

import './SearchForm.css';

const SearchForm = props => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <form className="form-inline">
      <input className="input is-primary" value={value} onChange={onChange} type="text"/>
      <input className="button is-primary is-light" type='submit' value="Search"/>
    </form>
  );
};

export default SearchForm;

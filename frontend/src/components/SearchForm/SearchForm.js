import React, {useState} from 'react';

import './SearchForm.css';

const SearchForm = props => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <form className="form-inline">
      <input className="input is-primary" name="search" value={value} onChange={onChange} type="text" placeholder="Flickr"/>
      <button onClick={(e) => props.handler(e, value)} className="button is-primary is-light" type='submit'>
        {props.buttonText}
      </button>
    </form>
  );
};

export default SearchForm;

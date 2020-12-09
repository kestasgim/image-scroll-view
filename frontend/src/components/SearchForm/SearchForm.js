import React, {useState} from 'react';

import './SearchForm.css';

const SearchForm = props => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  
  const submitHandler = (e) => {
    props.handler(e, value);
    setValue('');
  }

  return (
    <form className="form-inline" id="flickr-search-form">
      <input className="input is-primary" name="search" value={value} onChange={onChange} type="text" placeholder="Flickr"/>
      <button onClick={(e) => submitHandler(e)} className="button is-primary is-light" type='submit'>
        {props.buttonText}
      </button>
    </form>
  );
};

export default SearchForm;

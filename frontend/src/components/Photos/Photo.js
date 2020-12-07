import React from 'react';

import './Photo.css';

const Photo = props => {
  //https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
  let link = `https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`
  return (
    <li className="photo">
      <div className="img-container">
        <img src={link } alt={props.title}/> 
        <span className="img-title">{props.title}</span>
      </div>
    </li>
  );
};

export default Photo;
